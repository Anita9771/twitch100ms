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
  


    // Video attach and dettach function
    

    return (
        <div className="flex m-1">
        {/* Render video on screen */}
      </div>

    );

}

export default VideoTile;