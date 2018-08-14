import React from 'react';
import { withSiteData } from 'react-static';
import PresaleHeader from '../components/Presale/PresaleHeader';
import PresaleForm from '../components/Presale/PresaleForm';
import withGAPageView from './GoogleAnalyticsTracker';

export const PresaleComponent = () => (
  <div>
    <PresaleHeader />
    <PresaleForm />
  </div>
);

export default withGAPageView(withSiteData(PresaleComponent));
