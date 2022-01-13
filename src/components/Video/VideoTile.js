import React from "react";
import {
    useHMSActions,
    useHMSStore,
    selectLocalPeer,
    selectCameraStreamByPeerID
  } from "@100mslive/hms-video-react";
  

const VideoTile = ({peer, isLocal }) => {

    const hmsActions = useHMSActions();
    const videoRef = React.useRef(null);
    const videoTrack = useHMSStore(selectCameraStreamByPeerID(peer.id));
    const localPeer = useHMSStore(selectLocalPeer);
    const isModerator = localPeer.roleName === "stage";
  
  // Video tile function


    return (
        <div className="flex m-1">
        <div className="relative">
          {/* display different video display sizes */}
          
          <div className="top-0 w-full absolute flex justify-center">
            <div className="px-2 py-1 text-sm bg-gray-600 text-white mt-2 ml-2 rounded-lg">{`${peer.name}`}</div>
          </div>
        </div>
      </div>

    );

}

export default VideoTile;