const { Router } = require("express");
const { getPokeData } = require("../controladores/controls");
const router = Router();

router.get("/", async (req, res) => {
	const data = await getPokeData();
	const hola = "hola";
	res.send(data);
});

module.exports = router;
