import { Router } from "express";
import {
  createMunicipio,
  deleteMunicipio,
  editMunicipio,
  renderMunicipio,
  updateMunicipio,
} from "../controllers/MunicipioController.js";
const router = Router();

router.get("/", renderMunicipio);
router.post("/add", createMunicipio);
router.get("/update/:id", editMunicipio);
router.post("/update/:id", updateMunicipio);
router.get("/delete/:id", deleteMunicipio);

export default router;
