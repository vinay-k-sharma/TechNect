import { connectToDatabase } from '@/lib/database';
import User from '@/lib/database/models/user.model';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();
  await connectToDatabase();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new NextResponse('Email already exists', { status: 400 });
  }

  const encryptedPass = await bcrypt.hash(password, 5);

  const newUser = new User({
    email,
    password: encryptedPass,
  });
  try {
    await newUser.save();
    return new NextResponse('User registered successfully', { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 500 });
    }
    return new NextResponse('An unknown error occurred', { status: 500 });
  }
};
