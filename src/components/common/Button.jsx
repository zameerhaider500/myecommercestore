import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', onClick, type = 'button', disabled, className = '', fullWidth }) => {
  return (
    <button 
      type={type} 
      className={`${styles.btn} ${styles[variant]} ${fullWidth ? styles.full : ''} ${className}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;