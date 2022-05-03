import React from 'react';
import image from './Assets/image.jpg';

function Body() {
	return (
		<>
			<img
				src={image}
				alt="Pic for the card"
				className="w-full h-full outline-none "
			/>
		</>
	);
}

export default Body;
