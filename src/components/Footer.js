import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo-footer">
            <Image 
              src="/logo.webp" 
              alt="Hotel Neelagiri Heritage Logo" 
              width={250} 
              height={125} 
              style={{ objectFit: 'contain', width: '250px', height: 'auto' }}
            />
          </div>
          <p className="footer-desc">
            <strong>A Smart Business Hotel</strong><br/>
            Where Heritage Meets Contemporary Comfort.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link href="/">Home</Link>
          <Link href="/heritage">Our Heritage</Link>
          <Link href="/accommodation">Accommodation</Link>
          <Link href="/wellness">Wellness</Link>
          <Link href="/kozhikode">Discover Kozhikode</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Opposite Kozhikode Railway Station</p>
          <p>Annie Hall Road, Palayam</p>
          <p>Kozhikode – 673002</p>
          <p>+91 8075 838 228</p>
          <p>reservations@neelagiriheritage.com</p>
          <div className="social-links">
            <a href="https://www.instagram.com/neelagiriheritage/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-map">
          <h4>Find Us</h4>
          <iframe 
            src="https://maps.google.com/maps?q=Hotel+Neelagiri+Heritage,+Kozhikode&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="180" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; Hotel Neelagiri Heritage. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
