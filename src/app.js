const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require('mysql');
const myConnection = require("express-myconnection");

//initializations
const app = express();  


//importing routes
const viviendaRoutes = require('./routes/vivienda')

//settings
app.set('port', process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

//middlewares
// usar morgan para ver las peticiones que llegan al servidor
app.use(morgan('dev'));
//iniciar servidor mysql y configurar bd
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'dfm,931207',
    port: 3306,
    database: 'lab0_crud'

}, 'single'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/viviendas', viviendaRoutes);


//static files
app.use(express.static(path.join(__dirname, 'public')));

//starting the server
app.listen(app.get('port'), () =>{
    console.log("Server is running on port 3000")
});