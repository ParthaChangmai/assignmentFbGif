import React from 'react';

const CommentDemo = () => {
	return (
		<>
			<div className="flex justify-between p-2">
				<div className="flex items-center gap-1 cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-9 h-9 text-gray-400"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
							clipRule="evenodd"
						/>
					</svg>
					<div className="flex flex-col bg-gray-100 rounded-lg px-2 pl-2 pb-1">
						<h3 className="text-sm font-semibold">Rahul Sharma </h3>
						<span className="flex items-center gap-1 text-xs text-gray-500">
							<span>Good Pic !</span>
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default CommentDemo;
