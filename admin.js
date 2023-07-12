const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session')
const cors = require('cors')
const engine = require('ejs-locals')

app.use(cors());



const db = require('./db')
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true })); 


app.use(session({ 
    secret: 'Contraseniaadminjeje', 
    cookie: { maxAge: 600000 } //10 minutos
}))

app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//const Client = require('./controllers/client')



const Login = require('./controllers/admin/login')
const Order= require('./controllers/admin/order')
const Logout = require('./controllers/admin/logout')

app.get("/", (req,res)=>{
  res.render('admin/login')
})

app.use('/order', Order)
app.use('/login', Login)
app.use('/logout', Logout)


const PORT = 3001;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))