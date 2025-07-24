import React, { useState } from 'react';
import Modal from './Modal';

const images = [
  'image/gallery1.png',
  'image/gallery2.png',
  'image/gallery3.png',
  'image/gallery4.png',
  'image/gallery5.png',
  
];

const Gallery = () => {
  const [modalIndex, setModalIndex] = useState(null);

  return (
    <div className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.slice(0, 5).map((img, i) => (
          <img key={i} src={img} alt={`Gallery ${i + 1}`} onClick={() => setModalIndex(i)} />
        ))}
      </div>
      {modalIndex !== null && (
        <Modal images={images} index={modalIndex} onClose={() => setModalIndex(null)} />
      )}
    </div>
  );
};

export default Gallery;
