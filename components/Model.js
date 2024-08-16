import React from 'react';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="">
      
       
        {children}
    
    </div>
  );
};

export default Modal;
