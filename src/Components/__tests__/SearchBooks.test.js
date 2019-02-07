import React from 'react';
import { shallow } from 'enzyme';
import Search from '../SearchBooks';

describe ("Search component", () => {
    test ("renders", () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders SearchBar component', () => {
      const wrapper = shallow(<Search />);
      expect(wrapper.find(SearchBar)).to.have.lengthOf(1);
    });
});
