const { DataTypes, Model } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
class Pokemon extends Model {}

module.exports = (sequelize) => {
	// defino el modelo
	Pokemon.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
				allowNull: false,
			},
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			vida: {
				type: DataTypes.INTEGER,
			},
			fuerza: {
				type: DataTypes.INTEGER,
			},
			defensa: {
				type: DataTypes.INTEGER,
			},
			velocidad: {
				type: DataTypes.INTEGER,
			},
			altura: {
				type: DataTypes.INTEGER,
			},
			peso: {
				type: DataTypes.INTEGER,
			},
		},
		{
			sequelize,
			modelName: "Pokemon",
		}
	);
};
