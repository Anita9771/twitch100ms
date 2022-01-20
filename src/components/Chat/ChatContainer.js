import {
    useHMSStore,
    selectHMSMessages,
    useHMSActions,
  } from '@100mslive/hms-video-react';
  import React from 'react';
  import ChatFeed from './ChatFeed';
  import ChatInput from './ChatInput';
  import ChatLayout from './ChatLayout';
  import Chat from './Chat';
  
  const ChatContainer = () => {
    const hmsActions = useHMSActions();
    const storeMessages = useHMSStore(selectHMSMessages);
    const [chatInput, setChatInput] = React.useState('');
    const sendMessage = () => {
      hmsActions.sendBroadcastMessage(chatInput);
      setChatInput('');
    };
    React.useEffect(() => {
      const el = document.getElementById('chat-feed');
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    }, [storeMessages]);
    return (
     <div className="text-black bg-white border-2 border-gray-200 w-70 fixed bottom-0 right-0 z-10 mt-8 h-auto">
        <ChatLayout className="text-black bg-white">
        <ChatFeed className="text-black bg-white">
          {storeMessages.map((m) => (
            <Chat key={m.id} msg={m} />
          ))}
        </ChatFeed>
        <ChatInput
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyPress={() => {
            sendMessage();
          }}
        />
      </ChatLayout>
     </div>
    );
  };
  
  
  export default ChatContainer;