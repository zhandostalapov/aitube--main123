import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const MovieDetails = () => {
  // Извлекаем ID фильма из URL параметров с помощью useParams
  const { id } = useParams();

  // Состояние для хранения деталей фильма
  const [movie, setMovie] = useState('');

  // Извлекаем последнее слово из названия фильма для стилизации
  let lastWord = movie ? movie.Title.split(' ').pop() : '';

  // Получаем детали фильма с помощью API OMDb, когда компонент монтируется
  useEffect(() => {
    const controller = new AbortController(); // Для возможности отмены запроса
    const signal = controller.signal;

    // Запрашиваем детали фильма на основе ID
    fetch(`https://omdbapi.com/?apikey=7b85d604&i=${id}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.error("Ошибка при получении деталей фильма:", error);
      });

    // Функция очистки для отмены запроса, если компонент размонтируется
    return () => {
      controller.abort();
    };
  }, [id]); // Массив зависимостей гарантирует, что эффект будет запущен при изменении ID

  return (
    <header className='page-header movie-details-header'>
      <div className='container'>
        {movie.Title ? ( // Условный рендеринг: отображаем детали только если название фильма существует
          <div className='movie-details'>
            <div className='movie-poster'>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className='details-content'>
              {movie.Director ? ( // Отображаем имя режиссера, если доступно
                <h5 className='director'>{movie.Director.split(',')[0]}</h5>
              ) : null}
              <h2 className='title'>{movie.Title.split(' ').slice(0, -1).join(' ')} <span>{lastWord}</span></h2>
              {/* Далее идет другой контент и элементы UI */}
              {/* ... */}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default MovieDetails;
