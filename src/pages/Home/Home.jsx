import Hero from '../../components/hero/Hero';
import ProductCard from '../../components/product/ProductCard';
import ReviewCard from '../../components/reviews/ReviewCard';
import ReviewForm from '../../components/reviews/ReviewForm';
import Button from '../../components/common/Button';
import { products } from '../../data/products';
import SplitFeature from '../../components/common/SplitFeature';
import { useReviews } from '../../context/ReviewContext';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const { reviews } = useReviews();

  return (
    <>
      <Hero />

      
      <SplitFeature 
        image="https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80"
        heading="Engineered for Perfection"
        subtext="Every curve, every material, and every component has been rigorously tested to ensure you get the most premium audio experience possible. We don't compromise on quality."
      />

      
      <section className="section container">
        <div className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h2>Featured Product</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--spacing-sm)' }}>Handpicked for you</p>
        </div>
        <div className={styles.productGrid}>
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        
      </section>

      <div style={{ background: 'var(--color-bg-surface)' }}>
        <SplitFeature 
          reverse={true} // <-- This one simple word flips the layout!
          image="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80"
          heading="Designed for Your Lifestyle"
          subtext="Whether you are commuting, working out, or relaxing at home, our products seamlessly integrate into your daily routine. Lightweight, durable, and infinitely comfortable."
        />
      </div>

      <section className="section" style={{ background: 'var(--color-bg-surface)' }}>
  <div className="container">
    <div className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
      <h2>Why Choose Us</h2>
    </div>
    <div className={styles.featuresGrid}>
      {[
        { 
          imgSrc: 'transport.png', 
          title: 'Fast Delivery', 
          desc: 'Get it within 3-5 business days.' 
        },
        { 
          imgSrc: 'use.png', 
          title: 'Cash on Delivery', 
          desc: 'Pay when you receive your item.' 
        },
        { 
          imgSrc: 'shield.png', 
          title: 'Secure Packaging', 
          desc: 'Guaranteed safe arrival.' 
        },
        { 
          imgSrc: 'diamond.png', 
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
          <h2 style={{ color: 'white' }}>Ready to upgrade your audio?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', margin: 'var(--spacing-md) 0 var(--spacing-xl)' }}>Don't miss out on our flagship product.</p>
          <Link to="/product/premium-wireless-headphones"><Button variant="secondary">Order Now</Button></Link>
        </div>
      </section>
    </>
  );
};

export default Home;