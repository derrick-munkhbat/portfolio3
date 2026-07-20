import nodemailer from "nodemailer";

export async function sendContactEmail({
  first_name,
  last_name,
  phone,
  email,
  comment,
}) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const contactEmail = process.env.CONTACT_EMAIL || gmailUser;

  if (!gmailUser || !gmailAppPassword) {
    throw new Error("Gmail credentials are not configured");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${gmailUser}>`,
    to: contactEmail,
    replyTo: email,
    subject: `New message from ${first_name} ${last_name}`,
    text: [
      `Name: ${first_name} ${last_name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Message:",
      comment,
    ].join("\n"),
    html: `
      <h2>New portfolio contact form submission</h2>
      <p><strong>Name:</strong> ${first_name} ${last_name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${comment.replace(/\n/g, "<br>")}</p>
    `,
  });
}
