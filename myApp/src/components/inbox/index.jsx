import { useState } from "react";
import InboxBody from "../inboxBody";
import InboxFooter from "../inboxFooter";
import InboxHeader from "../inboxHeader";
import "./inbox.css";

const Inbox = () => {
  const [msgs, setMsgs] = useState([]);

  return (
    <div className="inbox">
      <InboxHeader />
      <InboxBody msgs={msgs} />
      <InboxFooter setMsgs={setMsgs} />
    </div>
  );
};

export default Inbox;
