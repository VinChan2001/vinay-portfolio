import { z } from "zod";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // ensure Node (not edge) for nodemailer

const schema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Valid email required." }),
  message: z.string().min(3, { message: "Message must be at least 3 characters." })
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      const msg = parsed.error.issues.map(i => i.message).join(" ");
      return Response.json({ ok: false, error: msg || "Invalid input." }, { status: 400 });
    }

    const { name, email, message } = parsed.data;

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO = "chvcvinay@gmail.com",
      CONTACT_FROM = SMTP_USER
    } = process.env as Record<string, string | undefined>;

    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && CONTACT_TO && CONTACT_FROM) {
      try {
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: Number(SMTP_PORT),
          secure: Number(SMTP_PORT) === 465,
          auth: { user: SMTP_USER, pass: SMTP_PASS }
        });

        // Verify connection before sending
        await transporter.verify();

        await transporter.sendMail({
          from: CONTACT_FROM,
          to: CONTACT_TO,
          subject: `Portfolio Contact: ${name}`,
          replyTo: email,
          text: `From: ${name} (${email})\n\n${message}`,
          html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `
        });

        console.log("[CONTACT] Email sent successfully to:", CONTACT_TO);
        return Response.json({ ok: true });
        
      } catch (emailError) {
        console.error("[CONTACT] Email sending failed:", emailError);
        return Response.json({ 
          ok: false, 
          error: "Failed to send email. Please try again later." 
        }, { status: 500 });
      }
    } else {
      // Demo mode: no SMTP configured
      console.log("[CONTACT DEMO] Message received:", { 
        name, 
        email, 
        messageLength: message.length,
        timestamp: new Date().toISOString()
      });
      return Response.json({ ok: true, demo: true });
    }
  } catch (e) {
    console.error("[CONTACT] Unexpected error:", e);
    return Response.json({ 
      ok: false, 
      error: "An unexpected error occurred. Please try again." 
    }, { status: 500 });
  }
}
