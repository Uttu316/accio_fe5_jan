import { useEffect } from "react";
import "./inboxHeader.css";
const InboxHeader = (props) => {
  const { user } = props;
  const { userName, photo } = user;
  const isOnline = true;

  useEffect(() => {
    console.log("user in header changed");
  }, [user]);

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
