require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const secretMessage = process.env.SECRET_MESSAGE;

// Middleware for basic auth
const basicAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.setHeader('WWW-Authenticate', 'Basic');
    return res.status(401).send('Authentication required.');
  }
  
  const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
  const [user, pass] = credentials;

  if (user === username && pass === password) {
    next();
  } else {
    res.status(403).send('Access denied.');
  }
};

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/secret', basicAuth, (req, res) => {
  res.send(secretMessage);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
