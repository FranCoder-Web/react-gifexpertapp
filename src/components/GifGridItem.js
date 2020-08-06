import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({ title, url, category }) => {
	return (
		<div className='card animate__animated animate__fadeInDown '>
			<img src={url} alt={title} />
			<p>
				{!title || title.trim() === ''
					? category.toUpperCase()
					: title.toUpperCase()}
			</p>
		</div>
	)
}

GifGridItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
}
