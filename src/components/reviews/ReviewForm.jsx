import { useState } from 'react';
import { useReviews } from '../../context/ReviewContext';
import Button from '../common/Button';
import styles from './ReviewForm.module.css';

const ReviewForm = () => {
  const { addReview } = useReviews();
  const [form, setForm] = useState({ name: '', text: '', rating: 5 });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.text) return;
    addReview(form);
    setForm({ name: '', text: '', rating: 5 });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Write a Review</h3>
      <div className={styles.row}>
        <input type="text" placeholder="Your Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        <select value={form.rating} onChange={e => setForm({...form, rating: Number(e.target.value)})}>
          {[5,4,3,2,1].map(r => <option key={r} value={r}>{r} Stars</option>)}
        </select>
      </div>
      <textarea placeholder="What did you think?" value={form.text} onChange={e => setForm({...form, text: e.target.value})} required rows={4}></textarea>
      <Button type="submit">Submit Review</Button>
      {success && <p className={styles.success}>Thank you! Your review has been added.</p>}
    </form>
  );
};

export default ReviewForm;