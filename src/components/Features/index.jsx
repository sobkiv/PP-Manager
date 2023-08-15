import React from 'react';
import './index.css';
import FeaturesTitle from './FeaturesTitle/FeaturesTitle';
import FeaturesList from './FeaturesList/FeaturesList';

export default function Features() {
  return (
    <section className="features-wrapper">
			<FeaturesTitle />
      <FeaturesList />
    </section>
  )
}
