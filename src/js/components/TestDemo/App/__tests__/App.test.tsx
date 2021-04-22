import React from 'react'
import Enzyme, { shallow, ShallowWrapper } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from '../App'

Enzyme.configure({
  adapter: new Adapter()
})

describe('Test App Entry point', function () {
  it('should have a header tag with Hello world React!', function () {
    const wrapper = shallow<ShallowWrapper>(<App />);
    expect(wrapper.find("h1").text()).toEqual("Hello world React!");
  });
});
