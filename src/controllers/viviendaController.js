const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM vivienda', (err, viviendas) => {
            if(err){
                res.json(err);
            }
            res.render('viviendas', {
                data : viviendas
            });            
        });
    });
};
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM vivienda WHERE idVivienda = ?', [id], (err, vivienda)=>{
            res.render('vivienda_edit', {
                data: vivienda[0]
            });
        });
    });
};

controller.update = (req, res) =>{
    const { id } = req.params;
    const newVivienda = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE vivienda set ? WHERE idVivienda = ?', [newVivienda, id], (err, rows)=> {
            res.redirect('/viviendas');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM vivienda Where idVivienda = ?', [id], (err, rows)=>{
            res.redirect('/');
        }); 
    });
}
controller.save = (req, res) =>{
    const data = req.body;

    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO vivienda set ?', [data], (err, vivienda) =>{
            console.log(err);
            res.redirect('/viviendas/');
        });
    });
};

module.exports =  controller