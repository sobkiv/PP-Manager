import React from 'react';
import firstPart from '../../../../../assets/images/image-2/suppliers-database-2.png';
import secondPart from '../../../../../assets/images/image-2/materials-database-2.png';
import './SecondImage.css';

const SecondImage = () => {
  return (
    <div className="first-image-container">
      <div className="background-part"></div>
      <img className="first-part" src={firstPart} alt="asd" />
      <img className="second-part" src={secondPart} alt="asd" />
    </div>
  );
};

export default SecondImage;
