import { DataTypes, Model, } from "sequelize";
import sequelize from "@/config/db";

/**
 * Classe que representa um Student
 */
class Student extends Model {

    declare name: string;
    declare birthday: Date;
    declare createdAt: Date;
    declare updatedAt: Date;

}

/**
 * Colunas da tabela Student
 */
Student.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    },

}, {
    sequelize,
    tableName: 'students',
    timestamps: true
})

export default Student
