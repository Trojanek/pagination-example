import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../Pagination';

const onChange = jest.fn();


describe('<Pagination />', () => {
    let pagination;

    beforeEach(() => {
        pagination = shallow((
            <Pagination
                itemsCount={41}
                itemsPerPage={10}
                currentPage={1}
                onChange={onChange}
            />
        )).first().shallow();
    });

    it('should render correctly', () => {
        expect(pagination).toMatchSnapshot();
    });

    it('should render correctly with 0 items', () => {
        pagination.setProps({
            itemsCount: 0,
        });
        expect(pagination).toMatchSnapshot();
    });

    it('should render correctly last page', () => {
        pagination.setProps({
            currentPage: 5,
        });
        expect(pagination).toMatchSnapshot();
    });

    it('should render disabled prev button on first page', () => {
        const received = pagination
            .find('WithStyles(IconButton)[aria-label="Previous Page"]')
            .at(0)
            .prop('disabled');
        expect(received).toBe(true);
    });

    it('should render enabled next button on first page', () => {
        const received = pagination
            .find('WithStyles(IconButton)[aria-label="Next Page"]')
            .at(0)
            .prop('disabled');
        expect(received).toBe(false);
    });

    it('should render enabled prev button on last page', () => {
        pagination.setProps({
            currentPage: 5,
        });
        const received = pagination
            .find('WithStyles(IconButton)[aria-label="Previous Page"]')
            .at(0)
            .prop('disabled');
        expect(received).toBe(false);
    });

    it('should render disabled next button on last page', () => {
        pagination.setProps({
            currentPage: 5,
        });
        const received = pagination
            .find('WithStyles(IconButton)[aria-label="Next Page"]')
            .at(0)
            .prop('disabled');
        expect(received).toBe(true);
    });

    it('should call "onChage" with proper argument on second page', () => {
        const expected = 1;
        const callsCount = onChange.mock.calls.length;
        pagination.setProps({
            currentPage: 2,
        });
        pagination
            .find('WithStyles(IconButton)[aria-label="Previous Page"]')
            .at(0)
            .simulate('click');
        expect(onChange).toHaveBeenCalledTimes(callsCount + 1);
        expect(onChange).toHaveBeenLastCalledWith(expected);
    });

    it('should call "onChage" after click "next" with proper argument 4th page', () => {
        const expected = 5;
        const callsCount = onChange.mock.calls.length;
        pagination.setProps({
            currentPage: 4,
        });
        pagination
            .find('WithStyles(IconButton)[aria-label="Next Page"]')
            .at(0)
            .simulate('click');
        expect(onChange).toHaveBeenCalledTimes(callsCount + 1);
        expect(onChange).toHaveBeenLastCalledWith(expected);
    });

    it('should call "onChage" with proper argument on first page', () => {
        const expected = 2;
        const callsCount = onChange.mock.calls.length;
        pagination
            .find('WithStyles(Button)')
            .at(1)
            .simulate('click');
        expect(onChange).toHaveBeenCalledTimes(callsCount + 1);
        expect(onChange).toHaveBeenLastCalledWith(expected);
    });
});
