
import React from 'react';

const Modal = ({ images, index, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(index);

  const changeSlide = (step) => {
    setCurrentIndex((prev) => (prev + step + images.length) % images.length);
  };

  return (
    <div className="modal" onClick={onClose} style={{ display: 'flex' }}>
      <span className="close" onClick={onClose}>&times;</span>
      <span className="prev" onClick={(e) => { e.stopPropagation(); changeSlide(-1); }}>❮</span>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex]} alt="Modal View" />
      </div>
      <span className="next" onClick={(e) => { e.stopPropagation(); changeSlide(1); }}>❯</span>
    </div>
  );
};

export default Modal;