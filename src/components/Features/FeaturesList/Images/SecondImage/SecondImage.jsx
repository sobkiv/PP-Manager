import React from 'react';
import firstPart from '../../../../../assets/images/image-1/clients-database-2.png';
import secondPart from '../../../../../assets/images/image-1/employees-2.png';
import './FirstImage.css';

const FirstImage = () => {
  return (
    <div className="first-image-container">
      <div className='background-part'></div>
      <img className="first-part" src={firstPart} alt="asd" />
      <img className="second-part" src={secondPart} alt="asd" />
    </div>
  );
};

export default FirstImage;
