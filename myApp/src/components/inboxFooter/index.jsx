import { useState } from "react";
import styles from "./inboxFooter.module.css";

const InboxFooter = (props) => {
  const { setMsgs } = props;

  const [msg, setMsg] = useState("");

  const onInput = (e) => {
    const { value } = e.target;
    setMsg(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (msg && msg.length) {
      const newMsg = {
        name: "Me",
        isBot: false,
        time: new Date().getTime(),
        text: msg,
        id: parseInt(Math.random() * 10000),
      };

      setMsgs((currMsgs) => [...currMsgs, newMsg]);
      setMsg("");
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
