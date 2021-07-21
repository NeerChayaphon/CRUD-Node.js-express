const express = require('express');
const path = require('path');
const Sequelize = require('sequelize');
const app = express();
const db = require('./config/database');
// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log(err));

app.use(express.json());

app.get('/', (req, res) => res.send('INDEX'));

// Product Route
app.use('/products', require('./routes/products'));

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'faill',
    message: 'Invalid url',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
