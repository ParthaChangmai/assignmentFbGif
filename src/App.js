import Feed from './container/Feed';
import Newpost from './container/Newpost';

function App() {
	return (
		<div className="flex flex-col items-center min-h-screen gap-4 p-4 lg:px-36 xl:px-96 ">
			<Newpost />
			<Feed />
		</div>
	);
}

export default App;
