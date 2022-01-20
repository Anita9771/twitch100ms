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
  


    React.useEffect(() => {
        (async () => {
          console.log(videoRef.current);
          console.log(videoTrack);
          if (videoRef.current && videoTrack) {
            if (videoTrack.enabled) {
              await hmsActions.attachVideo(videoTrack.id, videoRef.current);
            } else {
              await hmsActions.detachVideo(videoTrack.id, videoRef.current);
            }
          }
        })();
        //eslint-disable-next-line react-hooks/exhaustive-deps
      }, [videoTrack]);

    return (
        <div className="flex m-1">
        <div className="relative">
          {
            isModerator ? <video
            ref={videoRef}
            autoPlay={true}
            playsInline
            muted={false}
            style={{ width: 'calc(85vw - 100px)' }}
            className={`object-cover h-70 -ml-3 mt-10-h h-auto w-24 shadow-lg" ${
              isLocal ? "mirror" : ""
            }`}
          ></video> : <video
          ref={videoRef}
          autoPlay={true}
          playsInline
          muted={false}
          className={`object-cover h-40 w-40 rounded-lg mt-12 shadow-lg ${
            isLocal ? "mirror" : ""
          }`}
        ></video>
          }
          <div className="top-0 w-full absolute flex justify-center">
            {
              isModerator ? (<div className="px-1 text-lg bg-red-600 text-white fixed top-4 right-20 rounded z-20">LIVE</div>) : null
            }
          </div>
        </div>
      </div>

    );

}

export default VideoTile;