import React from 'react';
import {
  useHMSActions,
  useHMSStore,
  selectPeers
} from "@100mslive/hms-video-react";
import Avatar from "../../assets/annie_avatar.png";
import Heart from "../../assets/follow.png";
import Star from "../../assets/subscribe.png";
import Share from "../../assets/share.png";
import Dots from "../../assets/menu.png";
import User from "../../assets/reduser.png";
// import Timer from "./Timer";


const Footer = () => {
  const peers = useHMSStore(selectPeers);
  const hmsActions = useHMSActions();

  return (
    <div className="fixed bottom-0 h-24 bg-gray-200 w-screen pr-56 flex items-center z-0 justify-between">
      {/* Footer components */}
      
    </div>
  );
};

export default Footer;