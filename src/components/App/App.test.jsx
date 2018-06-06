import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('should load the component', () => {
    const AppElem = shallow(<App />);
    expect(AppElem.exists()).toBe(true);
  });

  it('should load the props', () => {
    const props = { title: 'test title' };
    const AppElem = mount(<App {...props} />);
    expect(AppElem.prop('title')).toEqual(props.title);
  });
});

