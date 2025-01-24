import { useEffect } from "react";
import "./inboxHeader.css";
const InboxHeader = (props) => {
  const { user } = props;
  const { userName } = user;

  useEffect(() => {
    console.log("user in header changed");
  }, [user]);

  return (
    <div className="inboxHeader">
      <h2 className="inboxHeaderName">{userName}</h2>
    </div>
  );
};

export default InboxHeader;
