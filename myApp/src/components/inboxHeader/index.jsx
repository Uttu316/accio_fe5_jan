import { useContext } from "react";
import "./inboxHeader.css";
import { ChatContext } from "../../context/chatProvider";
const InboxHeader = () => {
  const { userData } = useContext(ChatContext);
  const { userName, photo } = userData;
  const isOnline = true;

  return (
    <div className="inboxHeader">
      <div className="inboxHederUserInfo">
        <div className="inboxHeaderPhoto">
          <img alt={userName} src={photo} />
          {isOnline && <span className="inboxLoginStatus" />}
        </div>
        <h2 className="inboxHeaderName">{userName}</h2>
      </div>
    </div>
  );
};

export default InboxHeader;
