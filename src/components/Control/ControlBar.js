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

  

  return (

    <div className="fixed bottom-0 h-10 bg-gray-400 w-screen flex items-center justify-center">
      {/* Count rendering */}
     

      {/* Audio rendering */}

    

    {/* sharescreen rendering */}
      

 {/* video rendering */}


    {/* End room buttom rendering */}

      <button
      className='px-6 py-3 w-40 bg-red-600 text-white font-bold hover:opacity-80 rounded-3xl border-none focus:ring-1 ring-brand-100 outline-none'
      
    >
        
    </button>
    </div>
  );
};

export default ControlBar;