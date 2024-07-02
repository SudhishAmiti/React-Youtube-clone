import React from 'react'
import { AiFillLike } from "react-icons/ai";

const VideoCards = ({info}) => {
    const{snippet, statistics} = info;
    const{channelTitle, title, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-72 h-80 shadow-lg '>
      <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url}/>
      <ul>
        <li className='font-bold'>{title.slice(0,40)}</li>
        <li>{channelTitle}</li>
        <li className='flex items-center'><AiFillLike/>{statistics.viewCount}</li>
      </ul>
    </div>
  )
}

export default VideoCards;
