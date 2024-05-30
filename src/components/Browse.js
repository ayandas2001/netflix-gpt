import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {

  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <Maincontainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse;
