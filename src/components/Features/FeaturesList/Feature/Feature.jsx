import React from 'react';
import './Feature.css';

const Feature = ({ name, paragraph, image: ImageComponent }) => {
  return (
    <div className="feature-wrapper">
      <ImageComponent />
      <div className="text-wrapper">
        <h3 className='feature-title'>{name}</h3>
        <p className='feature-text'>{paragraph}</p>
      </div>
    </div>
  );
};

export default Feature;
