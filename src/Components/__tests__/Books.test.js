import React from 'react';
import { shallow } from 'enzyme';
import Books from '../Books';

describe ("Books component", () => {
    test ("renders", () => {
        const wrapper = shallow(<Books />);
        expect(wrapper.exists()).toBe(true);
    });
});
