import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = "off.route.adventure.11@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { name, email, phone, subject, message, rating, feedback, type } = data;

    // Validate required fields based on type
    const isReview = type === "review" || subject === "New Review Submission";
    
    if (isReview) {
      if (!name || !email || !rating || !feedback) {
        return NextResponse.json(
          { error: "Missing required review fields" },
          { status: 400 }
        );
      }
    } else {
      if (!name || !email || !subject || !message) {
        return NextResponse.json(
          { error: "Missing required contact fields" },
          { status: 400 }
        );
      }
    }

    const isHighRating = rating && parseInt(rating.toString()) >= 4;
    const ratingValue = rating ? parseInt(rating.toString()) : 0;

    const emailHtml = isReview ? `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; color: #1f2937;">
        <div style="background-color: ${isHighRating ? "#166534" : "#92400e"}; padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">NEW TRAVELER REVIEW</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0 0; font-size: 14px;">Someone shared their experience!</p>
        </div>
        <div style="padding: 24px;">
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="font-size: 48px; margin-bottom: 8px;">
              ${"★".repeat(ratingValue)}${"☆".repeat(5 - ratingValue)}
            </div>
            <p style="font-size: 18px; font-weight: 700; color: #111827; margin: 0;">${ratingValue} / 5 Rating</p>
          </div>

          <h2 style="font-size: 18px; font-weight: 600; margin-top: 0; margin-bottom: 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Traveler Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 100px;">Name:</td>
              <td style="padding: 8px 0; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #166534; text-decoration: none;">${email}</a></td>
            </tr>
          </table>

          <h2 style="font-size: 18px; font-weight: 600; margin-top: 24px; margin-bottom: 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Field Report / Feedback</h2>
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; line-height: 1.6; white-space: pre-wrap; font-style: italic; border-left: 4px solid ${isHighRating ? "#166534" : "#92400e"}">"${feedback}"</div>
          
          <p style="font-size: 12px; color: #9ca3af; margin-top: 32px; text-align: center;">
            Sent on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
          </p>
        </div>
      </div>
    ` : `
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
        subject: isReview ? `New Review: ${ratingValue} Stars from ${name}` : `New Message: ${subject}`,
        html: emailHtml,
        replyTo: email,
      });

      // 2. Send "Thank You" Email to Customer
      const customerEmailHtml = isReview ? `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; color: #1f2937;">
          <div style="background-color: #166534; padding: 32px; text-align: center;">
            <p style="color: #ffffff; text-transform: uppercase; letter-spacing: 2px; font-size: 12px; margin: 0 0 8px 0;">Off Route Adventure</p>
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">Thanks for the review!</h1>
          </div>
          <div style="padding: 32px; line-height: 1.7;">
            <p style="font-size: 16px; margin-top: 0;">Hi ${name},</p>
            <p>Thanks for sharing your experience with <strong>Off Route Adventure</strong>. We've received your ${ratingValue}-star rating.</p>
            <p>Feedback like yours helps us grow and keep the adventure alive! We've noted your field report.</p>
            
            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-weight: 600; color: #166534;">Thanks,</p>
              <p style="margin: 4px 0 0 0; font-weight: 500;">The Off Route Adventure Team</p>
            </div>
          </div>
        </div>
      ` : `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; color: #1f2937;">
          <div style="background-color: #166534; padding: 32px; text-align: center;">
            <p style="color: #ffffff; text-transform: uppercase; letter-spacing: 2px; font-size: 12px; margin: 0 0 8px 0;">Off Route Adventure</p>
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">Thanks for reaching out!</h1>
          </div>
          <div style="padding: 32px; line-height: 1.7;">
            <p style="font-size: 16px; margin-top: 0;">Hi ${name},</p>
            <p>Thanks for contacting <strong>Off Route Adventure</strong>. We've got your message about "<strong>${subject}</strong>".</p>
            <p>Our team will check it and get back to you soon (usually within 24 hours).</p>
            
            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-weight: 600; color: #166534;">Thanks,</p>
              <p style="margin: 4px 0 0 0; font-weight: 500;">The Off Route Adventure Team</p>
            </div>
          </div>
        </div>
      `;

      const customerEmailPromise = resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        subject: isReview ? "Thanks for your field report! - Off Route Adventure" : "We've received your message - Off Route Adventure",
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
