import React from 'react'
import { MOVIE_CARD_IMG } from '../utils/constant';

const MoviesCard = ({imagePath}) => {

  return (
    <div className='w-[200px] p-2'>
      <img alt="movieCard"
       src={MOVIE_CARD_IMG+imagePath} 
       className="transition-transform duration-300 transform hover:scale-110"/>
    </div>
  )
}

export default MoviesCard;
