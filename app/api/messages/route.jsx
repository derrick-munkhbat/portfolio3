import connectMondoDB from "@/libs/mongodb";
import Message from "@/models/message";

export async function POST(request) {
  // Parse the request body
  const { first_name, last_name, phone, email, comment } = await request.json();

  // Connect to the database
  await connectMondoDB();

  // Create a new message
  await Message.create({ first_name, last_name, phone, email, comment });

  // Return a JSON response
  return new Response(JSON.stringify({ message: "Message created" }), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
