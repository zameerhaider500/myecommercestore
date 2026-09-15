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
        <h1>Slim Design, Unmatched Craft & Everyday Luxury<br /></h1>
        <p>Precision-stitched to fit comfortably in your pocket without the bulk. Premium leather durability meets effortless organization for the modern gentleman.</p>
        <div className={styles.buttons}>
          <Link to="/shop">
            <Button>Shop Now</Button>
          </Link>
          <Link to="/about">
            <Button variant="secondary">Learn More</Button>
          </Link>
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.videoWrapper}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            className={styles.video}
          >
            <source src="/img/video-hero-wallet.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
