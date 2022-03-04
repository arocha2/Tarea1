const { Router } = require("express");
const router = Router();
const axios = require("axios");

router.get("/", async (req, res) => {
	const pokeArr = [];
	for (let i = 1; i < 40; i++) {
		const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
		const dataf = data.data;
		const pokeObj = {
			nombre: dataf.name,
			img: dataf.sprites.front_default,
			type: dataf.types.map((type) => type.type.name),
		};
		pokeArr.push(pokeObj);
	}
	// const dataf = "hola";
	res.send(pokeArr);
});
module.exports = router;
