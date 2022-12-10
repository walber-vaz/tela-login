import { v4 as uuid } from 'uuid';
import crypto from 'crypto';

import User from '../models/Users.mjs';

export default {
  async index(req, res) {
    try {
      const users = await User.find();
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    const { username, lastname, email, password } = req.body;

    if (!username || !lastname || !email || !password) {
      return res.status(400).json({ error: 'Missing data' });
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
      return res.status(201).json({ message: 'User created' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    const { username, lastname, email, password } = req.body;

    if (!username && !lastname && !email && !password) {
      return res.status(400).json({ error: 'Missing data' });
    }

    if (username) res.user.username = username;
    if (lastname) res.user.lastname = lastname;
    if (email) res.user.email = email;
    if (password) res.user.password = crypto.createHash('sha256').update(password).digest('hex');

    try {
      await res.user.save();
      return res.status(200).json({ message: 'User updated' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      await res.user.remove();
      return res.status(200).json({ message: 'User deleted' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
