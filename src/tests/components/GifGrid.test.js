import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Probando el componente <GifGrid />', () => {
	const category = 'Sao'
	useFetchGifs.mockReturnValue({
		data: [],
		loading: true,
	})

	test('debe mostrarse correctamente', () => {
		const wrapper = shallow(<GifGrid category={category} />)

		expect(wrapper).toMatchSnapshot()
	})

	test('debe mostrar items cuando se cargan imagenes con useFetchGifs', () => {
		const gifs = [
			{
				id: 'algo',
				title: 'otra cosa',
				url: 'https://localhost/cualquier/imagen.jpg',
			},
			{
				id: '123',
				title: 'otra cosa mas',
				url: 'https://localhost/cualquier/imagen2.jpg',
			},
		]

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		})

		const wrapper = shallow(<GifGrid category={category} />)

		// expect(wrapper).toMatchSnapshot()

		expect(wrapper.find('p').exists()).toBe(false)
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
	})
})
