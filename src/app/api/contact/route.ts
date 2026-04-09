import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = "bhargavk056@gmail.com";

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
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; color: #1f2937;">
        <div style="background-color: #166534; padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Message Received</h1>
        </div>
        <div style="padding: 24px;">
          <h2 style="font-size: 18px; font-weight: 600; margin-top: 0; margin-bottom: 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 100px;">From:</td>
              <td style="padding: 8px 0; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #166534; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Phone:</td>
              <td style="padding: 8px 0;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Subject:</td>
              <td style="padding: 8px 0; font-weight: 500;">${subject}</td>
            </tr>
          </table>

          <h2 style="font-size: 18px; font-weight: 600; margin-top: 24px; margin-bottom: 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Message</h2>
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          
          <p style="font-size: 12px; color: #9ca3af; margin-top: 32px; text-align: center;">
            Sent on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
          </p>
        </div>
      </div>
    `;

    // Send emails if Resend API key is configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      const FROM_EMAIL = "Off Route Adventure <noreply@offrouteadventure.in>";

      // 1. Send Email to Admin
      const adminEmailPromise = resend.emails.send({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject: `New Message: ${subject}`,
        html: emailHtml,
        replyTo: email,
      });

      // 2. Send "Thank You" Email to Customer
      const customerEmailHtml = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; color: #1f2937;">
          <div style="background-color: #166534; padding: 32px; text-align: center;">
            <p style="color: #ffffff; text-transform: uppercase; letter-spacing: 2px; font-size: 12px; margin: 0 0 8px 0;">Off Route Adventure</p>
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">Thanks for reaching out!</h1>
          </div>
          <div style="padding: 32px; line-height: 1.7;">
            <p style="font-size: 16px; margin-top: 0;">Hi ${name},</p>
            <p>Thanks for contacting <strong>Off Route Adventure</strong>. We've got your message about "<strong>${subject}</strong>".</p>
            <p>Our team will check it and get back to you soon (usually within 24 hours).</p>
            <p>While you wait, feel free to check out our latest treks and trips on our website!</p>
            
            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-weight: 600; color: #166534;">Thanks,</p>
              <p style="margin: 4px 0 0 0; font-weight: 500;">The Off Route Adventure Team</p>
              <p style="margin: 12px 0 0 0; font-size: 14px; color: #6b7280;">
                <em>Beyond the Map, Into the Wild</em><br />
                <a href="https://www.offrouteadventure.in" style="color: #166534; text-decoration: none;">www.offrouteadventure.in</a>
              </p>
            </div>
          </div>
          <div style="background-color: #f9fafb; padding: 16px; text-align: center; font-size: 12px; color: #9ca3af;">
            &copy; ${new Date().getFullYear()} Off Route Adventure. All rights reserved.
          </div>
        </div>
      `;

      const customerEmailPromise = resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        subject: "We've received your message - Off Route Adventure",
        html: customerEmailHtml,
      });

      // Wait for both emails to be sent
      const results = await Promise.allSettled([adminEmailPromise, customerEmailPromise]);

      results.forEach((result, index) => {
        if (result.status === "rejected") {
          console.error(`Email ${index === 0 ? "Admin" : "Customer"} failed:`, result.reason);
        }
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
