import Sequelize from 'sequelize';
import User from '../app/models/User';
import databaseConfig from '../config/database';

// criando um array com todos os models da aplicação
const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // conexão com a base de dados onde é pego do arquivo que tá em config
    this.connection = new Sequelize(databaseConfig);

    // percorrendo o array
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
