import React from 'react';

const ChatInput = ({ value, onChange, onKeyPress }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type='text'
      className='px-3 py-2 m-2 bg-gray-200 rounded-lg text-black focus:ring-1 ring-brand-100 outline-none placeholder-gray-200 w-72'
      placeholder='Send a Message'
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          if (!event.shiftKey) {
            event.preventDefault();
            if (value.trim() !== '') {
              onKeyPress();
            }
          }
        }
      }}
    />
  );
};

export default ChatInput;