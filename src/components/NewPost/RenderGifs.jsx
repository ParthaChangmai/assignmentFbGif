import React from 'react';

const RenderGifs = ({ gifData }) => {
	return (
		<div className="flex flex-col gap-2">
			{gifData.map((e) => {
				<img src={e.images.downsized.url} key={e.id} alt={e.title} />;
			})}
		</div>
	);
};

export default RenderGifs;
