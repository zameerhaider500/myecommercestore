import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => (
  <div className="container section">
    <div className={styles.grid}>
      <div>
        <span className={styles.badge}>Our Story</span>
        <h1>We believe in premium quality without the premium hassle.</h1>
        <p>Founded in 2023, MyStore was created with a simple mission: provide top-tier audio equipment directly to consumers, without the bloated markups. We curate only the best, ensuring every product meets our rigorous standards for sound quality, durability, and design.</p>
        <p>We rely on a straightforward Cash-on-Delivery model because we trust our products, and we want you to feel completely secure when shopping with us.</p>
        <Link to="/product/premium-wireless-headphones"><Button style={{marginTop: 'var(--spacing-xl)'}}>Explore Products</Button></Link>
      </div>
      <div className={styles.imageBox}>
        <img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80" alt="About Us" />
      </div>
    </div>
  </div>
);

export default About;