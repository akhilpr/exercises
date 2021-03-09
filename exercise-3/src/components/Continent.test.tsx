import React from 'react'
import { shallow } from 'enzyme'
import Continent from './Continent'

describe('Continent', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Continent />);

        expect(wrapper).toBeTruthy();
    })
})