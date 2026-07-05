import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

const prisma = new PrismaClient();

export const uploadNote = async (req: Request, res: Response) => {
  try {
    console.log("========== START ==========");

    if (!req.file) {
      console.log("No file received");
      return res.status(400).json({
        success: false,
        message: "Please upload a file.",
      });
    }

    console.log("File received:", req.file.originalname);
    console.log("User:", req.user);

    const { title } = req.body;

    console.log("Uploading to Cloudinary...");
    const result = await uploadToCloudinary(req.file.buffer);
    console.log("Cloudinary Success:", result.secure_url);

    console.log("Saving to database...");
    const note = await prisma.note.create({
      data: {
        title,
        fileName: req.file.originalname,
        fileUrl: result.secure_url,
        fileType: req.file.mimetype,
        fileSize: req.file.size,
        userId: req.user!.id,
      },
    });

    console.log("Database Success");
    console.log("========== END ==========");

    return res.status(201).json({
      success: true,
      message: "Note uploaded successfully.",
      note,
    });
  } catch (error: any) {
    console.log("========== ERROR ==========");
    console.log(error);
    console.log(error?.message);
    console.log(error?.stack);
    console.log("==========================");

    return res.status(500).json({
      success: false,
      message: "Failed to upload note.",
    });
  }
};