import { validate as isUuid } from 'uuid';
import User from '../models/Users.mjs';

export default {
  async validateId(request, response, next) {
    const { id } = request.params;

    if (!isUuid(id)) {
      return response.status(400).json({ error: 'Invalid id' });
    }

    try {
      const user = await User.findById(id);
      response.user = user;
      if (!user) {
        return response.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }

    next();
  }
}
