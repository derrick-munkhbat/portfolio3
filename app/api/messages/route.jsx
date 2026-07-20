import connectMondoDB from "@/libs/mongodb";
import Message from "@/models/message";
import { sendContactEmail } from "@/libs/sendEmail";

export async function POST(request) {
  try {
    const { first_name, last_name, phone, email, comment } =
      await request.json();

    await connectMondoDB();
    await Message.create({ first_name, last_name, phone, email, comment });

    try {
      await sendContactEmail({
        first_name,
        last_name,
        phone,
        email,
        comment,
      });
    } catch (emailError) {
      console.error("Failed to send contact email:", emailError);
    }

    return new Response(JSON.stringify({ message: "Message created" }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Failed to save message:", error);
    return new Response(JSON.stringify({ message: "Failed to send message" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
