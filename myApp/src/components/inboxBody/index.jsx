import InboxMsg from "../inboxMsg";
import "./inboxBody.css";

const InboxBody = (props) => {
  const { msgs } = props;

  const isAnyMessage = Array.isArray(msgs) && !!msgs.length;
  return (
    <div className="inboxBody">
      {isAnyMessage &&
        msgs.map((msg) => (
          <InboxMsg
            key={msg.id}
            userName={msg.name}
            text={msg.text}
            isBot={msg.isBot}
            time={msg.time}
          />
        ))}
    </div>
  );
};
export default InboxBody;
