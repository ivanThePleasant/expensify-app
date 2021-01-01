import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import toJSON from 'enzyme-to-json'
import expenses from '../fixtures/expenses'
import moment from 'moment'
import { SingleDatePicker} from 'react-dates'

test('should render ExpenseFormd correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should set description on input change', () => {
    const value = 'New descripton'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
    const value = 'Changed description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value)
})

test('should set amount if valid input', () => {
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe(value)
})


test('should not set amount if invalid input', () => {
    const value = '23.5012'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submissions', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
})

test('should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find(SingleDatePicker).prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on change', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused })
    expect(wrapper.state('calendarFocused')).toEqual(true)
})