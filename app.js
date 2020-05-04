const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes/api/spots');
const app = express();

connectDB();

app.get('/', (req, res) => res.send('spot maps app'));

app.use('/api/spots', routes);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server Running On PORT ${port}`));
