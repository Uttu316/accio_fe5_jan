import "./inboxHeader.css";
const InboxHeader = (props) => {
  const { name } = props;
  return (
    <div className="inboxHeader">
      <h2 className="inboxHeaderName">{name}</h2>
    </div>
  );
};

export default InboxHeader;
