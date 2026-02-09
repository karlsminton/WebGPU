const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const key: string = fs.readFileSync('./key.pem');
const cert: string = fs.readFileSync('./cert.pem');

const app = express();
app.use(express.static(__dirname + '/static'));
const port = 6543;

const server = https.createServer({key: key, cert: cert}, app);

app.get('/', (req: any, res: any) => {
    res.sendFile(path.resolve('./dist/index.html'));
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
