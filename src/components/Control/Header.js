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
      {/*Attach code here  */}
    
    </div>
    
  
  );
};

export default Header;