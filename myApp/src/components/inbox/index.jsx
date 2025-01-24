import { useMemo, useState } from "react";
import InboxBody from "../inboxBody";
import InboxFooter from "../inboxFooter";
import InboxHeader from "../inboxHeader";
import "./inbox.css";

const Inbox = () => {
  const currentUser = useMemo(() => {
    return {
      userName: "Bot",
      id: 12,
    };
  }, []);

  const [msgs, setMsgs] = useState([]);

  return (
    <div className="inbox">
      <InboxHeader user={currentUser} />
      <InboxBody msgs={msgs} />
      <InboxFooter setMsgs={setMsgs} />
    </div>
  );
};

export default Inbox;
