import { NextResponse } from "next/server";
import Contact from "@/app/model/ContactModel";
import connectToDatabase from "@/app/connection/connectoDb";
export async function POST(req) {
  try {
    await connectToDatabase();
    const { username, email, number, message } = await req.json();
    const result = await Contact.create({
      username,
      email,
      number,
      message,
    });
    return NextResponse.json(
      {
        message: "contact form successfuly submitted",
        result,
      },
      {
        status: 201,
      }
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: "something went wrong please try again",
      },
      { status: 400 }
    );
  }
}
