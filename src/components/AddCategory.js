import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = (e) => {
		setInputValue(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()

		if (inputValue.trim().length > 2) {
			setCategories((prevState) => {
				let repeatCategorie = prevState.indexOf(
					inputValue.toUpperCase().trim()
				)
				if (repeatCategorie >= 0) {
					return prevState
				} else {
					return [inputValue.toUpperCase(), ...prevState]
				}
			})
			setInputValue('')
		}
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				className='search'
				type='text'
				value={inputValue}
				onChange={handleInputChange}
				placeholder='SEARCH GIFS...'
			/>
		</form>
	)
}

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
}
