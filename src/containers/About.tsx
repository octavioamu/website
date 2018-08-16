import React from 'react';
import { withSiteData } from 'react-static';
import Hero from '@components/About/Hero';
import Derivatives from '@components/About/Derivatives';
import Trading from '@components/About/Trading';
import Timeline from '@components/About/Timeline';
import Opensource from '@components/About/Opensource';
import Cta from '@components/Cta';

export const AboutComponent = () => (
  <div>
    <Hero />
    <Derivatives />
    <Trading />
    <Timeline />
    <Opensource />
    <Cta bg="#fff" />
  </div>
);

export default withSiteData(AboutComponent);
