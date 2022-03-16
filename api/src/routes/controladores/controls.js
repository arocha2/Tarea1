const axios = require("axios");

const getPokeApi = async () => {
	const getPokeApiarr = await axios.get(
		"https://pokeapi.co/api/v2/pokemon?limit=40"
	);
	const pokeArr = getPokeApiarr.data.results;
	return pokeArr;
};
const getPokeData = async () => {
	const pokeArr = await getPokeApi();
	console.log(pokeArr);
	const promesAxios = [];
	pokeArr.map((poke) => {
		promesAxios.push(
			axios
				.get(poke.url)
				.then((data) => data.data)
				.then((poke) => ({
					id: poke.id,
					name: poke.name,
					vida: poke.stats[0].base_stat,
					fuerza: poke.stats[1].base_stat,
					defensa: poke.stats[2].base_stat,
					velocidad: poke.stats[5].base_stat,
					altura: poke.height,
					peso: poke.weight,
					type: poke.types.map((type) => type.type.name),
				}))
				.catch((e) => e)
		);
	});
	console.log(promesAxios);
	const data = await Promise.all(promesAxios);
	console.log(data);
	return data;
};
getPokeData();

module.exports = {
	getPokeData,
};
