import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "off.route.adventure.11@gmail.com";
const FROM_EMAIL = "Off Route Adventure <noreply@offrouteadventure.in>";

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Admin Setup Confirmed — Off Route Adventure</title>
  <style>
    body, p, h1, h2, h3, table, td, div, a {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    body {
      margin: 0;
      padding: 0;
      background-color: #f2f2f0;
      width: 100%;
    }
    a { text-decoration: none; }
    img { border: 0; display: block; }
  </style>
</head>
<body>

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f2f2f0; padding: 48px 16px;">
    <tr>
      <td align="center">

        <!-- Main Container -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px; background-color:#ffffff;">

          <!-- ═══════════════════════════════════ -->
          <!-- HERO: Dark forest header            -->
          <!-- ═══════════════════════════════════ -->
          <tr>
            <td style="background-color:#0a1a0e; padding: 48px 40px 40px;">

              <!-- Logo row -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:40px;">
                <tr>
                  <td style="width:32px; vertical-align:middle;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="
                          width: 32px;
                          height: 32px;
                          border: 1px solid rgba(255,255,255,0.3);
                          border-radius: 50%;
                          text-align: center;
                          vertical-align: middle;
                          line-height: 32px;
                        ">
                          <!-- Mountain / compass icon (SVG inline) -->
                          <img src="https://offrouteadventure.in/favicon.ico"
                            width="18" height="18"
                            alt="Off Route Adventure"
                            style="display:inline-block; vertical-align:middle;"
                            onerror="this.style.display='none'" />
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style="padding-left:10px; vertical-align:middle;">
                    <span style="
                      color: rgba(255,255,255,0.9);
                      font-size: 13px;
                      letter-spacing: 0.12em;
                      text-transform: uppercase;
                      font-weight: 400;
                    ">Off Route Adventure</span>
                  </td>
                </tr>
              </table>

              <!-- Headline -->
              <h1 style="
                color: #ffffff;
                font-size: 34px;
                line-height: 1.15;
                font-weight: 400;
                letter-spacing: -0.5px;
                margin: 0 0 12px 0;
                font-family: Georgia, 'Times New Roman', serif;
              ">Admin Setup<br>Confirmed.</h1>

              <!-- Tagline -->
              <p style="
                color: rgba(255,255,255,0.45);
                font-size: 14px;
                letter-spacing: 0.04em;
                margin: 0;
              ">Beyond the Map, Into the Wild</p>

            </td>
          </tr>

          <!-- ═══════════════════════════════════ -->
          <!-- GREEN ACCENT LINE                   -->
          <!-- ═══════════════════════════════════ -->
          <tr>
            <td style="
              height: 3px;
              background: linear-gradient(90deg, #166534 0%, #4ade80 60%, #ffffff 100%);
              font-size: 0;
              line-height: 0;
            ">&nbsp;</td>
          </tr>

          <!-- ═══════════════════════════════════ -->
          <!-- BODY CONTENT                        -->
          <!-- ═══════════════════════════════════ -->
          <tr>
            <td style="padding: 40px 40px 8px 40px;">

              <!-- Greeting -->
              <p style="
                font-size: 15px;
                color: #555555;
                line-height: 1.7;
                margin: 0 0 0 0;
              ">Hello Admin,</p>

              <p style="
                font-size: 15px;
                color: #555555;
                line-height: 1.7;
                margin: 16px 0 0 0;
              ">Your administration email configuration has been completed successfully. The connection to the <strong style="color:#0a1a0e; font-weight:600;">Off Route Adventure</strong> platform is now fully active and operational.</p>

              <!-- Thin divider -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 28px 0;">
                <tr>
                  <td style="width:40px; height:1px; background-color:#e2e8f0; font-size:0; line-height:0;">&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </table>

              <!-- Highlighted info box -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="
                border-left: 2px solid #166534;
                background-color: #f8fdf9;
                margin-bottom: 28px;
              ">
                <tr>
                  <td style="padding: 16px 20px;">
                    <p style="
                      font-size: 14px;
                      color: #166534;
                      line-height: 1.7;
                      margin: 0;
                    ">All incoming bookings, client queries, and field reports will now securely route to this inbox — giving you a single, streamlined view of every operation.</p>
                  </td>
                </tr>
              </table>

              <!-- Closing copy -->
              <p style="
                font-size: 15px;
                color: #555555;
                line-height: 1.7;
                margin: 0 0 6px 0;
              ">Monitor your expeditions, track clients, and stay ahead of the wild.</p>
              <p style="
                font-size: 15px;
                color: #0a1a0e;
                font-style: italic;
                line-height: 1.7;
                margin: 0 0 32px 0;
                font-family: Georgia, 'Times New Roman', serif;
              ">The wilderness awaits. We're ready when you are.</p>

            </td>
          </tr>

          <!-- ═══════════════════════════════════ -->
          <!-- CTA BUTTONS ROW                     -->
          <!-- ═══════════════════════════════════ -->
          <tr>
            <td style="padding: 0 40px 40px 40px;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <!-- View Website — solid outline -->
                  <td style="padding-right: 14px;">
                    <a href="https://offrouteadventure.in"
                      style="
                        display: inline-block;
                        border: 1px solid #0a1a0e;
                        color: #0a1a0e;
                        background-color: transparent;
                        padding: 12px 28px;
                        font-size: 12px;
                        letter-spacing: 0.1em;
                        text-transform: uppercase;
                        font-weight: 500;
                        text-decoration: none;
                      ">View Website</a>
                  </td>

                  <!-- WhatsApp — ghost green outline -->
                  <td>
                    <a href="https://wa.me/919270428541?text=I'm%20interested%20in%20booking%20a%20trek"
                      style="
                        display: inline-block;
                        border: 1px solid #25d366;
                        color: #128c3e;
                        background-color: transparent;
                        padding: 12px 24px;
                        font-size: 12px;
                        letter-spacing: 0.08em;
                        text-transform: uppercase;
                        font-weight: 500;
                        text-decoration: none;
                      ">&#128172; WhatsApp</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ═══════════════════════════════════ -->
          <!-- FOOTER                              -->
          <!-- ═══════════════════════════════════ -->
          <tr>
            <td style="
              border-top: 1px solid #f0f0f0;
              padding: 28px 40px;
            ">

              <!-- Footer links -->
              <p style="margin: 0 0 10px 0; font-size: 0;">
                <a href="https://offrouteadventure.in"
                  style="font-size:12px; color:#888888; text-decoration:none;">Website</a>
                <span style="font-size:12px; color:#cccccc; margin:0 10px;">·</span>
                <a href="https://www.instagram.com/off_route_adventure"
                  style="font-size:12px; color:#888888; text-decoration:none;">Instagram</a>
                <span style="font-size:12px; color:#cccccc; margin:0 10px;">·</span>
                <a href="https://wa.me/919270428541"
                  style="font-size:12px; color:#888888; text-decoration:none;">WhatsApp</a>
              </p>

              <!-- Copyright -->
              <p style="
                font-size: 11px;
                color: #bbbbbb;
                margin: 0 0 6px 0;
                letter-spacing: 0.04em;
              ">&copy; ${new Date().getFullYear()} Off Route Adventure. All rights reserved.</p>

              <!-- Auto-message note -->
              <p style="
                font-size: 11px;
                color: #cccccc;
                font-style: italic;
                margin: 0;
              ">This is an automated message. Please do not reply directly to this email.</p>

            </td>
          </tr>

        </table>
        <!-- /Main Container -->

      </td>
    </tr>
  </table>
  <!-- /Wrapper -->

</body>
</html>
`;

async function main() {
    try {
        console.log("Sending email to:", TO_EMAIL);
        const data = await resend.emails.send({
            from: FROM_EMAIL,
            to: [TO_EMAIL],
            subject: "Admin Setup Confirmed — Off Route Adventure",
            html: htmlContent,
        });
        console.log("Email sent successfully! Response:", data);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

main();