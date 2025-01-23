import InboxMsg from "../inboxMsg";
import InboxMsgBox from "../inboxMsgBox";
import "./inboxBody.css";

const InboxBody = (props) => {
  const { msgs } = props;

  const isAnyMessage = Array.isArray(msgs) && !!msgs.length;
  return (
    <div className="inboxBody">
      {isAnyMessage &&
        msgs.map((msg) => <InboxMsgBox key={msg.id} msg={msg} />)}
    </div>
  );
};
export default InboxBody;
