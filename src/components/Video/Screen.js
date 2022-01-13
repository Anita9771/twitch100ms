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
            className={`screen ${
              isLocal ? "" : ""
            }`}
          ></video>
        </div>
      </div>

    );

}

export default Screen;