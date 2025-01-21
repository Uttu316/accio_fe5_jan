import InboxMsg from "../inboxMsg";
import "./inboxBody.css";

const InboxBody = () => {
  return (
    <div className="inboxBody">
      <InboxMsg text="Hello" userName="Bot" isBot={true} />
      <InboxMsg text="Bye" userName="Me" isBot={false} />
    </div>
  );
};
export default InboxBody;
