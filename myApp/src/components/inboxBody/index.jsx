import { useEffect, useRef } from "react";
import InboxMsg from "../inboxMsg";
import InboxMsgBox from "../inboxMsgBox";
import "./inboxBody.css";

const InboxBody = (props) => {
  const { msgs } = props;
  const ref = useRef();

  const isAnyMessage = Array.isArray(msgs) && !!msgs.length;

  useEffect(() => {
    const el = ref.current;
    el.scrollTop = el.scrollHeight;
  }, [msgs.length]);
  return (
    <div ref={ref} className="inboxBody">
      {isAnyMessage &&
        msgs.map((msg) => <InboxMsgBox key={msg.id} msg={msg} />)}
    </div>
  );
};
export default InboxBody;
