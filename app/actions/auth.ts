"use server"

import { signIn, signOut } from "@/auth"
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"
import { z } from "zod"
import { AuthError } from "next-auth"

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export async function loginAction(formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.issues[0].message,
    }
  }

  const { email, password } = validatedFields.data

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard",
    })
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        error: "Invalid email or password",
      }
    }
    throw error
  }
}

export async function registerAction(formData: FormData) {
  const validatedFields = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.issues[0].message,
    }
  }

  const { name, email, password } = validatedFields.data

  const existingUser = await db.user.findUnique({
    where: { email },
  })

  if (existingUser) {
    return {
      error: "User with this email already exists",
    }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })
  } catch (error) {
    console.error("Database error:", error)
    return {
      error: "Failed to create user",
    }
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard",
    })
  } catch (error) {
    // signIn throws NEXT_REDIRECT which is expected
    throw error
  }
}

export async function logoutAction() {
  await signOut({ redirectTo: "/login" })
}
