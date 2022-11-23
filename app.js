const express = require('express');
const app = express();
const port = 18273;

app.get('/', (req, res) => res.send('SFS DATABASE IS RUNNING'));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));