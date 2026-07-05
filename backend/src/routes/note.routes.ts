import { Router } from "express";
import { uploadNote } from "../controllers/note.controller";
import { authenticate } from "../middleware/auth.middleware";
import { upload } from "../middleware/upload.middleware";

const router = Router();

router.post(
  "/upload",
  authenticate,
  upload.single("file"),
  uploadNote
);

export default router;