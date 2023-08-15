import React from 'react';
import firstPart from '../../../../../assets/images/image-4/accounting-internal-travel-expenses-recording-5.png';
import secondPart from '../../../../../assets/images/image-4/accounting-monthly-overview-of-time-5.png';
import thirdPart from '../../../../../assets/images/image-4/accounting-across-project-5.png';
import './FourthImage.css';

const FourthImage = () => {
  return (
    <div className="first-image-container">
      <div className='background-part'></div>
      <img className="first-part" src={firstPart} alt="asd" />
      <img className="second-part" src={secondPart} alt="asd" />
      <img className="third-part" src={thirdPart} alt="asd" />
    </div>
  );
};

export default FourthImage;
