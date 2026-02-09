const express = require('express');

const app = express();
app.use(express.static(__dirname + '/static'));
const port = 6543;

app.get('/', (req: any, res: any) => {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
