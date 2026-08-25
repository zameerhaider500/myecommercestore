import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import Button from '../../components/common/Button';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const shipping = cartTotal > 0 ? 10.00 : 0.00;

  if (cartItems.length === 0) {
    return (
      <div className="container section text-center" style={{minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
        <h2>Your Cart is Empty</h2>
        <p style={{color: 'var(--color-text-secondary)'}}>Looks like you haven't added anything yet.</p>
        <Link to="/"><Button>Continue Shopping</Button></Link>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1 style={{marginBottom: 'var(--spacing-2xl)'}}>Shopping Cart</h1>
      <div className={styles.grid}>
        <div className={styles.items}>
          {cartItems.map(item => (
            <div key={item.id} className={styles.item}>
              <img src={item.images[0]} alt={item.name} />
              <div className={styles.details}>
                <h3>{item.name}</h3>
                <p className={styles.price}>{formatCurrency(item.price)}</p>
              </div>
              <div className={styles.qtyControl}>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <p className={styles.subtotal}>{formatCurrency(item.price * item.quantity)}</p>
              <button onClick={() => removeFromCart(item.id)} className={styles.remove}>✕</button>
            </div>
          ))}
        </div>
        
        <div className={styles.summary}>
          <h2>Order Summary</h2>
          <div className={styles.row}><span>Subtotal</span><span>{formatCurrency(cartTotal)}</span></div>
          <div className={styles.row}><span>Shipping</span><span>{formatCurrency(shipping)}</span></div>
          <div className={`${styles.row} ${styles.total}`}><span>Total</span><span>{formatCurrency(cartTotal + shipping)}</span></div>
          <Link to="/checkout"><Button fullWidth style={{marginTop: 'var(--spacing-md)'}}>Proceed to Checkout</Button></Link>
          <Link to="/"><Button variant="secondary" fullWidth style={{marginTop: 'var(--spacing-sm)'}}>Continue Shopping</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;