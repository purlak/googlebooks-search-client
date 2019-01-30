import React from 'react';
import {  shallow } from 'enzyme';
import Search from '../SearchBooks';
import Adapter from 'enzyme-adapter-react-15';


describe ('Search', () => {
  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<Search />)
  })

  it ('renders the search bar', () => {
    console.log(wrapper)
  })

})
