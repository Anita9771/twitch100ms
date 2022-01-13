import React from "react";
import Screen from "../Video/Screen";
import VideoTile from "../Video/VideoTile";
import ControlBar from "../Control/ControlBar";
import ChatContainer from '../Chat/ChatContainer';
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
          <div className="flex flex-wrap">
            
      </div>

      <div className="bg-gray-900 m-0 h-screen z10 self-center flex-wrap absolute top-0 left-0" style={{ width: 'calc(90vw - 100px)' }}>
     
      </div>

    </div>
  );
};

export default Room;