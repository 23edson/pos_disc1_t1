import path from "path";
import { Sequelize } from "sequelize";

//Define a conexão com o banco de dados. 
const connection = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '..', 'database_dev.sqlite')
})

export default connection