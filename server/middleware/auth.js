const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET || 'hiwa2023';
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodeToken = jwt.verify(token, SECRET);
    req.user = decodeToken;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Authentification failed' }).end();
  }
};
