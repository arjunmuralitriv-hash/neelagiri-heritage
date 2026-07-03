import styles from '../shared.module.css';

export default function Wellness() {
  return (
    <main>
      <header className={styles.pageHeader} style={{backgroundImage: "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop')"}}>
        <div className={styles.pageOverlay}></div>
        <div className={styles.pageHeaderContent}>
          <h1 className={`${styles.pageTitle} fade-in delay-1`}>Wellness Inspired by Tradition</h1>
          <p className={`${styles.pageSubtitle} fade-in delay-2`}>Reconnect with yourself through authentic Ayurvedic therapies rooted in Kerala's centuries-old healing practices.</p>
        </div>
      </header>

      <section className="container">
        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>About AVVVS</h2>
          <p className={styles.blockText}>
            Located within Hotel Neelagiri Heritage, AVVVS Wellness offers holistic treatments designed to restore balance, reduce stress, and promote overall well-being. Guests can combine comfortable accommodation with personalised wellness experiences for a truly rejuvenating stay.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>Wellness Experiences</h2>
          <ul className={styles.listGroup}>
            <li>Rejuvenation Therapies</li>
            <li>Relaxation Treatments</li>
            <li>Preventive Wellness</li>
            <li>Personalised Consultation</li>
            <li>Wellness Packages</li>
          </ul>
        </div>

        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>Why Choose Ayurveda</h2>
          <p className={styles.blockText}>
            Experience the benefits of time-honoured healing traditions that nurture both body and mind through natural, holistic care.
          </p>
        </div>
      </section>
    </main>
  );
}
