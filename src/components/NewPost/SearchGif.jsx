import React, { useState, useEffect } from 'react';
import { getGif } from '../../api';
import RenderGifs from './RenderGifs';

const SearchGif = () => {
	const [gifData, setGifData] = useState([]);
	const [searchGif, setSearchGif] = useState('');

	useEffect(() => {
		if (searchGif === '') {
			getGif().then((data) => {
				setGifData(data);
			});
		} else {
			getGif('search', { searchGif }).then((data) => {
				setGifData(data);
			});
		}
	}, [searchGif]);

	console.log(gifData);
	console.log(searchGif);
	return (
		<>
			<div className="absolute flex flex-col gap-4 px-4 py-2 overflow-y-scroll bg-gray-200 rounded-md shadow-lg max-h-80 w-72  -left-2 top-9">
				<input
					type="text"
					onClick={(e) => e.stopPropagation()}
					className="w-full h-8 outline-none rounded-3xl"
					value={searchGif}
					onChange={(e) => setSearchGif(e.target.value)}
				/>
				<div className="flex flex-col gap-2">
					{gifData.map((gif) => (
						<img src={gif.images.downsized.url} key={gif.id} alt={gif.title} />
					))}
				</div>
			</div>
		</>
	);
};

export default SearchGif;
