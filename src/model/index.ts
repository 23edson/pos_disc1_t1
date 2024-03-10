import sequelize from "@/config/db"

/**
 * Inicializa mapeamento dos models com o banco de dados.
 */
async function initSequelize() {
    try {

        await sequelize.sync();

    } catch (error) {
        console.log('Sequelize Sync error')
    }
}

export default initSequelize
