import React from "react";
import { isDateToDisplay } from "../../utils/inboxMsgBoxUtil";
import InboxMsgDate from "../inboxMsgDate";
import InboxMsg from "../inboxMsg";

const InboxMsgBox = (props) => {
  const { msg } = props;
  const isDay = isDateToDisplay(msg);

  return (
    <React.Fragment>
      {isDay && <InboxMsgDate date={msg.date} />}
      <InboxMsg {...msg} />
    </React.Fragment>
  );
};

export default InboxMsgBox;
