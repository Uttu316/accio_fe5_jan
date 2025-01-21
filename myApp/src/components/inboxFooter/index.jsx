import styles from "./inboxFooter.module.css";

const InboxFooter = () => {
  return (
    <div className={styles.inboxFooter}>
      <input placeholder="Type here..." className={styles.inboxInput} />
      <button className={styles.inboxBtn}>Send</button>
    </div>
  );
};

export default InboxFooter;
