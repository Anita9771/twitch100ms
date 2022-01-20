import React, {useState} from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const handleStart = () => {
     setIsActive(true);
   };

  return (
    <div className="timer">
      <span className="digits">
        {("0" + Math.floor((time / 1000 * 60 * 60) % 24)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
      </span>
    </div>
  );
};

export default Timer;