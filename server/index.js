require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

const models = require('./models/models');
const router = require('./routes/index');
const errorMiddleware = require('./middleware/interceptError');

const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));

app.use('/api', router);


app.use(errorMiddleware);

const start = async() =>{
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, ()=>{console.log(`Сервер работает на порту ${PORT}`)})
    } catch (e) {
        console.log(e);
    }
}

start()