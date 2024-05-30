import React, { useEffect} from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailer } from '../utils/moviesSlice';


const VideoBackground = ({id}) => {

const dispatch = useDispatch();
const trailerVideo= useSelector(store=>store.movies?.movieTrailer);

const getMoviesDetails = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos',API_OPTIONS);
  const json = await data.json();
  const filteredData = json.results.filter((video)=>video.type==="Trailer");
  const trailer = filteredData.length>0 ? filteredData[0] : json.results[0];
  dispatch(addMovieTrailer(trailer));

}

useEffect(()=>{
  getMoviesDetails();
},[])



  return (
    <div className='w-screen'>
      <iframe 
       className='w-screen aspect-video'
       src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1"}
       title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       >
      </iframe>
    </div>
  )
}

export default VideoBackground;
