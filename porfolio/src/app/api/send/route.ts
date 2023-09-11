import { EmailTemplate } from "../../../components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { config } from 'dotenv';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
  emailName: string,
  emailSubject: string,
  emailText: string
) {
  try {
    const data = await resend.emails.send({
      from: emailName,
      to: ["omarnlujan@gmail.com"],
      subject: emailSubject,
      react: EmailTemplate({ emailText: emailText }),
      text:""
    });

    return NextResponse.json({ message: "Email Send" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
