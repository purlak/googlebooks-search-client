import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../SearchBar';

describe ("SearchBar component", () => {
    test ("renders", () => {
        const wrapper = shallow(<SearchBar />);
        expect(wrapper.exists()).toBe(true);
    });

    test ("search text is echoed", () => {
      const wrapper = shallow (<Search searchBook={() => {}} />);
      wrapper.find("input").simulate("change", {
        target: { value: "hello"  }
      });
      expect(wrapper.find("input").props().value).toEqual("hello");
    });
})
