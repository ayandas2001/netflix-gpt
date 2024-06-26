import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";


import React, { useEffect } from 'react'

const useNowPlayingMovies = () => {

    const dispatch =useDispatch();

  const getNowPlayingMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

useEffect(()=>{
  getNowPlayingMovies();

},[])

  return (
    <div>
      
    </div>
  )
}

export default useNowPlayingMovies;



