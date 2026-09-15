import { useInView } from '../../hooks/useInView';
import styles from './SplitFeature.module.css';

const SplitFeature = ({ image, heading, subtext, reverse = false }) => {
  // Attach our animation hook to the image wrapper
  const [imgRef, isInView] = useInView();

  return (
    <section className={`${styles.section} container`}>
      <div className={`${styles.grid} ${reverse ? styles.reverse : ''}`}>
        
        {/* LEFT SIDE (Image) */}
        <div 
          ref={imgRef} 
          className={`${styles.imageWrapper} ${isInView ? styles.visible : ''}`}
        >
          <img src={image} alt={heading} />
        </div>

        {/* RIGHT SIDE (Text) */}
        <div className={styles.textWrapper}>
          <h2>{heading}</h2>
          <p>{subtext}</p>
        </div>

      </div>
    </section>
  );
};

export default SplitFeature;