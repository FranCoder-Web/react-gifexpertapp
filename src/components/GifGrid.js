import React from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import Loader from 'react-loader-spinner'

export const GifGrid = ({ category, cleanCategory }) => {
	const { data: images, loading } = useFetchGifs(category)
	const handleCategory = () => {
		cleanCategory((prevstate) => {
			return prevstate.filter((cat) => cat !== category)
		})
	}

	return (
		<>
			<h2 className='category'>
				{category}
				<span onClick={handleCategory} className='x-category'>
					X
				</span>
			</h2>
			{loading && (
				<Loader
					type='ThreeDots'
					color='#1e272e'
					height={120}
					width={120}
				/>
			)}
			<div className='card-grid'>
				{images.map((img) => (
					<GifGridItem key={img.id} category={category} {...img} />
				))}
			</div>
		</>
	)
}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
}
