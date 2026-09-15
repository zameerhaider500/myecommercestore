import { products } from '../../data/products';
import ProductCard from '../../components/product/ProductCard';
import styles from './Shop.module.css';

const Shop = () => {
  return (
    <div className="container section">
      <div className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <h1>Our Products</h1>
        <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--spacing-sm)' }}>Browse our complete collection</p>
      </div>
      
      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-center" style={{ marginTop: 'var(--spacing-2xl)', color: 'var(--color-text-muted)' }}>
          No products available right now. Check back soon!
        </p>
      )}
    </div>
  );
};

export default Shop;