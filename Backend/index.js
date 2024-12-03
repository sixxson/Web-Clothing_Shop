const express = require('express');
const app = express();
const post = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(post, () => {
    console.log(`Example app listening on port http://localhost:${post}`);
});