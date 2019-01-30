import React from 'react';
import { shallow } from 'enzyme';
import Search from '../SearchBooks';

describe ("Search component", () => {
    test ("renders", () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.exists()).toBe(true);
    });

    test ("search text is echoed", () => {
      const wrapper = shallow (<Search searchBook={() => {}} />);
      wrapper.find("input").simulate("change", {
        target: { value: "hello"  }
      });
      expect(wrapper.find("input").props().value).toEqual("hello");
    });
});
