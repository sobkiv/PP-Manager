import React from 'react';
import firstPart from '../../../../../assets/images/image-3/projects-timeline-empty-2.png';
import secondPart from '../../../../../assets/images/image-3/statistics-2.png';
import './ThirdImage.css';

const ThirdImage = () => {
  return (
    <div className="first-image-container">
      <div className="background-part"></div>
      <img className="first-part" src={firstPart} alt="asd" />
      <img className="second-part" src={secondPart} alt="asd" />
    </div>
  );
};

export default ThirdImage;
