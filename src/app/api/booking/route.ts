import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = "off.route.adventure.11@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const {
      fullName,
      age,
      gender,
      idType,
      idNumber,
      phone,
      email,
      destination,
      numberOfPeople,
      travelMode,
      specialConditions = [],
    } = data;

    // Validate required fields
    if (!fullName || !email || !phone || !destination) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailHtml = `
      <h1>New Booking Request</h1>
      <h2>Personal Information</h2>
      <ul>
        <li><strong>Full Name:</strong> ${fullName}</li>
        <li><strong>Age:</strong> ${age}</li>
        <li><strong>Gender:</strong> ${gender}</li>
        <li><strong>ID Type:</strong> ${idType}</li>
        <li><strong>ID Number:</strong> ${idNumber}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Email:</strong> ${email}</li>
      </ul>
      <h2>Trip Details</h2>
      <ul>
        <li><strong>Destination:</strong> ${destination}</li>
        <li><strong>Number of People:</strong> ${numberOfPeople}</li>
        <li><strong>Travel Mode:</strong> ${travelMode}</li>
        <li><strong>Special Conditions:</strong> ${specialConditions.length > 0 ? specialConditions.join(", ") : "None"}</li>
      </ul>
      <p><em>Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</em></p>
    `;

    // Only send email if Resend API key is configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      await resend.emails.send({
        from: "Off Route Adventure <onboarding@resend.dev>",
        to: [TO_EMAIL],
        subject: `New Booking Request: ${destination} - ${fullName}`,
        html: emailHtml,
        replyTo: email,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Failed to process booking" },
      { status: 500 }
    );
  }
}
