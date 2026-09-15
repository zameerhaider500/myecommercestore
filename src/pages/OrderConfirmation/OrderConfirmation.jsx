import { useLocation, Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import { sendToWhatsApp } from '../../utils/whatsappService';
import Button from '../../components/common/Button';
import styles from './OrderConfirmation.module.css';

const OrderConfirmation = () => {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) return <div className="container section text-center"><h2>No Order Found</h2><Link to="/"><Button style={{marginTop:'1rem'}}>Go Home</Button></Link></div>;

  const waLink = sendToWhatsApp(order);

  return (
    <div className="container section text-center" style={{maxWidth: '600px', margin: '0 auto'}}>
      <div className={styles.icon}>✓</div>
      <h1>Order Confirmed!</h1>
      <p style={{color:'var(--color-text-secondary)', margin:'1rem 0'}}>Thank you, {order.customer.name}. Your order has been placed successfully.</p>
      
      <div className={styles.card}>
        <h3>Order #{order.orderNumber}</h3>
        <div className={styles.divider}></div>
        {order.items.map(i => (
          <div key={i.id} className={styles.row}>
            <span>{i.name} (x{i.quantity})</span>
            <span>{formatCurrency(i.price * i.quantity)}</span>
          </div>
        ))}
        <div className={styles.divider}></div>
        <div className={styles.row}><span>Shipping</span><span>{formatCurrency(order.shipping)}</span></div>
        <div className={`${styles.row} ${styles.total}`}><span>Total (COD)</span><span>{formatCurrency(order.total)}</span></div>
        <div className={styles.address}>
          Delivering to: {order.customer.address}, {order.customer.city}, {order.customer.province}
        </div>
      </div>

      <a href={waLink} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
        Send Order to WhatsApp
      </a>
      <br/>
      <Link to="/"><Button variant="secondary" style={{marginTop: '1rem'}}>Continue Shopping</Button></Link>
    </div>
  );
};

export default OrderConfirmation;