import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    nome: 'Stefany Sá',
    email: 'stefany.vasc.sa@gmail.com',
    hash_senha: '0123',
  });
  return res.json(user);
});

export default routes;
