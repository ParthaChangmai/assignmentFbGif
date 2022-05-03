import React from 'react';
import Body from '../components/Feed/Body';
import CommentDemo from '../components/Feed/CommentDemo';
import { Comments } from '../components/Feed/Comments';
import Header from '../components/Feed/Header';
import Likes from '../components/Feed/Likes';

const Feed = () => {
	return (
		<div className="flex flex-col w-[550px]  gap-2 border rounded-lg shadow-lg">
			<Header />
			<Body />
			<Likes />
			<Comments />
			<CommentDemo />
		</div>
	);
};

export default Feed;
