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
        conn.query('select * from persona where available = 1 limit 30', (err, rows) => {
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

//metodo registrar invocado al recibir una peticion de tipo post en la ruta
// /personas/registrar_persona
controller.register = (req, res) => {
    const data = req.body; //capturar datos del formulario
    //console.log(data.doc_identidad);

    //no permitir campos vacios
    if (data.doc_identidad == " " || data.nombres == " " || data.apellidos == " " 
            || data.fecha_nacimiento == "") {
        return res.status(409).send("Debe completar todos los campos");
             }

    req.getConnection((err, conn) => {
        if(err){
            return res.status(500).send("Algo salió mal al conectar con la bd");
        }
        else{
            //validar registro previo de persona (con estado activo)
            const q = "select * from persona where doc_identidad = ? and available = 1";
            conn.query(q, [data.doc_identidad], (err, rows) => {
            if(err){
                return res.status(500).json(err);
            }
            else if(rows.length > 0){
                //console.log(rows);
                return res.status(409).send("la persona ya se encuentra registrada");
            }
            else{
                // si la persona no esta registrada previamente, se procede a registrarla
                conn.query('insert into persona set ?', [data], (err, rows) => {
                if(err){
                   return res.status(500).send("Algo salió mal registrando la persona");
                }
                res.redirect('/personas');
                //console.log(rows);
            });
            }
        });
        }
    });
};

// metodo editar invocado al recibir una peticion de tipo get en la ruta 
// /personas/editar_persona/:id
controller.edit = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        if(err){
            return res.status(500).send("Algo salió mal al conectar con la bd");
        }
        else{
            conn.query('select * from persona where idPersona = ?', [id], (err, rows) => {
                if(err){
                    return res.status(500).send("Algo salió mal al consultar la persona");
                }
                //renderizar form de edicion pasando como parametros los datos de la persona
                res.render('form_edicion_persona.ejs', {
                    data: rows[0]
                });
            });
        }
    });
};

//metodo actualizar invocado al recibir una peticion de tipo post en la ruta
// /personas/actualizar_persona/:id
controller.update = (req, res) => {
    const id = req.params.id; // capturar id de la ruta
    const data = req.body; //capturar datos del formulario de edicion

    req.getConnection((err, conn) => {
        if(err){
            return res.status(500).send("Algo salió mal al conectar con la bd");
        }
        else{
            //validar si al editar los datos la persona usa un num_doc igual al de alguien ya registrado (con estado activo)
            const q = "select * from persona where doc_identidad = ? and available = 1 and idPersona != ?";
            conn.query(q, [data.doc_identidad, id], (err, rows) => {
            if(err){
                return res.status(500).json(err);
            }
            else if(rows.length > 0){
                //console.log(rows);
                return res.status(409).send("no es posible actualizar la info requerida (num_doc ya registrado)");
            }
            else{
                // actualizar los datos de la persona
                conn.query('update persona set ? where idPersona = ?', [data, id], (err, rows) => {
                if(err){
                   return res.status(500).send("Algo salió mal actualizando los datos");
                }
                res.redirect('/personas');
                //console.log(rows);
            });
            }
        });
        }
    });

};

//metodo eliminar invocado al recibir una peticion de tipo get en la ruta 
// /personas/eliminar_persona/:id
controller.delete = (req, res) => {
    
    req.getConnection((err, conn) => {
        if(err){
            return res.status(500).send("Algo salió mal al conectar con la bd");
        }

        const q = 'update persona set available = 0, deleted_at = ? where idPersona = ?';
        const d = Date.now();
        const date = new Date(d); 
        //const deleted_at = date.toLocaleDateString();
        const deleted_at = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();

        //res.json(deleted_at);
        
        conn.query(q, [deleted_at, req.params.id], (err, rows) => {
            if(err){
                return res.status(500).json(err).send("Algo salió mal al realizar esta accion");
            }
            res.redirect('/personas/');
        });
    });
};

module.exports = controller;