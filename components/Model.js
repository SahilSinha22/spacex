import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg p-4">
      <button onClick={onClose} className="close-button">X</button>
      {children}
    </div>
  </div>
  );
};

export default Modal;
