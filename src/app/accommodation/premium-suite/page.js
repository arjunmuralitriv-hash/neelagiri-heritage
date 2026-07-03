import styles from '../../shared.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Wind, BedDouble, Briefcase, Sparkles, Users, Sofa, Presentation } from 'lucide-react';

export default function PremiumSuite() {
  return (
    <main>
      <header className={styles.pageHeader} style={{backgroundImage: "url('/images/premium-suite.jpg')"}}>
        <div className={styles.pageOverlay}></div>
        <div className={styles.pageHeaderContent}>
          <h1 className={`${styles.pageTitle} fade-in delay-1`}>Premium Suite</h1>
        </div>
      </header>

      <section className="container">
        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>Elevated Luxury</h2>
          <p className={styles.blockText}>
            Our finest accommodation offers generous living spaces and refined interiors for an elevated stay experience. The Premium Suite features a completely separate living room area, providing the ultimate privacy and space to entertain guests or conduct informal meetings in pure comfort.
          </p>
          
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', listStyle: 'none', padding: 0, marginTop: '40px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '18px 24px', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '4px' }}>
              <div style={{ padding: '10px', backgroundColor: '#f8f8fa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BedDouble size={22} color="var(--primary-violet)" />
              </div>
              <span style={{ fontWeight: '500' }}>King Size Bed</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '18px 24px', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '4px' }}>
              <div style={{ padding: '10px', backgroundColor: '#f8f8fa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={22} color="var(--primary-violet)" />
              </div>
              <span style={{ fontWeight: '500' }}>Max Occupancy: 2 Adults + 1 Extra</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '18px 24px', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '4px' }}>
              <div style={{ padding: '10px', backgroundColor: '#f8f8fa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sofa size={22} color="var(--primary-violet)" />
              </div>
              <span style={{ fontWeight: '500' }}>Separate Living Room</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '18px 24px', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '4px' }}>
              <div style={{ padding: '10px', backgroundColor: '#f8f8fa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Wifi size={22} color="var(--primary-violet)" />
              </div>
              <span style={{ fontWeight: '500' }}>Complimentary Wi-Fi</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '18px 24px', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '4px' }}>
              <div style={{ padding: '10px', backgroundColor: '#f8f8fa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Wind size={22} color="var(--primary-violet)" />
              </div>
              <span style={{ fontWeight: '500' }}>Air Conditioning</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '18px 24px', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '4px' }}>
              <div style={{ padding: '10px', backgroundColor: '#f8f8fa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Presentation size={22} color="var(--primary-violet)" />
              </div>
              <span style={{ fontWeight: '500' }}>Executive Work Desk</span>
            </li>
          </ul>

          <div style={{ marginTop: '50px' }}>
            <Link href="/contact#enquiry" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem', display: 'inline-block' }}>Enquire Now</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
