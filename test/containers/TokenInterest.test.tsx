import React from 'react';
import { mount, shallow } from 'enzyme';

import TokenInterest, { TokenInterestComponent } from '@containers/TokenInterest';
import TokenInterestHeader from '@components/TokenInterest/TokenInterestHeader';
import TokenInterestForm from '@components/TokenInterest/TokenInterestForm';


describe('<TokenInterest />', () => {
    it('renders content', () => {
      const component = mount(<TokenInterest />);
      expect(component.getElement()).not.to.be.null;
    });

    it('renders all site components', () => {
        const component = shallow(<TokenInterestComponent />);
        expect(component.find(TokenInterestHeader)).to.have.length(1);
        expect(component.find(TokenInterestForm)).to.have.length(1);
      });

});
