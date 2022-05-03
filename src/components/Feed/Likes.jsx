import React from 'react';

const Likes = () => {
	return (
		<div>
			<div className="flex items-center justify-between px-4 py-2 text-sm text-gray-500">
				<div className="flex items-center gap-1">
					<span>👍</span>
					<span>8</span>
				</div>

				<span>5 comments 1 Shares</span>
			</div>
		</div>
	);
};

export default Likes;
