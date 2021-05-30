const express = require('express');
const path = require('path');
const app = express();

const staticPath = path.resolve(__dirname, 'static');

app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.sendFile(staticPath + '/index.html')
});

app.listen(3000, () => console.log('Server has been started on port 3000'));