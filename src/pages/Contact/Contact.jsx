import { useState } from 'react';
import Button from '../../components/common/Button';
import styles from './Contact.module.css';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate send
    setSuccess(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <div className="container section">
      <div className="text-center" style={{marginBottom: 'var(--spacing-3xl)'}}>
        <h1>Get in Touch</h1>
        <p style={{color:'var(--color-text-secondary)', marginTop:'1rem'}}>Have a question? We'd love to hear from you.</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.info}>
          <div className={styles.card}>
            <h3>Headquarters</h3>
            <p>123 Tech Street, Suite 100<br />New York, NY 10001</p>
          </div>
          <div className={styles.card}>
            <h3>Email Us</h3>
            <p>support@mystore.com<br />sales@mystore.com</p>
          </div>
          <div className={styles.card}>
            <h3>Call Us</h3>
            <p>+1 (555) 123-4567<br />Mon-Fri, 9am to 6pm EST</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="form-group">
            <label>Your Name</label>
            <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows={5} required value={form.message} onChange={e => setForm({...form, message: e.target.value})}></textarea>
          </div>
          <Button type="submit" fullWidth>Send Message</Button>
          {success && <p className="error-text" style={{color: 'var(--color-success)', marginTop: '1rem', textAlign: 'center'}}>Message sent successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;