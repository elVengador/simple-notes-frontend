const express = require('express');
const path = require('path');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('> server on port:', PORT);
});
