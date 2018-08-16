import React from 'react';
import { withSiteData } from 'react-static';

import TokenInterestHeader from '../components/TokenInterest/TokenInterestHeader';
import TokenInterestForm from '../components/TokenInterest/TokenInterestForm';

export const TokenInterestComponent = () => (
  <div>
    <TokenInterestHeader />
    <TokenInterestForm />
  </div>
);

export default withSiteData(TokenInterestComponent);
