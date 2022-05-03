import axios from 'axios';

export const getGif = async (type = 'trending', q) => {
	console.log(type, q);
	try {
		const res = await axios(`https://api.giphy.com/v1/gifs/${type}`, {
			params: {
				api_key: 'VQEc83glUtxwtUnUjvnpIOkuXOwBop5j',
				rating: 'g',
				limit: 10,
				q: q,
			},
		});

		return res.data.data;
	} catch (error) {
		console.log(error);
	}
};
