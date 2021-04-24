import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import App from '../App'

describe('Test App Entry point', function () {
  it('should have a header tag with Hello world React!', function () {
    const wrapper = shallow<ShallowWrapper>(<App />);
    expect(wrapper.find("h1").text()).toEqual("Hello world React!");
  });
});
