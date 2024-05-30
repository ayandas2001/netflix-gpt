import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" w-screen aspect-video pt-96 px-32 absolute text-white bg-gradient-to-r from-black">
      <h1 className='font-bold text-4xl p-2'>{title}</h1>
      <p className='w-1/4 text-xl p-4 '>{overview}</p>
      <div className='flex space-x-3 mx-2 pt-4'>
      <button className="flex items-center justify-center px-8 py-4 bg-white  rounded-lg text-black text-xl hover:bg-opacity-80">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z"></path>
        </svg>
        Play
      </button>
      <button className="flex items-center justify-center px-8 py-4 bg-gray-600  text-white  rounded-lg shadow-md text-lg hover:bg-opacity-80">
        More Info
      </button>
      </div>
      
    </div>
  )
}

export default VideoTitle;
