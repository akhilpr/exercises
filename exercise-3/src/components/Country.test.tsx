import React from 'react'
import { shallow } from 'enzyme'
import Country from './Country'

describe('Country', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Country />);

        expect(wrapper).toBeTruthy();
    })
})