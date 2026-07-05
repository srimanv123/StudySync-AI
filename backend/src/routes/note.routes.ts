import { Router } from "express";
import { createNote } from "../controllers/note.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authenticate, createNote);

export default router;