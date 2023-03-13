const express = require('express');
const app = express();
const port = 5000;
const host = 'localhost';
const router = require('./routes');

app.use(express.json());
app.use(router);
app.listen(port, host, () => {
  console.log(`Server stated on ${host}:${port}`);
});
