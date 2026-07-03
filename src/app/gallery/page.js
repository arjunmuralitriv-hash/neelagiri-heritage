import styles from '../shared.module.css';
import Image from 'next/image';

export default function Gallery() {
  return (
    <main>
      <header className={styles.pageHeader} style={{backgroundImage: "url('https://images.unsplash.com/photo-1542314831-c6a4d14d8c1d?q=80&w=2000&auto=format&fit=crop')"}}>
        <div className={styles.pageOverlay}></div>
        <div className={styles.pageHeaderContent}>
          <h1 className={`${styles.pageTitle} fade-in delay-1`}>Moments Worth Remembering</h1>
          <p className={`${styles.pageSubtitle} fade-in delay-2`}>Discover the elegance, comfort, and experiences that define Hotel Neelagiri Heritage.</p>
        </div>
      </header>

      <section className="container">
        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>Gallery Categories</h2>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            <button className="btn-outline">Hotel</button>
            <button className="btn-outline">Rooms</button>
            <button className="btn-outline">Wellness</button>
            <button className="btn-outline">Boardroom</button>
            <button className="btn-outline">City Experiences</button>
          </div>
        </div>

        {/* Placeholder Photo Grid */}
        <div className={styles.grid} style={{ marginBottom: '80px' }}>
          <Image src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600&auto=format&fit=crop" alt="Gallery Image" width={600} height={400} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px' }} />
          <Image src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600&auto=format&fit=crop" alt="Gallery Image" width={600} height={400} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px' }} />
          <Image src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=600&auto=format&fit=crop" alt="Gallery Image" width={600} height={400} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px' }} />
          <Image src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop" alt="Gallery Image" width={600} height={400} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px' }} />
          <Image src="https://images.unsplash.com/photo-1593693397690-362cb9666c40?q=80&w=600&auto=format&fit=crop" alt="Gallery Image" width={600} height={400} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px' }} />
          <Image src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop" alt="Gallery Image" width={600} height={400} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px' }} />
        </div>
      </section>
    </main>
  );
}
