import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = "off.route.adventure.11@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { name, email, phone, subject, message } = data;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailHtml = `
      <h1>New Contact Message</h1>
      <h2>From: ${name}</h2>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone || "Not provided"}</li>
        <li><strong>Subject:</strong> ${subject}</li>
      </ul>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <p><em>Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</em></p>
    `;

    // Only send email if Resend API key is configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      await resend.emails.send({
        from: "Off Route Adventure <onboarding@resend.dev>",
        to: [TO_EMAIL],
        subject: `Contact Form: ${subject}`,
        html: emailHtml,
        replyTo: email,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
