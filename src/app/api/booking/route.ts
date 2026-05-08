import { NextRequest, NextResponse } from "next/server";

const ADMIN_EMAIL = "off.route.adventure.11@gmail.com";

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

    // Admin notification email
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #166534, #15803d); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">🏔️ New Booking Request</h1>
        </div>
        <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #16a34a; padding-bottom: 8px;">Personal Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;"><strong>Full Name:</strong></td><td style="padding: 8px 0; color: #1f2937;">${fullName}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Age:</strong></td><td style="padding: 8px 0; color: #1f2937;">${age}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Gender:</strong></td><td style="padding: 8px 0; color: #1f2937;">${gender}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>ID Type:</strong></td><td style="padding: 8px 0; color: #1f2937;">${idType}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>ID Number:</strong></td><td style="padding: 8px 0; color: #1f2937;">${idNumber}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Phone:</strong></td><td style="padding: 8px 0; color: #1f2937;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td><td style="padding: 8px 0; color: #1f2937;">${email}</td></tr>
          </table>
          <h2 style="color: #1f2937; border-bottom: 2px solid #16a34a; padding-bottom: 8px; margin-top: 24px;">Trip Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;"><strong>Destination:</strong></td><td style="padding: 8px 0; color: #1f2937;">${destination}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>People:</strong></td><td style="padding: 8px 0; color: #1f2937;">${numberOfPeople}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Travel Mode:</strong></td><td style="padding: 8px 0; color: #1f2937;">${travelMode}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Special:</strong></td><td style="padding: 8px 0; color: #1f2937;">${specialConditions.length > 0 ? specialConditions.join(", ") : "None"}</td></tr>
          </table>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 24px;">Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
        </div>
      </div>
    `;

    // User confirmation email
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #166534, #15803d); padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">🏔️ Off Route Adventure</h1>
          <p style="color: #bbf7d0; margin: 8px 0 0;">Your Booking Request is Confirmed!</p>
        </div>
        <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e7eb;">
          <p style="color: #1f2937; font-size: 16px;">Hi <strong>${fullName}</strong>,</p>
          <p style="color: #4b5563;">Thank you for choosing Off Route Adventure! We've received your booking request and our team will get in touch with you shortly to confirm the details.</p>
          
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin: 16px 0;">
            <h3 style="color: #166534; margin: 0 0 12px;">Your Booking Summary</h3>
            <p style="margin: 4px 0; color: #374151;"><strong>Destination:</strong> ${destination}</p>
            <p style="margin: 4px 0; color: #374151;"><strong>People:</strong> ${numberOfPeople}</p>
            <p style="margin: 4px 0; color: #374151;"><strong>Travel Mode:</strong> ${travelMode}</p>
          </div>

          <p style="color: #4b5563;">If you have any questions, feel free to reach out to us:</p>
          <ul style="color: #4b5563; padding-left: 20px;">
            <li>📞 Phone: +91 92704 28541</li>
            <li>📧 Email: off.route.adventure.11@gmail.com</li>
            <li>💬 WhatsApp: <a href="https://wa.me/919270428541" style="color: #16a34a;">Chat with us</a></li>
          </ul>

          <p style="color: #4b5563;">We look forward to an amazing adventure with you! 🌄</p>
          <p style="color: #1f2937;"><strong>Team Off Route Adventure</strong></p>
        </div>
        <div style="background: #f3f4f6; padding: 16px; text-align: center; border-radius: 0 0 12px 12px;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">Beyond the Map, Into the Wild</p>
        </div>
      </div>
    `;

    // Send emails if Resend API key is configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Send admin notification
      try {
        const adminResult = await resend.emails.send({
          from: "Off Route Adventure <bookings@offrouteadventure.in>",
          to: [ADMIN_EMAIL],
          subject: `New Booking Request: ${destination} - ${fullName}`,
          html: adminEmailHtml,
          replyTo: email,
        });
        console.log("Admin email sent:", adminResult);
      } catch (adminErr) {
        console.error("Failed to send admin email:", adminErr);
      }

      // Send user confirmation
      try {
        const userResult = await resend.emails.send({
          from: "Off Route Adventure <bookings@offrouteadventure.in>",
          to: [email],
          subject: `Booking Confirmed – Off Route Adventure`,
          html: userEmailHtml,
        });
        console.log("User email sent:", userResult);
      } catch (userErr) {
        console.error("Failed to send user email:", userErr);
      }
    } else {
      console.warn("RESEND_API_KEY not set — skipping email sends");
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

