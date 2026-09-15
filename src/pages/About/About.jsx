import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => (
  <div className="container section">
    <div className={styles.grid}>
      <div>
        <span className={styles.badge}>Our Story</span>
        <h1>We believe in premium leather craft without the retail markups.</h1>
        <p>Founded in 2023, our mission is simple: bring authentic, full-grain leather wallets directly to you without bloated brand markups. Every piece is handcrafted using traditional leatherworking techniques, built to endure daily wear while developing a rich patina over time.</p>
        <p>We offer Cash-on-Delivery nationwide so you can inspect the quality and feel the genuine leather firsthand before paying, ensuring complete confidence in every purchase.</p>
        <Link to="/shop"><Button style={{marginTop: 'var(--spacing-xl)'}}>Explore Products</Button></Link>
      </div>
      <div className={styles.imageBox}>
        <img src="/img/display-1st-image.jpeg" alt="About Us" />
      </div>
    </div>
  </div>
);

export default About;