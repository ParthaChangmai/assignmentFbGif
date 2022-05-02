import Feed from './container/Feed';
import NewPost from './container/NewPost';

function App() {
	return (
		<div className="flex flex-col items-center min-h-screen gap-4 p-4 lg:px-36 xl:px-96 ">
			<NewPost />
			<Feed />
		</div>
	);
}

export default App;
