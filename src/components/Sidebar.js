import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { FaVideo } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { IoMusicalNotes } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa";
import { MdSportsEsports } from "react-icons/md";
import { PiFilmSlateFill } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import { MdBugReport } from "react-icons/md";
import { RiFeedbackFill } from "react-icons/ri";
import { MdOutlineHelp } from "react-icons/md";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if(!isMenuOpen) return null;


  return !isMenuOpen ? null : (
    <div className='p-5 shadow-lg w-48 h-scree'>
      <ul>
        <Link to = "/"><li className='flex items-center my-2'><IoMdHome className='mr-1'/>Home</li></Link>
        <li className='flex items-center my-2'><SiYoutubeshorts className='mr-1'/>Shorts</li>
        <li className='flex items-center my-2'><FaVideo className='mr-1'/>Videos</li>
        <li className='flex items-center my-2'><MdSubscriptions className='mr-1'/>Subscriptions</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li className='flex items-center my-2'><IoMusicalNotes className='mr-1'/>Music</li>
        <li className='flex items-center my-2'><FaTrophy className='mr-1'/>Sports</li>
        <li className='flex items-center my-2'><MdSportsEsports className='mr-1'/>Gaming</li>
        <li className='flex items-center my-2'><PiFilmSlateFill className='mr-1'/>Film</li>
      </ul>
      
      <ul className='pt-5'>
        <li className='flex items-center my-2 font-bold'><IoSettings className='mr-1'/>Settings</li>
        <li className='flex items-center my-2 font-bold'><MdBugReport className='mr-1'/>Report History</li>
        <li className='flex items-center my-2 font-bold'><RiFeedbackFill className='mr-1'/>FeedBack</li>
        <li className='flex items-center my-2 font-bold'><MdOutlineHelp className='mr-1'/>Help</li>
      </ul>
    </div>
  )
}

export default Sidebar;
