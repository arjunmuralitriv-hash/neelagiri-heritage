import styles from '../shared.module.css';

export default function Heritage() {
  return (
    <main>
      <header className={styles.pageHeader} style={{backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000&auto=format&fit=crop')"}}>
        <div className={styles.pageOverlay}></div>
        <div className={styles.pageHeaderContent}>
          <h1 className={`${styles.pageTitle} fade-in delay-1`}>Our Heritage</h1>
          <p className={`${styles.pageSubtitle} fade-in delay-2`}>A story of timeless hospitality.</p>
        </div>
      </header>

      <section className="container">
        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>Introduction</h2>
          <p className={styles.blockText}>
            The story of Hotel Neelagiri Heritage is one of tradition, hospitality, and a commitment to welcoming every guest with genuine warmth. 
          </p>
          <p className={styles.blockText} style={{ fontStyle: 'italic', color: '#888' }}>
            (Legacy story to be added.)
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>Our Philosophy</h2>
          <p className={styles.blockText}>
            We believe true hospitality lies in thoughtful service, refined comfort, and meaningful experiences. Every stay is shaped by attention to detail, personalised care, and an unwavering commitment to guest satisfaction.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>Our Promise</h2>
          <ul className={styles.listGroup}>
            <li>Warm Hospitality</li>
            <li>Comfortable Stays</li>
            <li>Honest Service</li>
            <li>Contemporary Convenience</li>
            <li>Timeless Values</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
