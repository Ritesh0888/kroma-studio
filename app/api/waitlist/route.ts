import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, feature } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    const notifyEmail = process.env.NOTIFICATION_EMAIL;
    if (!notifyEmail) {
      return Response.json({ error: "Server misconfigured" }, { status: 500 });
    }

    await resend.emails.send({
      from: "KromaStudio Waitlist <onboarding@resend.dev>",
      to: notifyEmail,
      subject: `New waitlist signup — ${feature ?? "Animation"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; background: #0d0d1a; color: #fff; border-radius: 12px;">
          <h2 style="margin: 0 0 8px; font-size: 18px; color: #a855f7;">New Early Access Signup</h2>
          <p style="margin: 0 0 16px; color: #888; font-size: 14px;">Someone just joined the KromaStudio waitlist.</p>
          <div style="background: #111; border: 1px solid #2a2a2a; border-radius: 8px; padding: 16px;">
            <p style="margin: 0 0 6px; font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.1em;">Email</p>
            <p style="margin: 0; font-size: 16px; font-weight: 600; color: #fff;">${email}</p>
            ${feature ? `
            <p style="margin: 16px 0 6px; font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.1em;">Feature</p>
            <p style="margin: 0; font-size: 14px; color: #a855f7;">${feature}</p>
            ` : ""}
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed to send" }, { status: 500 });
  }
}
