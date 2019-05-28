import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../utils/testUtils';
import Header from './Header';

describe('Header Component', () => {
    it('should render without errors', () => {
        const component = shallow(<Header />);
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1)
    });

    it('should render the brand', () => {
        const component = shallow(<Header />);
        const brand = component.find('.navbar-brand');
        expect(brand.length).toBe(1);
    });
})