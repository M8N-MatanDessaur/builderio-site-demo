import styles from './Form.module.css';

export default function FormSkeleton() {
  return (
    <div className={styles.formSkeleton}>
      {/* Header section */}
      <div className={styles.header}>
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonDescription} />
      </div>
      
      {/* Form fields */}
      <div className={styles.form}>
        <div className={styles.skeletonFields}>
          {/* Text input field */}
          <div className={styles.fieldWrapper}>
            <div className={styles.skeletonLabel} />
            <div className={styles.skeletonInput} />
          </div>
          
          {/* Email field */}
          <div className={styles.fieldWrapper}>
            <div className={styles.skeletonLabel} />
            <div className={styles.skeletonInput} />
          </div>
          
          {/* Textarea field */}
          <div className={styles.fieldWrapper}>
            <div className={styles.skeletonLabel} />
            <div className={`${styles.skeletonInput} ${styles.textarea}`} style={{ height: '100px' }} />
          </div>
        </div>
        
        {/* Submit button */}
        <div className={styles.skeletonButton} />
      </div>
    </div>
  );
}
