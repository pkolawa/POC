import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

test('should render app',()=>{
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
});
