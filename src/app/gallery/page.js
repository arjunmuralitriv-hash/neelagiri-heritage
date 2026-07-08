'use client';

import { useState } from 'react';
import styles from '../shared.module.css';
import Image from 'next/image';

const allImages = [
  // Hotel
  { src: '/images/gallery/hotel/hero.jpg', alt: 'Hotel Neelagiri Heritage Exterior', category: 'Hotel' },
  { src: '/images/gallery/hotel/heroenquire.jpg', alt: 'Hotel Interior', category: 'Hotel' },
  
  // Rooms
  { src: '/images/gallery/rooms/business-suite.jpg', alt: 'Business Suite', category: 'Rooms' },
  { src: '/images/gallery/rooms/premium-suite.jfif', alt: 'Premium Suite', category: 'Rooms' },
  
  // City Experiences
  { src: '/images/gallery/city-experiences/beypore.jpg', alt: 'Beypore', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/churam.jpg', alt: 'Churam', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/clt.jpg', alt: 'Calicut City', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/kappad.jpg', alt: 'Kappad Beach', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/kozhikode-beach.jpg', alt: 'Kozhikode Beach', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/mananchira.jpg', alt: 'Mananchira Square', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/mishkal.jpg', alt: 'Mishkal Mosque', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/sarovaram.jpg', alt: 'Sarovaram Biopark', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/sm-street.jpg', alt: 'SM Street', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/tali.jpg', alt: 'Tali Temple', category: 'City Experiences' },
];

const categories = ['All', 'Hotel', 'Rooms', 'Wellness', 'Boardroom', 'City Experiences'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  return (
    <main>
      <header className={styles.pageHeader}>
        <Image src="https://images.unsplash.com/photo-1542314831-c6a4d14d8c1d?q=80&w=2000&auto=format&fit=crop" alt="Gallery" fill style={{ objectFit: 'cover' }} priority />
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
            {categories.map((category) => (
              <button 
                key={category}
                className={activeCategory === category ? 'btn-primary' : 'btn-outline'}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid} style={{ marginBottom: '80px' }}>
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <div key={index} style={{ position: 'relative', width: '100%', height: '300px', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px', color: '#777', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
              <p style={{ fontSize: '1.2rem' }}>More photos coming soon to this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
