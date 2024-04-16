//modulo que define los metodos a ejecutar cuando sean recibidas las peticiones especificadas en el modulo de rutas
//para la entidad persona

//definicion de obj controller para definir los metodos crud
const controller = {};

//metodo listar invocado al recibir una peticion de tipo get en la ruta /personas/ 
controller.list = (req, res) => {
    req.getConnection((err, conn) =>{
        if(err){
            return res.status(500).send("Algo salió mal al conectar con la bd");
        }
        conn.query('select * from persona limit 20', (err, rows) => {
            if(err){
                return res.status(500).send("Algo salió mal consultando las personas");
            }
            //validar que exitan registros para mostrar
            if(rows){
                //console.log(data[0].nombres);
                //usar la plantilla personas.ejs con los datos obtenidos de la consulta
                res.render('personas.ejs', {
                    data: rows
                });
            }
        });
    });
};

controller.register = (req, res) => {
    const data = req.body; //capturar datos del formulario
    console.log(data.doc_identidad);


    //no permitir campos vacios
    if (data.doc_identidad == " " || data.nombres == " " || data.apellidos == " " 
            || data.fecha_nacimiento == "") {
        return res.status(409).send("Debe completar todos los campos");
             }

    req.getConnection((err, conn) => {
        if(err){
            return res.status(500).send("Algo salió mal al conectar con la bd");
        }
        
        //validar registro previo de persona
        const q = "select * from persona where doc_identidad = ?";
        conn.query(q, [data.doc_identidad], (err, rows) => {
            if(err){
                return res.status(500).json(err);
            }
            if(rows.length > 0){
                //console.log(rows);
                return res.status(409).send("la persona ya se encuentra registrada");
            }
        });
        // si la persona no esta registrada previamente, se procede a registrarla
        conn.query('insert into persona set ?', [data], (err, rows) => {
            if(err){
               return res.status(500).send("Algo salió mal registrando la persona");
            }
            res.redirect('/personas');
            //console.log(rows);
        });
    });
};

module.exports = controller;