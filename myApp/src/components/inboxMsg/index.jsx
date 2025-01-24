import { get12Hour } from "../../utils/timeFormatters";
import styles from "./inboxMsg.module.css";
import Markdown from "react-markdown";

const InboxMsg = (props) => {
  const { text, userName, isBot, time } = props;
  const displayTime = get12Hour(time);
  return (
    <div
      className={`${styles.msgBox} ${
        isBot ? styles.msgBoxLeft : styles.msgBoxRight
      }`}
    >
      <p className={styles.msgUser}>
        <span className={styles.msgName}>{userName}</span>
        <span className={styles.msgTime}>{displayTime}</span>
      </p>

      <Markdown className={styles.msgTxt}>{text}</Markdown>
    </div>
  );
};
export default InboxMsg;
