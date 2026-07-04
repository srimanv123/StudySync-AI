import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import type { Request, Response } from 'express'
import { prisma } from '../config/prisma'

const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const isValidPassword = (password: string): boolean => password.length >= 8

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body as {
      name?: unknown
      email?: unknown
      password?: unknown
    }

    if (typeof name !== 'string' || name.trim().length < 2) {
      res.status(400).json({
        message: 'Name must be a string with at least 2 characters.',
      })
      return
    }

    if (typeof email !== 'string' || !isValidEmail(email.trim())) {
      res.status(400).json({
        message: 'Please provide a valid email address.',
      })
      return
    }

    if (typeof password !== 'string' || !isValidPassword(password)) {
      res.status(400).json({
        message: 'Password must be at least 8 characters long.',
      })
      return
    }

    const normalizedEmail = email.trim().toLowerCase()

    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    })

    if (existingUser) {
      res.status(409).json({
        message: 'A user with this email already exists.',
      })
      return
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    res.status(201).json({
      message: 'User registered successfully.',
      user,
    })
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({
      message: 'Internal server error.',
    })
  }
}

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body as {
      email?: unknown
      password?: unknown
    }

    if (typeof email !== 'string' || !isValidEmail(email.trim())) {
      res.status(400).json({
        message: 'Please provide a valid email address.',
      })
      return
    }

    if (typeof password !== 'string' || !isValidPassword(password)) {
      res.status(400).json({
        message: 'Password must be at least 8 characters long.',
      })
      return
    }

    const normalizedEmail = email.trim().toLowerCase()

    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    })

    if (!user) {
      res.status(401).json({
        message: 'Invalid credentials.',
      })
      return
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      res.status(401).json({
        message: 'Invalid credentials.',
      })
      return
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '7d' },
    )

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({
      message: 'Internal server error.',
    })
  }
}
