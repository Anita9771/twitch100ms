import React, { useState } from "react";
import Select from "../Select/Select";
import { useHMSActions} 
         from '@100mslive/hms-video-react';
import getToken from "../../utils/getToken";



const JoinForm = () => {

  const hmsActions = useHMSActions();
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState('stage');


  const joinRoom = () => {
    
      getToken(role)
      .then((token) => {
        hmsActions.join({
          userName: userName || 'Anonymous',
          authToken: token,
          settings: {
            isAudioMuted: true,
          },
        });
      })
      .catch((error) => {
        console.log('Token API Error', error);
      });

  };


  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-800">
      <div className="w-64 h-32 p-4 rounded-lg">
        <form
           onSubmit={(e) => {
             e.preventDefault();
          }}
        >
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            name="userName"
            className="shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            placeholder="John Doe"
            required
          />
           <Select state={{ role, setRole }} />
          <button 
          onClick={joinRoom} 
          className="px-4 py-2 bg-blue-700 rounded-lg text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;