import styles from '../../shared.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Wind, BedDouble, Briefcase, Sparkles, Users } from 'lucide-react';

export default function SmartRooms() {
  return (
    <main>
      <header className={styles.pageHeader} style={{backgroundImage: "url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2000&auto=format&fit=crop')"}}>
        <div className={styles.pageOverlay}></div>
        <div className={styles.pageHeaderContent}>
          <h1 className={`${styles.pageTitle} fade-in delay-1`}>Smart Rooms</h1>
        </div>
      </header>

      <section className="container">
        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>Efficient & Comfortable</h2>
          <p className={styles.blockText}>
            Our Smart Rooms are designed specifically for solo travellers and short business visits, offering a contemporary balance of comfort and efficiency. While these rooms are streamlined without a sofa space, they are beautifully appointed with everything you need for a restful and productive stay.
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
              <span style={{ fontWeight: '500' }}>Max Occupancy: 2 Adults</span>
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
              <span style={{ fontWeight: '500' }}>Work Desk</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '18px 24px', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '4px' }}>
              <div style={{ padding: '10px', backgroundColor: '#f8f8fa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={22} color="var(--primary-violet)" />
              </div>
              <span style={{ fontWeight: '500' }}>Daily Housekeeping</span>
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
