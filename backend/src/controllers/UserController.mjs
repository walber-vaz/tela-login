import { v4 as uuid } from 'uuid';
import crypto from 'crypto';

import User from '../models/Users.mjs';

export default {
  async index(request, response) {
    try {
      const users = await User.find();
      return response.status(200).json({ users });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },

  async create(request, response) {
    const { username, lastname, email, password } = request.body;

    if (!username || !lastname || !email || !password) {
      return response.status(400).json({ error: 'Missing data' });
    }

    const user = new User({
      _id: uuid(),
      username,
      lastname,
      email,
      password: crypto.createHash('sha256').update(password).digest('hex'),
    });

    try {
      await user.save();
      return response.status(201).json({ message: 'User created' });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },

  async update(request, response) {
    const { username, lastname, email, password } = request.body;

    if (!username && !lastname && !email && !password) {
      return response.status(400).json({ error: 'Missing data' });
    }

    if (username) response.user.username = username;
    if (lastname) response.user.lastname = lastname;
    if (email) response.user.email = email;
    if (password) response.user.password = crypto.createHash('sha256').update(password).digest('hex');

    try {
      await response.user.save();
      return response.status(200).json({ message: 'User updated' });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },

  async delete(request, response) {
    try {
      await response.user.remove();
      return response.status(200).json({ message: 'User deleted' });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
}
