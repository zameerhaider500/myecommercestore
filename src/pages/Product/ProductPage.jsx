import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import Button from '../../components/common/Button';
import styles from './ProductPage.module.css';

const ProductPage = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [selectedImg, setSelectedImg] = useState(0);
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  if (!product) return <div className="container section text-center"><h2>Product Not Found</h2><Link to="/"><Button style={{marginTop: '1rem'}}>Go Home</Button></Link></div>;

  return (
    <div className="container section">
      <div className={styles.breadcrumb}><Link to="/">Home</Link> / <span>{product.name}</span></div>
      <div className={styles.grid}>
        <div className={styles.gallery}>
          <div className={styles.mainImg}><img src={product.images[selectedImg]} alt={product.name} /></div>
          <div className={styles.thumbs}>
            {product.images.map((img, i) => (
              <img key={i} src={img} alt={`thumb-${i}`} onClick={() => setSelectedImg(i)} className={`${styles.thumb} ${i === selectedImg ? styles.active : ''}`} />
            ))}
          </div>
        </div>
        <div className={styles.info}>
          <h1>{product.name}</h1>
          <div className={styles.rating}>{'★'.repeat(Math.floor(product.rating))} {product.rating} ({product.reviewCount} reviews)</div>
          <div className={styles.priceBox}>
            <span className={styles.price}>{formatCurrency(product.price)}</span>
            {product.oldPrice && <span className={styles.old}>{formatCurrency(product.oldPrice)}</span>}
          </div>
          <p className={styles.desc}>{product.description}</p>
          <ul className={styles.features}>
            {product.features.map(f => <li key={f}>✓ {f}</li>)}
          </ul>
          <p className={styles.stock}>Status: {product.stock > 0 ? <span style={{color: 'var(--color-success)'}}>In Stock</span> : <span style={{color: 'var(--color-error)'}}>Out of Stock</span>}</p>
          
          <div className={styles.actions}>
            <div className={styles.qtyBox}>
              <button onClick={() => setQty(q => Math.max(1, q-1))}>-</button>
              <span>{qty}</span>
              <button onClick={() => setQty(q => q+1)}>+</button>
            </div>
            <Button onClick={() => addToCart(product, qty)}>Add to Cart</Button>
            <Link to="/checkout" onClick={() => addToCart(product, qty)} style={{width: '100%'}}><Button variant="dark" fullWidth>Buy Now</Button></Link>
          </div>
          
          <div className={styles.badges}>
            <span>🚚 Cash on Delivery</span>
            <span>🔄 7-Day Returns</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;