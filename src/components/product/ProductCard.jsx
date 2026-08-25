import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import Button from '../common/Button';
import { useCart } from '../../context/CartContext';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

  return (
    <div className={styles.card}>
      {discount > 0 && <span className={styles.badge}>-{discount}%</span>}
      <Link to={`/product/${product.slug}`}>
        <div className={styles.imageWrapper}>
          <img src={product.images[0]} alt={product.name} />
        </div>
      </Link>
      <div className={styles.content}>
        <h3>{product.name}</h3>
        <div className={styles.rating}>{'★'.repeat(Math.floor(product.rating))} {product.rating}</div>
        <div className={styles.pricing}>
          <span className={styles.price}>{formatCurrency(product.price)}</span>
          {product.oldPrice && <span className={styles.oldPrice}>{formatCurrency(product.oldPrice)}</span>}
        </div>
        <Button fullWidth onClick={() => addToCart(product)}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;