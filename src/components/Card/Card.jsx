import styles from "./Card.module.css";

const Card = ({ user }) => {
  if (!user === "") {
    return null;
  }
  const { login, avatar_url, followers, following, created_at, public_repos } =
    user;

  const formatDate = new Date(created_at);
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={avatar_url} alt={`${login}'s avatar`} />
      </div>
      <div className={styles.content}>
        <div className={styles.anchor}>
          <p className={styles.title}> Username:</p>
          <a href={`https://github.com/${login}`}>
            <p>{login}</p>
          </a>
        </div>
        <div className={styles.details}>
          <p className={styles.title}>Pulic Repos:</p>
          <p> {public_repos}</p>
        </div>
        <div className={styles.details}>
          <p className={styles.title}>Following:</p>
          <p> {following}</p>
        </div>
        <div className={styles.details}>
          <p className={styles.title}>Follwers:</p>
          <p> {followers}</p>
        </div>
        <div className={styles.details}>
          <p className={styles.title}> User joined:</p>
          <p>
            {`${formatDate.getDate()} ${formatDate.toLocaleDateString("en-us", {
              month: "short",
            })} ${formatDate.getFullYear()}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
