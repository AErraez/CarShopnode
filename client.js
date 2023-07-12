const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const session = require('express-session')
const cors = require('cors')

app.use(cors());

const db = require('./db')
app.use(bodyParser.json({ type: 'application/json' }))

app.use(session({ 
    secret: 'Contraseniajeje', 
    cookie: { maxAge: 3600000 } //1 hora
}))


const Client = require('./controllers/client')
const Order= require('./controllers/client/order')

app.use('/user', Client)
app.use('/user/order', Order)
app.use(express.static(path.join(__dirname, "build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


const PORT = 3002;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))