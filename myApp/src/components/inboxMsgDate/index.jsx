import { Component, useMemo } from "react";
import { formatDate } from "../../utils/timeFormatters";
import styles from "./inboxMsgDate.module.css";

class InboxMsgDate extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { date = new Date() } = this.props;
    const displaydate = formatDate(date);

    return (
      <div className={styles.msgDateBox}>
        <p className={styles.msgDateText}>{displaydate}</p>
      </div>
    );
  }
}

export default InboxMsgDate;
