import React from 'react';

export const Comments = () => {
	return (
		<>
			<div className="flex items-center justify-around p-2 border-y-2 border-grey-800">
				<button type="button" className="flex items-center gap-2 font-medium">
					<span></span>
					<span>Like</span>
				</button>
				<button type="button" className="flex items-center gap-2 font-medium">
					<span></span>
					<span>Comment</span>
				</button>
				<button type="button" className="flex items-center gap-2 font-medium">
					<span></span>
					<span>Share</span>
				</button>
			</div>
		</>
	);
};
