import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './Inventory';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Inventory tests', () => {

    it('Inventory renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Inventory />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Inwentarz renders', () => {
        const wrapper = shallow(<Inventory/>);
        // console.log(wrapper.debug());
        expect(wrapper.find('div').text()).toBe('Inwentarz');
    })

})

