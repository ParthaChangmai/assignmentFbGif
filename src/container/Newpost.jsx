import React from 'react';
import Bottom from '../components/NewPost/Bottom';
import Header from '../components/NewPost/Header';
import PostButton from '../components/NewPost/PostButton';
import TextArea from '../components/NewPost/TextArea';

const NewPost = () => {
	return (
		<div className="flex flex-col w-[550px]  gap-2 border rounded-lg shadow-lg">
			<Header />
			<TextArea />
			<Bottom />
			<PostButton />
		</div>
	);
};

export default NewPost;
