import React from 'react'
import MoviesCard from './MoviesCard';

const MovieList = ({title,movies}) => {
  return (
    <div>
    <h1 className='text-3xl font-bold pl-6 p-6 text-white'>{title}</h1>
    <div className='flex overflow-x-scroll pl-6' >
      <div className='flex'>
        {movies?.map((movie)=>
        <MoviesCard key={movie.id} imagePath={movie.poster_path} />
        )}
      </div>
    </div>
    </div>
  )
}

export default MovieList;
