const express = require('express');
const app = express();

app.use(express.static('client'))
console.log('Running on port 3000')
app.listen(3000)