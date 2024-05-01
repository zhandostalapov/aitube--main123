import React, { useEffect, useState } from 'react'
import HomeBanner from '../Components/HomeBanner';
import Subscribe from '../Components/Subscribe';
import TopMovies from '../Components/TopMovies';

// Компонент домашней страницы
const Home = ({setWatchList, watchList}) => {
  
  const [filterCtg, setFilterCtg] = useState('Action');
  
  // Состояние для хранения топовых фильмов
  const [topMovies, setTopMovies] = useState([]);

  // Запрос к API при изменении фильтрации
  useEffect(() => {
    // Создание экземпляра контроллера для возможности отмены запроса
    const controller = new AbortController();
    const signal = controller.signal;

    // Запрос к API для получения фильмов с заданным фильтром
    fetch(`https://omdbapi.com/?apikey=7b85d604&s=${filterCtg}`, {
      signal: signal
    })
    .then(res => res.json())
    .then(data => {
      setTopMovies(data.Search.slice(0, 8)); // Установка топовых фильмов в состояние
    })

    // Отмена запроса при размонтировании компонента
    return () => {
      controller.abort();
    }
  }, [filterCtg]) // Зависимость эффекта от изменений в filterCtg

  // Отображение компонента
  return (
    <>
      <HomeBanner />
      <TopMovies filterCtg={filterCtg} setFilterCtg={setFilterCtg} topMovies={topMovies} setWatchList={setWatchList} watchList={watchList} />
      <Subscribe />
    </>
  )
}

export default Home;
