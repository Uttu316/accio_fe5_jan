import styles from "./userCard.module.css";

const UserCard = ({ photo, userName }) => {
  return (
    <div className={styles.userCard}>
      <img className={styles.userImg} src={photo} alt={userName} />
      <p className={styles.userName}>@{userName}</p>
    </div>
  );
};

export default UserCard;
