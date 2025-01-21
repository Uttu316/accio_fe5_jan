import styles from "./inboxMsg.module.css";

const InboxMsg = (props) => {
  const { text, userName, isBot } = props;
  return (
    <div
      className={`${styles.msgBox} ${
        isBot ? styles.msgBoxLeft : styles.msgBoxRight
      }`}
    >
      <p className={styles.msgUser}>{userName}</p>
      <p className={styles.msgTxt}>{text}</p>
    </div>
  );
};
export default InboxMsg;
