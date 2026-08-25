import styles from './ReviewCard.module.css';

const ReviewCard = ({ review }) => (
  <div className={styles.card}>
    <div className={styles.stars}>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
    <p className={styles.text}>"{review.text}"</p>
    <div className={styles.bottom}>
      <strong>{review.name}</strong>
      <span>{new Date(review.date).toLocaleDateString()}</span>
    </div>
  </div>
);

export default ReviewCard;