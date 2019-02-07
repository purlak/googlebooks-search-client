import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../SearchBar';

describe ("SearchBar component", () => {
    test ("renders", () => {
        const wrapper = shallow(<SearchBar />);
        expect(wrapper.exists()).toBe(true);
    });

    test ("search text is echoed", () => {
      const wrapper = shallow (<SearchBar searchBook={() => {}} />);
      wrapper.find("input").simulate("change", {
        target: { value: "hello"  }
      });
      expect(wrapper.find("input").props().value).toEqual("hello");
    });

    test('pass value to the onChange handler', () => {
    const searchTerm = 'hello';
    const onChange = jest.fn();
    const wrapper = shallow(
        <SearchBar onChange={searchBook} />
    );

    expect(wrapper).toMatchSnapshot();
        wrapper.find('button').simulate('click', {
        target: { searchBook },
    });

    expect(onChange).toBeCalledWith(searchBook);
  });
})
