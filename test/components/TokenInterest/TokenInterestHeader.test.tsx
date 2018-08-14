import React from 'react';
import { shallow } from 'enzyme';
import { Col, Row } from 'antd';
import { HeroText } from '@src/Styles';
import TokenInterestHeader from '@components/TokenInterest/TokenInterestHeader';

describe('<TokenInterestHeader />', () => {
    it('renders one Row component', () => {
        const component = shallow(<TokenInterestHeader />);
        const rowComponent = component.find(Row);
        const rowComponentProps = rowComponent.props();
        expect(rowComponent).to.have.length(1);
        expect(rowComponentProps.type).to.equal('flex');
        expect(rowComponentProps.className).to.equal('hero');
        expect(rowComponentProps.align).to.equal('middle');
    });

    it('renders two Col components', () => {
        const component = shallow(<TokenInterestHeader />);
        const colComponents = component.find(Col);
        const firstColComponentProps = colComponents.at(0).props();
        const secondColComponentProps = colComponents.at(1).props();
        expect(colComponents).to.have.length(2);
        expect(firstColComponentProps.xs).to.equal(24);
        expect(secondColComponentProps.md).to.equal(10);
    });

    it('renders TokenInterestHeader with title text', () => {
        const component = shallow(<TokenInterestHeader />);
        expect(
        component
            .find(HeroText)
            .render()
            .text()
        ).to.equal('Token Interest');
    });
});
