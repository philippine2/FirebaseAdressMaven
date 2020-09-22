import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import { createShallow } from '@material-ui/core/test-utils';

configure({ adapter: new Adapter() });
import First from './First';

import { Grid } from '@material-ui/core';
import elvenCode from 'elven-code';

const debug =
    process.env.REACT_APP_ELF_LOGGER === 'sanity-address-show'
        ? console.log
        : () => {};

describe('Sanity About Layout Tests', () => {
    let wrapper = null;
    shallow;

    beforeEach(() => {
        let shallow = createShallow();
        wrapper = shallow(<First />).dive();
    });
    afterEach(() => {
        wrapper = null;
    });
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<First />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('checks that we use className layout in second item', () => {
        expect(
            wrapper
                .find('div')
                .get(0)
                .props.className.includes('layout')
        ).toBe(true);
    });
    it('checks that the first Grid has a spacing of 24', () => {
        debug(wrapper.find(Grid).get(0).props.spacing);
        expect(wrapper.find(Grid).get(0).props.spacing).toBe(24);
    });

    it('checks that the second Grid has xs=12', () => {
        debug(wrapper.find(Grid).get(1).props.xs);
        expect(wrapper.find(Grid).get(1).props.xs).toBe(12);
    });
    it('checks if source/First exists', () => {
        const fileName = __dirname + '/../source/First.js';
        expect(elvenCode.elfUtils.fileExists(fileName)).toBe(true);
    });
    it('proves we can run a test', () => {
        expect(true).toBe(true);
    });
});
