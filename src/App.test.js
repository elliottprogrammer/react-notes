import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './utils/testUtils';
import App from './App';

describe('App Component', () => {
    it('should render without errors', () => {
        const component = shallow(<App />);
        const wrapper = findByTestAttr(component, 'appComponent');
        expect(wrapper.length).toBe(1)
    });
})
