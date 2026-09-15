import Hero from '../../components/hero/Hero';
import ProductCard from '../../components/product/ProductCard';
import ReviewCard from '../../components/reviews/ReviewCard';
import ReviewForm from '../../components/reviews/ReviewForm';
import Button from '../../components/common/Button';
import { products } from '../../data/products';
import SplitFeature from '../../components/common/SplitFeature';
import ScrollTextReveal from "../../components/common/ScrollTextReveal";
import { useReviews } from '../../context/ReviewContext';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const { reviews } = useReviews();

  return (
    <>
      <Hero />

      <section className="section container">
        <div className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h2>Featured Product</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--spacing-sm)' }}>Handpicked for you</p>
        </div>
        <div className={styles.productGrid}>
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div> 
      </section>

      
      <SplitFeature 
        image="/img/display-1st-image.jpeg"
        heading="Engineered for Everyday Carry & Pocket Comfort"
        subtext="Designed with a ultra-slim profile, our leather wallet slips seamlessly into your suit jacket or front pocket without creating unsightly bulk. Keep your essential cards and cash organized while maintaining a sharp, tailored silhouette all day long."/>


      <div >
        <SplitFeature 
          reverse={true} // <-- This one simple word flips the layout!
          image="/img/display-2nd-img.jpeg"
          heading="Handcrafted Quality & Timeless Durability"
          subtext="Crafted from full-grain leather, each wallet is hand-stitched to withstand years of daily use. Over time, the natural grain absorbs oils and wear, developing a rich, unique patina that grows richer with every journey."/>
      </div>

      <ScrollTextReveal />

      <section className="section" style={{ background: 'var(--color-bg-main)' }}>
  <div className="container">
    <div className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
      <h2>Why Choose Us</h2>
    </div>
    <div className={styles.featuresGrid}>
      {[
        { 
          imgSrc: '/img/transport.png', 
          title: 'Fast Delivery', 
          desc: 'Get it within 3-5 business days.' 
        },
        { 
          imgSrc: '/img/use.png', 
          title: 'Cash on Delivery', 
          desc: 'Pay when you receive your item.' 
        },
        { 
          imgSrc: '/img/shield.png', 
          title: 'Secure Packaging', 
          desc: 'Guaranteed safe arrival.' 
        },
        { 
          imgSrc: '/img/diamond.png', 
          title: 'Premium Quality', 
          desc: 'Top-tier materials and sound.' 
        }
      ].map((f) => (
        <div key={f.title} className={styles.featureCard}>
          <div className={styles.icon}>
            <img src={f.imgSrc} alt={f.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  </div>
      </section>


      <section className="section container">
        <div className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h2>Customer Reviews</h2>
        </div>
        <div className={styles.reviewGrid}>
          {reviews.slice(0, 3).map(r => <ReviewCard key={r.id} review={r} />)}
        </div>
        <div style={{ marginTop: 'var(--spacing-2xl)' }}>
          <ReviewForm />
        </div>
      </section>

      <section className={`${styles.cta} section`}>
        <div className="container text-center">
          <h2 style={{ color: 'white' }}>Tired of bulky, cluttered pockets?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', margin: 'var(--spacing-md) 0 var(--spacing-xl)' }}>Upgrade to unmatched slim sophistication. Streamline your cash and cards in an ultra-compact silhouette designed for modern ease.</p>
          <Link to="/shop"><Button variant="secondary">Order Now</Button></Link>
        </div>
      </section>
    </>
  );
};

export default Home;