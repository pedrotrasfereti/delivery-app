const { JwtMethods } = require('../../app/utils/JwtMethods');

module.exports = {
  validateUserToken: (role) => (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: 'Token not found' });
    }
    try {
      const decoded = JwtMethods.verifyToken(token);
      if (decoded.role !== role) throw new Error();
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Token invalid or expired' });
    }
  },
};