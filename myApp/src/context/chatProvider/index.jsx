import { createContext } from "react";

export const ChatContext = createContext();

const ChatProvider = (props) => {
  const { children, userData } = props;

  return (
    <ChatContext.Provider value={{ userData }}>{children}</ChatContext.Provider>
  );
};
export default ChatProvider;
