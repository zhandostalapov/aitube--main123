import React from 'react';
import MovieCard from '../MovieCard';
import './style.css';

const TopMovies = ({ filterCtg, setFilterCtg, topMovies, setWatchList, watchList }) => {
  
  // Функция обработчик клика по кнопкам категорий
  const handleFilterCtg = (e) => {
    setFilterCtg(e.target.textContent);
  };

  return (
    <section className='new-sec top-rated-sec' id='movies'>
      <div className='container'>
        
        {/* Заголовок раздела */}
        <div className='section-title'>
          <h5 className='sub-title'>ONLINE STREAMING</h5>
          <h2 className='title'>Top Rated Movies</h2>
        </div>
        
        {/* Кнопки фильтрации по категориям */}
        <div className='btns-div categories-btns'>
          {['Action', 'Comedy', 'Western', 'Horror'].map(category => (
            <button
              key={category}
              className={
                filterCtg === category
                  ? 'btn category-btn active'
                  : 'btn category-btn'
              }
              onClick={(e) => handleFilterCtg(e)}>
              {category}
            </button>
          ))}
        </div>
        
        {/* Отображение фильмов */}
        <div className='row movies-grid'>
          {
            topMovies
            ? topMovies.map(movie => (
                <MovieCard 
                  movie={movie} 
                  key={movie.imdbID} 
                  setWatchList={setWatchList} 
                  watchList={watchList} 
                />
              ))
            : null
          }
        </div>
      </div>
    </section>
  );
};

export default TopMovies;
