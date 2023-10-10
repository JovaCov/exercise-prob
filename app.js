require('dotenv').config();
const express = require('express')
const app = express();
const userRouter = require('./routes/user');
const exerciseRouter = require('./routes/exercise');
const connect = require('./db/connect');
const session = require('express-session');
const auth = require('./controllers/middle/auth');

app.use(express.json())

app.set('view engine', 'ejs')
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true}));
app.use(express.urlencoded({extended: false}));



app.get('/', (req,res) => {
    res.render('index.ejs')
    
})

app.use('/api/user', userRouter);
app.use('/api/exercise', exerciseRouter);
const port = process.env.PORT || 3000


const start = async () => {
    try {
        await connect(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`listening on ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()

//app.listen(port, console.log(`listening on ${port}...`));