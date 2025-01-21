import InboxBody from "../inboxBody";
import InboxFooter from "../inboxFooter";
import InboxHeader from "../inboxHeader";
import "./inbox.css";

const Inbox = () => {
  const userName = "Bot";
  return (
    <div className="inbox">
      <InboxHeader name={userName} />
      <InboxBody />
      <InboxFooter />
    </div>
  );
};

export default Inbox;
