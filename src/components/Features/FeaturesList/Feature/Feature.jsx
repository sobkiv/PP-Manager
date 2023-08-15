import React from 'react';
import './Feature.css';
import FirstImage from '../Images/FirstImage/FirstImage';
import SecondImage from '../Images/SecondImage/SecondImage';
import ThirdImage from '../Images/ThirdImage/ThirdImage';
import FourthImage from '../Images/FourthImage/FourthImage';

const Feature = ({ name, index, paragraph }) => {
  return (
    <div className={ (index % 2 === 1) ? 'feature-wrapper reverse' : 'feature-wrapper'}>
      { index === 0 ? <FirstImage /> : null }
      { index === 1 ? <SecondImage /> : null }
      { index === 2 ? <ThirdImage /> : null }
      { index === 3 ? <FourthImage /> : null }
      <div className="text-wrapper">
        <h3 className='feature-title'>{name}</h3>
        <p className='feature-text'>{paragraph}</p>
      </div>
    </div>
  );
};

export default Feature;
