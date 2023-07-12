const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors());

const db = require('./db')
app.use(bodyParser.json({ type: 'application/json' }))




const Api = require('./controllers/api')

app.use('/api', Api)





const PORT = 3003;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))