import styles from '../../shared.module.css';
import Image from 'next/image';

export const metadata = {
  title: 'Smart Rooms',
  description: 'Contemporary comfort for short business stays and solo travellers.',
};
import Link from 'next/link';
import { Wifi, Wind, BedDouble, Briefcase, Sparkles, Users, ArrowLeft } from 'lucide-react';

export default function SmartRooms() {
  return (
    <main className="container">
      <Link href="/accommodation" className={styles.breadcrumb}>
        <ArrowLeft size={16} /> Back to Accommodation
      </Link>

      <section className={styles.luxuryHeroLayout}>
        <div className={styles.luxuryHeroImage}>
          <Image 
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2000&auto=format&fit=crop" 
            alt="Smart Room" 
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div className={styles.luxuryHeroContent}>
          <h1 className={styles.luxuryRoomTitle}>Smart Rooms</h1>
          
          <div className={styles.luxurySpecs}>
            <div className={styles.luxurySpecItem}>
              <span className={styles.luxurySpecLabel}>Occupancy</span>
              <span className={styles.luxurySpecValue}><Users size={18} color="var(--primary-violet)" /> 2 Adults</span>
            </div>
            <div className={styles.luxurySpecItem}>
              <span className={styles.luxurySpecLabel}>Bed</span>
              <span className={styles.luxurySpecValue}><BedDouble size={18} color="var(--primary-violet)" /> King Size</span>
            </div>
          </div>
          
          <p className={styles.luxuryDescription}>
            Perfectly designed for solo travellers and short business visits, our Smart Rooms offer a contemporary balance of comfort and efficiency. While these rooms are streamlined without a sofa space, they are beautifully appointed with everything you need for a restful and productive stay.
          </p>
          
          <div className={styles.luxuryActions}>
            <Link href="#" className="btn-primary">Book Now</Link>
            <Link href="/contact#enquiry" className="btn-outline">Enquire</Link>
          </div>
        </div>
      </section>

      <section className={styles.luxuryDetailsLayout}>
        <div>
          <h2 className={styles.luxurySectionTitle}>Overview</h2>
          <p style={{ color: '#555', lineHeight: '1.8' }}>
            Experience an environment where every detail serves a purpose. The Smart Room maximizes functionality through intelligent design, providing a seamless experience from the moment you arrive. The room features a plush king-size bed, a dedicated work area for business needs, and complimentary high-speed Wi-Fi, ensuring you remain connected and comfortable throughout your visit.
          </p>
        </div>
        
        <div>
          <h2 className={styles.luxurySectionTitle}>Key Amenities</h2>
          <ul className={styles.luxuryAmenitiesGrid}>
            <li className={styles.luxuryAmenityItem}>
              <Wifi size={20} color="var(--primary-violet)" /> Complimentary Wi-Fi
            </li>
            <li className={styles.luxuryAmenityItem}>
              <Wind size={20} color="var(--primary-violet)" /> Air Conditioning
            </li>
            <li className={styles.luxuryAmenityItem}>
              <Briefcase size={20} color="var(--primary-violet)" /> Work Desk
            </li>
            <li className={styles.luxuryAmenityItem}>
              <Sparkles size={20} color="var(--primary-violet)" /> Daily Housekeeping
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
