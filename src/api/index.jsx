import axios from 'axios';

export const getGif = async (search, query) => {
	try {
		const {
			data: { data },
		} = await axios.get(`api.giphy.com/v1/gifs/${search}`, {
			params: {
				api_key: process.env.REACT_APP_GIF_API,
				rating: 'g',
				limit: 10,
				q: query,
			},
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};
