import { validate as isUuid } from 'uuid';
import User from '../models/Users.mjs';

export default {
  async validateId(req, res, next) {
    const { id } = req.params;

    if (!isUuid(id)) {
      return res.status(400).json({ error: 'Invalid id' });
    }

    try {
      const user = await User.findById(id);
      res.user = user;
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }

    next();
  }
}
