import React from 'react'
import MovieCard from '../Components/MovieCard';
import SubBanner from '../Components/SubBanner';
import Subscribe from '../Components/Subscribe';
import NoData from '../Components/Search/noData';

const Favourites = ({watchList, setWatchList}) => {
  return (
    <>
      {/* Вывод баннера для избранных фильмов */}
      <SubBanner title={'My Favourites'} pathName={'Favourites'} />
      
      <section className='results-sec'>
        <div className='container'>
          <div className='section-title'>
            {/* Заголовок раздела */}
            <h5 className='sub-title'>ONLINE STREAMING</h5>
            <h2 className='title'>my watch List</h2>
          </div>
          
          <div className='row movies-grid'>
            {/* Проверка на наличие фильмов в списке избранных */}
            {
              watchList.length
              ?
              // Если есть фильмы, отобразить каждый из них с помощью MovieCard
              watchList.map(movie => (
                <MovieCard movie={movie} key={movie.imdbID} setWatchList={setWatchList} watchList={watchList} />
              ))
              :
              // Если список пуст, отобразить компонент NoData
              <NoData />
            }
          </div>
        </div>
      </section>
      
      {/* Компонент для подписки, возможно, на новости или обновления */}
      <Subscribe />
    </>
  )
}

export default Favourites;
