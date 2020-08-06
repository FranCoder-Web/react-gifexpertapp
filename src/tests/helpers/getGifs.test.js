import { getGifs } from '../../helpers/getGifs'
import '@testing-library/jest-dom'

describe('Probando la funcion getGifs', () => {
	test('espero que traiga 10 imagenes', async () => {
		const gifs = await getGifs('Dragon ball')

		expect(gifs.length).toBe(12)
	})

	test('sin categoria debe retornar un arreglo vacio', async () => {
		const gifs = await getGifs('')

		expect(gifs.length).toBe(0)
	})
})
