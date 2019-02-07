import React from 'react';
import { shallow } from 'enzyme';
import Display from '../Display';

describe ("Display component", () => {
    test ("renders", () => {
        const wrapper = shallow(<Display />);
        expect(wrapper.exists()).toBe(true);
    });
});
