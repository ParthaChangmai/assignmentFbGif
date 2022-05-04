import React, { useState, useEffect } from 'react';
import { getGif } from '../../api';

const SearchGif = (props) => {
	const [gifData, setGifData] = useState([]);
	const [searchGif, setSearchGif] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		if (searchGif === '') {
			getGif().then((data) => {
				setGifData(data);
				setIsLoading(false);
			});
		} else {
			const timeout = setTimeout(() => {
				getGif('search', { searchGif }).then((data) => {
					setGifData(data);
					setIsLoading(false);
				}, 500);

				return () => clearTimeout(timeout);
			});
		}
	}, [searchGif]);
	console.log(gifData);

	return (
		<>
			<div className="absolute flex flex-col gap-4 px-4 py-2 overflow-y-scroll bg-gray-200 rounded-md shadow-lg max-h-80 w-72  -left-2 top-9">
				<input
					placeholder="Search GIFS"
					type="text"
					onClick={(e) => e.stopPropagation()}
					className="w-full h-8 outline-none rounded-lg"
					value={searchGif}
					onChange={(e) => setSearchGif(e.target.value)}
				/>
				{isLoading && <div>Loading...</div>}
				<div className="flex flex-col gap-2">
					{gifData.map((gif) => (
						<img
							className="rounded-md"
							src={gif.images.preview_gif.url}
							key={gif.id}
							alt={gif.title}
							onClick={() =>
								props.getSingleGif(gif.images.downsized.url, gif.title)
							}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default SearchGif;
