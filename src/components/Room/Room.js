import React from "react";
import Screen from "../Video/Screen";
import VideoTile from "../Video/VideoTile";
import ControlBar from "../Control/ControlBar";
import ChatContainer from '../Chat/ChatContainer';
import Footer from "../Control/Footer";
import Header from "../Control/Header";
import {
  useHMSStore,
  selectLocalPeer,
  selectPeers
} from "@100mslive/hms-video-react";

const Room = () => {
  const localPeer = useHMSStore(selectLocalPeer);
  const isModerator = localPeer.roleName === "stage";
  const peers = useHMSStore(selectPeers);
  

   return (
    <div className="flex flex-row">
     
      
    </div>
  );
};

export default Room;