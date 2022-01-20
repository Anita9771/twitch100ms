import React from 'react';
import Menu from "../../assets/menu.png";
import Search from "../../assets/search.png";
import Twitch from "../../assets/twitch-logo.png";
import User from "../../assets/user.png";
import {
  useHMSStore,
  selectLocalPeer
} from "@100mslive/hms-video-react";




const Header = () => {
  
  const localPeer = useHMSStore(selectLocalPeer);
  const isModerator = localPeer.roleName === "stage";

  return (
  
    
    <div className="fixed top-0 h-12 bg-white w-screen flex justify-between items-center px-1">
    {
      isModerator ? null :
      <>
        <div className="flex mr-1 ml-2">
            <img src={Twitch} alt="top" className="image h-7 w-6"/>
            <p className="pr-5 pl-5">Browse</p>
            <img src={Menu} alt="top" className="image h-5 w-5"/>
        </div>

        <div className="flex mx-1 ">
            <input type="search" placeholder="Search" name="search" className="rounded-r-none bg-gray-300 rounded py-2 pl-3 h-8 w-70" />
            <img src={Search} alt="top" className="rounded-l-none h-8 w-8 bg-gray-200 rounded border-l-2 border-white py-1 px-1" />
        </div>

       
          <div className="flex w-48 justify-around">
            <button className="rounded font-bold text-xs bg-gray-200 p-2 ml-2">Log In</button>
            <button className="rounded font-bold text-xs text-white sign-c px-2 mr-2">Sign Up</button>
            <img src={User} alt="top" className="image h-5 w-5 mt-2"/>
        </div>
        </>
          }
    </div>
    
  
  );
};

export default Header;