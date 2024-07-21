const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const habitRoutes = require('./routes/habits');
const dotenv = require("dotenv");
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/habits', habitRoutes);

app.get('/', (req, res) => {
  res.redirect('/habits');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
