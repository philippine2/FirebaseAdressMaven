import React from 'react';
import ReactDOM from 'react-dom';
import Go from './Go';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import Typography from '@material-ui/core/Typography';
configure({ adapter: new Adapter() });

describe('jest test', function() {
    const elfDebugEnzyme = new ElfDebugEnzyme(true, 'Go.test.js', false);

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Go />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders button click message', () => {
        const jestFunc = jest.fn();
        const wrapper = shallow(<Go />).dive();
        wrapper.instance().elfQuery = jestFunc;
        wrapper.find('#elfQueryAction').simulate('click');
        expect(jestFunc).toHaveBeenCalledTimes(1);
    });

    it('should call setData with valid JSON causing component refresh', () => {
        const result = <p>Hello foo test code</p>;
        const wrapper = shallow(<Go />).dive();

        wrapper.instance().setFooData({ result: 'foo test code' });

        expect(wrapper.contains(result)).toEqual(true);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<Go />).dive();
        const welcome = <Typography>React and Jest</Typography>;
        elfDebugEnzyme.getFirst(wrapper, welcome.type, true);
        // expect(wrapper.contains(welcome)).toEqual(true);
    });
});
