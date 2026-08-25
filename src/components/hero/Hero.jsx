import { Link } from 'react-router-dom';
import Button from '../common/Button';
import styles from './Hero.module.css';

const Hero = () => (
<section className={styles.hero}>
    <div className={`container ${styles.grid}`}>
      <div className={styles.content}>
        <span className={styles.badge}>
          <span className={styles.badgeDot}></span>
          New Arrival
        </span>
        <h1>Premium Sound,<br />Redefined.</h1>
        <p>
          Experience unparalleled audio quality with our flagship wireless headphones. Engineered for perfection, delivered to your door.
        </p>
        <div className={styles.buttons}>
          <Link to="/product/premium-wireless-headphones">
            <Button>Shop Now</Button>
          </Link>
          <Link to="/about">
            <Button variant="secondary">Learn More</Button>
          </Link>
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.imageBox}>
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80" 
            alt="Premium Wireless Headphones" 
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;