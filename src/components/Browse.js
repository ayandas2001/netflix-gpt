import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import useUpcomingMovies from '../customHooks/useUpcomingMovies';
const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  return (
    <div>
      <Header />
      <Maincontainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse;
