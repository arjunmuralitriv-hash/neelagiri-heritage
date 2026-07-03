import styles from '../../shared.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Wind, BedDouble, Briefcase, Sparkles, Users, Sofa } from 'lucide-react';

export default function BusinessSuites() {
  return (
    <main>
      <header className={styles.pageHeader} style={{backgroundImage: "url('/images/business-suite.jpg')"}}>
        <div className={styles.pageOverlay}></div>
        <div className={styles.pageHeaderContent}>
          <h1 className={`${styles.pageTitle} fade-in delay-1`}>Business Suites</h1>
        </div>
      </header>

      <section className="container">
        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>Spacious & Productive</h2>
          <p className={styles.blockText}>
            Created for professionals requiring additional space, privacy, and productivity during extended stays. Our Business Suites feature a comfortable, built-in sofa space directly within the bedroom, offering the perfect spot to unwind after a long day of meetings.
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
              <span style={{ fontWeight: '500' }}>In-Room Sofa Space</span>
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
                <Briefcase size={22} color="var(--primary-violet)" />
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
