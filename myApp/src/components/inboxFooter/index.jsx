import { useContext, useState } from "react";
import styles from "./inboxFooter.module.css";
import { createMsg, generateAIMsg } from "../../utils/chatUtil";
import { ChatContext } from "../../context/chatProvider";

const InboxFooter = (props) => {
  const { setMsgs } = props;
  const { userData } = useContext(ChatContext);
  const { userName } = userData;

  const [msg, setMsg] = useState("");

  const onInput = (e) => {
    const { value } = e.target;
    setMsg(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (msg && msg.length) {
      const newMsg = createMsg({ msg });
      setMsgs((currMsgs) => [...currMsgs, newMsg]);
      setMsg("");

      const AIMsg = await generateAIMsg(msg);
      const newAIMsg = createMsg({
        msg: AIMsg,
        isBot: true,
        userName: userName,
      });
      setMsgs((currMsgs) => [...currMsgs, newAIMsg]);
    }
  };

  return (
    <div className={styles.inboxFooter}>
      <form onSubmit={onSubmit}>
        <input
          onChange={onInput}
          value={msg}
          placeholder="Type here..."
          className={styles.inboxInput}
        />
        <button className={styles.inboxBtn}>Send</button>
      </form>
    </div>
  );
};

export default InboxFooter;
