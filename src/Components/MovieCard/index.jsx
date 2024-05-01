import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

//информацию о фильме и  добавления/удаления из списка Watch Later
const MovieCard = ({ movie, setWatchList, watchList }) => {
  
  //Создаем массив идентификаторов фильмов из списка watchList
  const watchListIds = watchList.map((item) => item.imdbID);

  //Функция для добавления фильма в список Watch Later
  const addToFavourite = (movie) => {
    if (watchListIds.includes(movie.imdbID)) {
      alert('Movie already added to your watchlist'); // Отображаем предупреждение, если фильм уже добавлен
    } else {
      setWatchList([...watchList, movie]); // Добавляем фильм в список  оператор spread ...
    }
  };

  //Функция для удаления фильма из списка Watch Later
  const deleteFromWatchList = (id) => {
    const newWatchList = watchList.filter((item) => item.imdbID !== id); //Фильтруем список, оставляя только фильмы с другими идентификаторами
    setWatchList(newWatchList); //Обновляем состояние списка
  }

  //Эффект для сохранения списка "Watch Later" в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList)); //Сохраняем текущий список в localStorage

    return () => {
      localStorage.setItem('watchList', JSON.stringify(watchList)); //Возвращаем функцию, которая также сохраняет список при удалении компонента или изменении состояния
    };
  }, [watchList]);

  //Отображение компонента на странице
  return (
    //Визуальное представление фильма
    <div className='single-movie'>
      <div className='movie-poster'>
        <img src={movie.Poster} alt='movie-poster' /> {}
        <ul className='overlay-btns'>
          {}
          {watchListIds.includes(movie.imdbID) ? 
            (<li>
              <button
                className='btn watch-btn'
                onClick={() => deleteFromWatchList(movie.imdbID)}>
                Delete From Watch
              </button>
            </li>
            )
            :
            (
            <li>
              <button
                className='btn watch-btn'
                onClick={() => addToFavourite(movie)}>
                Watch Later
              </button>
            </li>
          )}
          {}
          <li>
            <Link className='btn details-btn' to={`/movie/${movie.imdbID}`}>
              Details
            </Link>
          </li>
        </ul>
      </div>
      { }
      <div className='movie-content'>
        <div className='top row'>
          <h5 className='title'>
            <Link className='link' to={`/movie/${movie.imdbID}`}>
              {/* Если название фильма длинное, обрезаем его */}
              {movie.Title.length > 20
                ? movie.Title.split('').slice(0, 20).join('') + '...'
                : movie.Title}
            </Link>
          </h5>
          <h6 className='year'>{movie.Year}</h6>
        </div>
        <div className='bottom row'>
          <span className='quality'>HD</span> {}
          <span className='type'>{movie.Type}</span> {}
        </div>
      </div>
    </div>
  );
};

export default MovieCard; 
