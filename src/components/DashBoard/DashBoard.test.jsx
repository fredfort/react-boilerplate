import React from 'react';
import { shallow } from 'enzyme';
import DashBoard from './DashBoard';

describe('<DashBoard />', () => {
  it('should load the component', () => {
    const DashBoardElem = shallow(<DashBoard />);
    expect(DashBoardElem.type()).toBe('div');
  });
});
