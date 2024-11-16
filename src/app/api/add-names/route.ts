import { devTable } from "@/drizzle/schema";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  const { data, id, name, gender, cleanliness, sounds_like } =
    await request.json();

  console.log(data);

  // return Response.json("successs");
  try {
    const insertedData = await db.insert(devTable).values(data);

    return Response.json({ message: "successs" });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "successs" }); // error
  }
}

export async function GET(request: Request) {
  return Response.json("GET API");
}
