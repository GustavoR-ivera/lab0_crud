import { pool } from "../db.js";

export const renderMunicipio = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM Municipio");
  res.render("Municipio", { Municipio: rows });
};

export const createMunicipio = async (req, res) => {
  const newMunicipio = req.body;
  await pool.query("INSERT INTO Municipio set ?", [newMunicipio]);
  res.redirect("/");
};

export const editMunicipio = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM Municipio WHERE id = ?", [
    id,
  ]);
  res.render("Municipio_edit", { Municipio: result[0] });
};

export const updateMunicipio = async (req, res) => {
  const { id } = req.params;
  const newMunicipio = req.body;
  await pool.query("UPDATE Municipio set ? WHERE id = ?", [newMunicipio, id]);
  res.redirect("/");
};

export const deleteMunicipio = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM Municipio WHERE id = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "Municipio deleted" });
  }
  res.redirect("/");
};
