import React from 'react';

const ChatFeed = ({ children }) => {
  return (
    <div
      id='chat-feed'
      className='w-full px-2 flex flex-col'
      style={{ height: 'calc(95vh - 100px)' }}
    >
      {children}
    </div>
  );
};

export default ChatFeed;