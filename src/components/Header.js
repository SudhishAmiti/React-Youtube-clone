import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/Logo.jpg";
// import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
// import { YOUTUBE_SEARCH_API } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  // useEffect(()=>{
  //   getSearchSuggestions();
  // },[searchQuery]);

  // const getSearchSuggestions = async() => {
  //     const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  //     const json = await data.json();
  //     console.log(json[1]);
  // }
  const handleClick = () => {
    dispatch(toggleMenu(false));
  }
  return (
    <div className="grid grid-flow-col p-5 shadow-lg items-center">
      <div className="flex col-span-1">
        <RxHamburgerMenu className="h-8 cursor-pointer" onClick={()=> handleClick()}/>
        <img className="px-4 h-8" src={Logo} alt="loading..." />
      </div>
      <div className="col-span-10 ml-[222px]">
        <input className="w-1/2 border border-gray-500 p-2 rounded-l-full" type="text" value={searchQuery} onChange={((e)=> setSearchQuery(e.target.value))}/>
        <button className="border border-gray-500 p-2 rounded-r-full hover: bg-gray-200">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <FaUser />
      </div>
    </div>
  );
};

export default Header;
