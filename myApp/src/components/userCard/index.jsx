import { useNavigate } from "react-router";
import styles from "./userCard.module.css";

const UserCard = ({ photo, userName, id }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/chat/${id}`);
  };
  return (
    <div className={styles.userCard} onClick={onClick}>
      <img className={styles.userImg} src={photo} alt={userName} />
      <p className={styles.userName}>@{userName}</p>
    </div>
  );
};

export default UserCard;
