import { useMemo, useState } from "react";
import InboxBody from "../inboxBody";
import InboxFooter from "../inboxFooter";
import InboxHeader from "../inboxHeader";
import "./inbox.css";

const Inbox = ({ userData }) => {
  const [msgs, setMsgs] = useState([]);

  return (
    <div className="inbox">
      <InboxHeader user={userData} />
      <InboxBody msgs={msgs} />
      <InboxFooter user={userData} setMsgs={setMsgs} />
    </div>
  );
};

export default Inbox;
