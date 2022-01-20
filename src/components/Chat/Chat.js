import React from 'react';

const Chat = ({ msg }) => {
  return (
    <div className='flex flex-row -space-y-1 my-1 px-3 py-1  rounded-lg text-left '>
      <span className='text-sm font-semibold text-green-700'>
        {msg.senderName + ": " + " " }
      </span>
      <span className='text-black-100 font-sm'>{" " + msg.message}</span>
    </div>
  );
};

export default Chat;