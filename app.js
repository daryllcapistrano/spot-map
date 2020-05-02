const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('spot maps app'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server Running On PORT ${port}`));
