import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
import Loader from 'react-loader-spinner'

export const GifExpertApp = ({ defaultCategories = [] }) => {
	const [categories, setCategories] = useState(defaultCategories)

	return (
		<div className='container'>
			<h1 className='title'>Gif Expert App</h1>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{categories.length === 0 ? (
					<div className='container'>
						<h2 className='subtitle animate__animated animate__pulse animate__infinite animate__slow'>
							Find your gifs!
						</h2>
						<Loader
							type='BallTriangle'
							color='#1e272e'
							height={200}
							width={200}
						/>
					</div>
				) : (
					categories.map((categorie) => (
						<GifGrid key={categorie} category={categorie} />
					))
				)}
			</ol>
		</div>
	)
}
