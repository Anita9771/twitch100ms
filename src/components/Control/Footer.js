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
      <div className="flex mt-3">
       <div className="relative ml-5">
          <div className="rounded-circle w-20 h-20 border-sign-c border-4">
            <div className="rounded-circle w-21 h-21 border-white border-4">
              <img src={Avatar} alt="avatar" className="rounded-circle w-16 h-16" />
            </div>
          </div>
          <p className=" w-12 bg-red-600 text-white border-white absolute z-50 bottom-live left-live border-2 rounded">LIVE</p>
       </div>

       <div className="text-left text-lg ml-3">
        <h5 className="font-semibold">Annietah</h5>
        <h6 className="font-semibold text-sm">Frontend developer @Annietah</h6>
        <p className="text-sign-c">TECH AGE</p>
       </div>
      </div>

      <div className="pr-24">
        <div className="flex w-56 ml-2">
          <button className="text-white rounded p-1 px-2 sign-c flex "><img src={Heart} alt="avatar" className="w-5 h-5 mr-2"/> Follow</button>
          <button className="text-black bg-white rounded p-1 px-2 flex ml-2 bg-gray-400"><img src={Star} alt="avatar" className="w-5 h-5 mr-2"/> Subscribe</button>
        </div>
        <div className="flex mt-2 mx-10 pr-5">
        <div className="flex mx-2">
          <p className="text-red-700 flex mx-2"><img src={User} alt="avatar" className="w-5 h-5 mr-2" />{peers.length}</p>
          <button
            className='text-xs uppercase tracking-wider bg-white py-1 px-2 rounded-lg shadow-lg text-iwhite ml-2 bg-red-600'
            onClick={() => {
          hmsActions.leave();
        }}
    >
     Leave
    </button>
        </div>
        {/* <div className="flex mx-2">
          <img src={Share} alt="avatar" className="w-6 h-5 mx-1"/>
          <img src={Dots} alt="avatar" className="w-5 h-5 mx-1"/>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;