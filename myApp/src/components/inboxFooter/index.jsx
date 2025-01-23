import { useState } from "react";
import styles from "./inboxFooter.module.css";
import { getStartOfDayTime } from "../../utils/timeFormatters";

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
      const currTime = new Date().getTime();
      const newMsg = {
        userName: "Me",
        isBot: currTime % 2 == 0,
        time: currTime,
        text: msg,
        id: parseInt(Math.random() * 10000),
        date: getStartOfDayTime(currTime),
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
