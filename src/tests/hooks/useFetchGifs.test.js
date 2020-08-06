import '@testing-library/jest-dom'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'
describe('Pruebas en el hook useFetchGifs', () => {
	test('debe retornar el estado inicial', () => {
		const { result } = renderHook(() => useFetchGifs('Sao'))

		const { data, loading } = result.current

		expect(data).toEqual([])
		expect(loading).toBe(true)
	})
})
