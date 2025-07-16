import jwt from 'jsonwebtoken';
import { asyncContext } from '../context.js';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Get token from Authorization header

  if (!token) {
    return res.status(401).send('Access token is missing');
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send('Invalid access token');
    }

    req.clientID = decoded.clientID; // Assuming clientID is in the token payload
    const store = new Map();
    store.set('tenentID', decoded.clientID);

    asyncContext.run(store, () => next()); 
    // next();
  });
};

export {authMiddleware}; 