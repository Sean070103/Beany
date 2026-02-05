import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "MAIL_TO",
  "MAIL_FROM",
];

const getMissingEnv = () =>
  requiredEnv.filter(
    (key) => !process.env[key] || process.env[key]?.trim() === "",
  );

const formatSubject = ({ subject, name }: { subject?: string; name: string }) =>
  subject?.trim() ? subject.trim() : `New message from ${name}`;

const createCoffeeHtml = ({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${subject}</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f6f1eb; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#3b2f2f;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f6f1eb; padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px; background:#fffaf3; border-radius:24px; overflow:hidden; box-shadow:0 18px 48px rgba(59, 47, 47, 0.15);">
            <tr>
              <td style="padding:28px 32px; background:linear-gradient(135deg,#6f4e37,#3c2f2f); color:#fef7ed;">
                <p style="margin:0 0 8px; font-size:14px; text-transform:uppercase; letter-spacing:2px;">Beany Roastery</p>
                <h1 style="margin:0; font-size:26px;">A fresh cup of feedback is brewing</h1>
                <p style="margin:12px 0 0; font-size:15px; color:#f8e7d0;">We just received a new note from the brew bar.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:20px;">
                  <tr>
                    <td style="padding:14px 18px; background:#f0e2d0; border-radius:16px;">
                      <p style="margin:0; font-size:13px; color:#7a5c46; text-transform:uppercase; letter-spacing:1.5px;">Sender</p>
                      <p style="margin:6px 0 0; font-size:16px; font-weight:600;">${name}</p>
                      <p style="margin:4px 0 0; font-size:14px; color:#6b4b3e;">${email}</p>
                    </td>
                  </tr>
                </table>
                <p style="margin:0 0 12px; font-size:14px; color:#7a5c46; text-transform:uppercase; letter-spacing:1.5px;">Message</p>
                <div style="background:#fff; border-radius:18px; padding:20px; border:1px solid #edd9c3; line-height:1.6; color:#3b2f2f; white-space:pre-line;">
                  ${message}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 32px; background:#f8efe4;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="font-size:13px; color:#7a5c46;">
                      Reply directly to this email to keep the conversation flowing.
                    </td>
                    <td align="right" style="font-size:12px; color:#a3846b;">
                      Brewed with care &hearts;
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <p style="margin:16px 0 0; font-size:12px; color:#b0927b;">Beany Avenue &bull; 123 Coffee Lane &bull; Taipei</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

const createTransporter = () => {
  const port = Number(process.env.SMTP_PORT || 0);
  const secure = port === 465;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export async function POST(request: Request) {
  const missing = getMissingEnv();
  if (missing.length > 0) {
    return Response.json(
      { error: `Missing SMTP configuration: ${missing.join(", ")}` },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch (error) {
    return Response.json(
      { error: "Invalid request payload." },
      { status: 400 },
    );
  }

  if (!payload?.name || !payload?.email || !payload?.message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const transporter = createTransporter();
  const subject = formatSubject({
    subject: payload.subject,
    name: payload.name,
  });
  const destination = [process.env.MAIL_TO, payload.email]
    .filter(Boolean)
    .join(", ");
  const replyTo = payload.email;

  const messageBody = `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`;
  const htmlBody = createCoffeeHtml({
    name: payload.name,
    email: payload.email,
    subject,
    message: payload.message,
  });

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: destination,
      replyTo,
      subject,
      text: messageBody,
      html: htmlBody,
    });

    return Response.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send email.";
    return Response.json({ error: message }, { status: 500 });
  }
}
