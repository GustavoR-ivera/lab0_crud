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
            console.log(vivienda);
            res.redirect('/');
        });
    });
};

module.exports =  controller