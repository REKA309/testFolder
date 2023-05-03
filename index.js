const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT =  4000;

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  res.send('This is a GET request');
});

app.post('/api/users', (req, res) => {
  console.log(req.body);
  res.send('This is a POST request');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
