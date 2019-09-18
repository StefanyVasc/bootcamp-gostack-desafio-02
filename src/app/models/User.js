import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    // enviando as colunas que estarão dentro do BD
    // apenas as colunas em que o usuário irá inserir algum dado
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        senha: Sequelize.STRING,
        hash_senha: Sequelize.STRING,
      },
      {
        // esse sequelize sempre será passado como segundo paramêtro do init
        sequelize,
      }
    );
  }
}

export default User;
