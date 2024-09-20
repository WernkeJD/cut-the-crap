const express = require('express');
const url = require('url');
const fs = require('fs');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');


const app = express();
app.use(cors());

const port = 3000;

app.get('/', (req, res) => {
    const queryObject = url.parse(req.url, true).query;

    let indexFile = fs.readFileSync('frontend/public/index.html', 'utf8');

    if (queryObject.url) {
        const decodedString = Buffer.from(queryObject.url, 'base64').toString('utf8');
        indexFile = indexFile.replace('abcde', `${queryObject.url}`);
    }

    res.send(indexFile)

    console.log(queryObject);
});

app.listen(port, () => {
    console.log('Server is running on port 3000');
});
