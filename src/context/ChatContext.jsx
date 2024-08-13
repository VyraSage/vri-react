import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const useChatContext = () => useContext(ChatContext);

const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [selectedTool, setSelectedTool] = useState('database');

  const addMessage = (role, content) => {
    setMessages((prevMessages) => [...prevMessages, { role, content }]);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        addMessage,
        selectedTool,
        setSelectedTool,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
