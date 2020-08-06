import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Probando el componente <GifGridItem />', () => {
	const title = 'UN TITULO'
	const url = 'http://localhost/algo.jpg'
	const wrapper = shallow(<GifGridItem title={title} url={url} />)

	test('debe mostrar el componente correctamente', () => {
		expect(wrapper).toMatchSnapshot()
	})

	test('debe tener el parrafo con el "title"', () => {
		const p = wrapper.find('p')

		expect(p.text()).toBe(title)
	})

	test('debe tener una img con url y alt ', () => {
		const img = wrapper.find('img')

		expect(img.prop('src')).toBe(url)
		expect(img.prop('alt')).toBe(title)
	})

	test('debe contener la clase animate__fadeInDown', () => {
		const className = wrapper.find('div').prop('className')

		expect(className.includes('animate__fadeInDown')).toBe(true)
	})
})
