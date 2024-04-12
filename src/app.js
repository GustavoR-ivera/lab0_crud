const express = require("express");
const path = require("path");
const morgan = require("morgan");
const myConnection = require("express-myconnection");

//initializations
const app = express();  

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
    password: 'admin',
    port: 3306,
    database: 'lab0_crud'

}, 'single'));

//routes

app.listen(app.get('port'), () =>{
    console.log("Server is running on port ")
});