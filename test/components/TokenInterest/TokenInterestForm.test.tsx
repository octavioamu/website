import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import { Form, Input } from 'antd';

import TokenInterestForm from '@components/TokenInterest/TokenInterestForm';
const { TextArea } = Input;


describe('<TokenInterestForm />', () => {
    let component: typeof TokenInterestForm;

    beforeEach(() => {
      component = mount(
        <MemoryRouter><TokenInterestForm/></MemoryRouter>
      );
    });

    it('renders without crashing', () => {
      expect(component.find('TokenInterestForm').length).toEqual(
        1
      );
    });

    describe('token interest form', () => {
      it('renders a Form with the correct action url', () => {
        expect(component.find(Form).length).toBe(1);
        expect(
          component
            .find(Form)
            .at(0)
            .props().action
        ).toEqual(`https://marketprotocol.us17.list-manage.com/subscribe/post?
                      u=ef1f265a21b4aae9002084ee3&amp;id=9b6a6fd0ec`);
      });

      it('renders 4 Input types', () => {
        expect(component.find(Form).find(Input).length).toBe(4);
        expect(
          component
            .find(Form)
            .find(Input)
            .at(0)
            .props().type
        ).toEqual('text');
      });

      it('renders 1 Text area', () => {
        expect(component.find(Form).find(TextArea).length).toBe(1);
      });
  });
