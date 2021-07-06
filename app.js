const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const views = path.join(__dirname, 'views');
app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(path.join(views, 'home.html')));

app.listen(port, () => console.log(`Puerto iniciado en el servidor ${port}.`));