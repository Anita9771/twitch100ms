import React from 'react';

const ChatFeed = ({ children }) => {
  return (
    <div
      id='chat-feed'
      className='w-full px-2 flex flex-col text-black bg-white'
      style={{ height: 'calc(92vh - 100px)' }}
    >
      {children}
    </div>
  );
};

export default ChatFeed;