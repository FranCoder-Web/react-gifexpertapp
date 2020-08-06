import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Probando el componente <AddCategory />', () => {
	const setCategories = jest.fn()
	let wrapper = shallow(<AddCategory setCategories={setCategories} />)

	beforeEach(() => {
		jest.clearAllMocks()
		wrapper = shallow(<AddCategory setCategories={setCategories} />)
	})

	test('debe mostrarse correctamente', () => {
		expect(wrapper).toMatchSnapshot()
	})

	test('debe cambiar la caja del input', () => {
		const input = wrapper.find('input')
		const value = 'Hola mundo'

		input.simulate('change', { target: { value } })
	})

	test('NO debe postear la informacion con el submit', () => {
		wrapper.find('form').simulate('submit', { preventDefault: () => {} })

		expect(setCategories).not.toHaveBeenCalled()
	})

	test('debe llamar a setCategories y limpiar la caja de texto', () => {
		const input = wrapper.find('input')
		const value = 'Hola mundo'
		input.simulate('change', { target: { value } })

		wrapper.find('form').simulate('submit', { preventDefault: () => {} })
		expect(setCategories).toHaveBeenCalled()
		expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

		expect(input.prop('value')).toBe('')
	})
})
