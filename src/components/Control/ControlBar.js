import React from "react";
import {
  useHMSActions,
  useHMSStore,
  selectPeers,
  selectLocalPeer,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
  selectIsLocalScreenShared
} from "@100mslive/hms-video-react";

const ControlBar = () => {
  const peers = useHMSStore(selectPeers);
  const hmsActions = useHMSActions();
  const localPeer = useHMSStore(selectLocalPeer);
  const isModerator = localPeer.roleName === "stage";
  const isLocalAudioEnabled = useHMSStore(selectIsLocalAudioEnabled);
  const isLocalVideoEnabled = useHMSStore(selectIsLocalVideoEnabled);
  const isLocalScreenShared = useHMSStore(selectIsLocalScreenShared);

  // Toggle options

  const toggleAudio = async () => {
    await hmsActions.setLocalAudioEnabled(!isLocalAudioEnabled);
  };
  const toggleVideo = async () => {
    await hmsActions.setLocalVideoEnabled(!isLocalVideoEnabled);
  };
  
  const toggleScreen = async () => {
    await hmsActions.setScreenShareEnabled(true);
  }

  return (

    <div className="fixed bottom-0 h-10 bg-gray-400 w-screen flex items-center justify-center">
      {/* Count rendering */}
      { isModerator ? 
      <div className='flex items-center px-6 py-3 bg-gray-800 text-white font-bold  rounded-3xl space-x-2'>
       <p className='inline-block'>Count: {peers.length}</p>
    </div>
    : null
      }

      {/* Audio rendering */}

    { isModerator ? 

      <button
        className="text-xs uppercase tracking-wider bg-white py-1 px-2 rounded-lg shadow-lg text-indigo-500 mr-2"
        onClick={toggleAudio}
        active={isLocalAudioEnabled}

      >
          {isLocalAudioEnabled ? "Mute" : "Unmute"} 
      </button>
            :
            null
    }

    {/* sharescreen rendering */}
      { isModerator ? 

        <button
          className="text-xs uppercase tracking-wider bg-white py-1 px-2 rounded-lg shadow-lg text-indigo-500 mr-2"
          onClick={toggleScreen}
          active={!isLocalScreenShared}
        >
            {isLocalScreenShared ? "unShare" : "Share"} 
        </button>
              :
              null
        }

 {/* video rendering */}

{ isModerator ? 

      <button
        className="text-xs uppercase tracking-wider bg-white py-1 px-2 rounded-lg shadow-lg text-indigo-500"
        onClick={toggleVideo}
      >
        {isLocalVideoEnabled ? "Hide" : "Unhide"}
      </button>
      :
            null
    }

    {/* End room buttom rendering */}

      <button
      className='px-6 py-3 w-40 bg-red-600 text-white font-bold hover:opacity-80 rounded-3xl border-none focus:ring-1 ring-brand-100 outline-none'
      onClick={() => {
          hmsActions.leave();
        }}
    >
      { isModerator ? 
      "End" : "Leave" 
      }   
    </button>
    </div>
  );
};

export default ControlBar;