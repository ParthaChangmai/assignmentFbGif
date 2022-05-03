import React from 'react';

const PostButton = () => {
	return (
		<div className="flex items-center justify-end gap-6 p-2 rounded-b-lg bg-gray-100">
			<button className="flex items-center gap-1 px-2 py-1 font-medium border bg-gray-50">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-4 h-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
					/>
				</svg>
				<span>Only Me</span>
			</button>
			<button className="px-3 py-1 font-medium text-gray-100 border bg-cyan-900">
				Post
			</button>
		</div>
	);
};

export default PostButton;
