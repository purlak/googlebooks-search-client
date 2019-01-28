import React from 'react';
import Search from './Components/SearchBooks';
import Books from './Components/DisplayBooks';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

it('renders Search Component without crashing', () => {
  shallow(<SearchBooks />);
});
