
const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) =>{
        if(err){
            console.log(err);
            return res.status(500).send("Algo salió mal al conectar con la bd");
        }
        conn.query('select * from municipio', (err, rows) => {
            if(err){
                return res.status(500).send("Algo salió mal consultando los municipios");
            }
            if(rows){
            console.log(rows);
            res.render('municipio.ejs', {
                     data: rows
                 });
            }
        });
    });
};


controller.register = (req, res) => {
    const data = req.body; 

    //no permitir campos vacios
    if (data.idMunicipio == " " || data.nombre_municipio == " " || data.nombreDepto == " " 
            || data.idPersona_gobernante== "") {
        return res.status(409).send("Debe completar todos los campos");
             }

    req.getConnection((err, conn) => {
        if(err){
            console.log(err);
            return res.status(500).send("Algo salió mal al conectar con la bd");
        }
        else{
            //validar registro previo de persona (con estado activo)
            const q = "select * from municipio where idMunicipio = ?";
            conn.query(q, [data.doc_identidad], (err, rows) => {
            if(err){
                return res.status(500).json(err);
            }
            else if(rows.length > 0){
                //console.log(rows);
                return res.status(409).send("El municipio ya se encuentra registrado");
            }
            else{
                // si la persona no esta registrada previamente, se procede a registrarla
                conn.query('insert into municipio set ?', [data], (err, rows) => {
                if(err){
                   return res.status(500).send("Algo salió mal registrando el municipio");
                }
                res.redirect('/municipios');
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
            console.log(err);
            return res.status(500).send("Algo salió mal al conectar con la bd");
            
        }
        else{
            conn.query('select * from municipio where idMunicipio = ?', id, (err, rows) => {
                if(err){
                    console.log(err);
                    return res.status(500).send("Algo salió mal al consultar el municipio");
                }
                
                res.render('municipio_edit.ejs', {
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
            console.log(err);
            return res.status(500).send("Algo salió mal al conectar con la bd");
            
        }
        else{
            
            const q = "select * from municipio where idMunicipio = ?";
            conn.query(q, [data.idMunicipio, id], (err, rows) => {
            if(err){
                
                return res.status(500).json(err);
            }
            else if(rows.length > 0){
                //console.log(rows);
                return res.status(409).send("no es posible actualizar la info requerida");
            }
            else{
                // actualizar los datos de la persona
                conn.query('update municipio set ? where idMunicipio = ?', [data, id], (err, rows) => {
                if(err){
                    console.log(err);
                   return res.status(500).send("Algo salió mal actualizando los datos");
                }
                res.redirect('/municipios');
                //console.log(rows);
            });
            }
        });
        }
    });

};

controller.delete = (req, res) => {
    
    req.getConnection((err, conn) => {
        if(err){
            return res.status(500).send("Algo salió mal al conectar con la bd");
        }

        const q = 'delete from municipio where idMunicipio = ?';
        

        //res.json(deleted_at);
        
        conn.query(q,req.params.id, (err, rows) => {
            if(err){
                return res.status(500).json(err).send("Algo salió mal al realizar esta accion");
            }
            res.redirect('/municipios');
        });
    });
};

module.exports = controller;