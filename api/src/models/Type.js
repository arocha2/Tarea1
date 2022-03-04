const { DataTypes, Model } = require("sequelize");

class Type extends Model {}

module.exports = (sequelize) => {
	Type.init(
		{
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Type",
		}
	);
};
