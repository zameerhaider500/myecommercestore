import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { submitOrder } from '../../utils/orderService';
import Button from '../../components/common/Button';
import styles from './Checkout.module.css';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', city: '', province: '', postalCode: '', notes: '' });

  const shipping = 10.00;
  const total = cartTotal + shipping;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const validate = () => {
    let tempErrors = {};
    if (!form.name.trim()) tempErrors.name = "Required";
    if (!form.phone.trim()) tempErrors.phone = "Required";
    if (!form.address.trim()) tempErrors.address = "Required";
    if (!form.city.trim()) tempErrors.city = "Required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    try {
      const orderData = { customer: form, items: cartItems, subtotal: cartTotal, shipping, total };
      const result = await submitOrder(orderData);
      clearCart();
      navigate('/order-confirmation', { state: { order: { ...orderData, orderNumber: result.orderNumber } } });
    } catch (err) { alert("Error placing order."); }
    finally { setIsLoading(false); }
  };

  if (cartItems.length === 0) return navigate('/cart');

  return (
    <div className="container section">
      <h1 style={{marginBottom: 'var(--spacing-2xl)'}}>Checkout</h1>
      <form onSubmit={handleSubmit} className={styles.grid}>
        <div className={styles.form}>
          <h2>Contact Information</h2>
          <div className={`form-group ${errors.name ? 'error' : ''}`}>
            <label>Full Name *</label>
            <input name="name" value={form.name} onChange={handleChange} />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          <div className={`form-group ${errors.phone ? 'error' : ''}`}>
            <label>Phone Number *</label>
            <input name="phone" value={form.phone} onChange={handleChange} />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label>Email (Optional)</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} />
          </div>
          
          <h2 style={{marginTop: 'var(--spacing-xl)'}}>Delivery Address</h2>
          <div className={`form-group ${errors.address ? 'error' : ''}`}>
            <label>Street Address *</label>
            <input name="address" value={form.address} onChange={handleChange} />
            {errors.address && <span className="error-text">{errors.address}</span>}
          </div>
          <div className={styles.row2}>
            <div className={`form-group ${errors.city ? 'error' : ''}`}>
              <label>City *</label>
              <input name="city" value={form.city} onChange={handleChange} />
              {errors.city && <span className="error-text">{errors.city}</span>}
            </div>
            <div className="form-group">
              <label>Province/State</label>
              <input name="province" value={form.province} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input name="postalCode" value={form.postalCode} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Order Notes</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} rows={3}></textarea>
          </div>
        </div>

        <div className={styles.summary}>
          <h2>Summary</h2>
          {cartItems.map(item => (
            <div key={item.id} className={styles.item}>
              <span>{item.name} × {item.quantity}</span>
              <span>{formatCurrency(item.price * item.quantity)}</span>
            </div>
          ))}
          <div className={styles.divider} />
          <div className={styles.row}><span>Subtotal</span><span>{formatCurrency(cartTotal)}</span></div>
          <div className={styles.row}><span>Shipping</span><span>{formatCurrency(shipping)}</span></div>
          <div className={`${styles.row} ${styles.total}`}><span>Total</span><span>{formatCurrency(total)}</span></div>
          
          <div className={styles.cod}>
            <span>💳</span> <span><strong>Cash on Delivery</strong><br/><small style={{color:'var(--color-text-muted)'}}>Pay when your item arrives</small></span>
          </div>

          <Button type="submit" fullWidth disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Place Order'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;