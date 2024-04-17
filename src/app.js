const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql2");
const myConnection = require("express-myconnection");

// import routes
const municipioRoutes = require('./routes/municipio.routes.js');

//initializations
const app = express();  

//settings
app.set('port', process.env.PORT || 3000);
app.set("view engine", "ejs"); //motor de plantillas
app.set('views', path.join(__dirname, 'views')); //folder donde estan las vistas

//middlewares
// usar morgan para ver las peticiones que llegan al servidor
app.use(morgan('dev'));
//iniciar servidor mysql y configurar bd
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    port: 3306,
    database: 'lab0_crud'

}, 'single'));
app.use(express.urlencoded({extended: false})); //para recibir datos de formularios


//pagina principal
app.get('/', (req, res) => {
    res.render('municipio.ejs');
}); 

//routes
app.use('/municipios', municipioRoutes); //rutas modulo personas



app.listen(app.get('port'), () =>{
    console.log("Server is running on port {app.get('port')}")
});

module.exports = app;