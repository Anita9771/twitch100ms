import React from "react";
import {
    useHMSActions,
    useHMSStore,
    selectScreenShareByPeerID
  } from "@100mslive/hms-video-react";
  

const Screen = ({peer, isLocal }) => {

    const hmsActions = useHMSActions();
    const screenRef = React.useRef(null);
    const screenTrack = useHMSStore(selectScreenShareByPeerID(peer.id));


    
    // Screen function

    return (
        <div className="flex h-screen">
        {/* Display screen shared */}
      </div>

    );

}

export default Screen;