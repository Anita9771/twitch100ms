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


    
    React.useEffect(() => {
        (async () => {
          console.log(screenRef.current);
          console.log(screenTrack);
          if (screenRef.current && screenTrack) {
            if (screenTrack.enabled) {
              await hmsActions.attachVideo(screenTrack.id, screenRef.current);
            } else {
              await hmsActions.detachVideo(screenTrack.id, screenRef.current);
            }
          }
        })();
        //eslint-disable-next-line react-hooks/exhaustive-deps
      }, [screenTrack]);

    return (
        <div className="flex h-screen">
        <div className="relative h-screen">
          <video
            ref={screenRef}
            autoPlay={true}
            playsInline
            muted={false}
            className={`h-screen ${
              isLocal ? "" : ""
            }`}
          ></video>
        <div className="top-0 w-full absolute flex justify-center">
              <div className="px-1 text-lg bg-red-600 text-white fixed top-4 right-20 rounded z-20">LIVE</div> 
          </div>
        </div>
      </div>

    );

}

export default Screen;