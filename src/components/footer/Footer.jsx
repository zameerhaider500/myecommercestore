import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`container ${styles.grid}`}>
      <div className={styles.brand}>
        <img src={"/img/footer-logo.png"} alt="MyStore Logo" style={{ width: "200px", height: "auto", display: "block", marginBottom: "10px", }} />
        <p>Premium products delivered reliably. Quality you can trust, with the convenience of Cash on Delivery.</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <Link to="/hero">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>
      {/* <div>
        <h4>Support</h4>
        <a href="#faq">FAQ</a>
        <a href="#shipping">Shipping Info</a>
        <a href="#returns">Returns</a>
        <a href="#privacy">Privacy Policy</a>
      </div> */}
      <div>
        <h4>Contact Us</h4>
        <p>zameerhaider.business@gmail.com</p>
        <p>+92 314 4327969</p>
        <p>Lahore, Pakistan</p>
      </div>
    </div>
    <div className={styles.bottom}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;