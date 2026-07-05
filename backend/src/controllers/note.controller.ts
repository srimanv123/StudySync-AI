import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createNote = async (req: Request, res: Response) => {
  try {
    const { title, fileName, fileUrl, fileType, fileSize } = req.body;

    const note = await prisma.note.create({
      data: {
        title,
        fileName,
        fileUrl,
        fileType,
        fileSize,
        userId: req.user!.id,
      },
    });

    return res.status(201).json({
      success: true,
      note,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to create note.",
    });
  }
};