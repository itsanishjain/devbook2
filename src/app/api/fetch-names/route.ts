import { devTable } from "@/drizzle/schema";
import { db } from "@/lib/db";
import { eq, and, count, inArray } from "drizzle-orm";

function selectRandomIds(ids: { id: number }[], limit: number): number[] {
  const shuffled = [...ids].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit).map((item) => item.id);
}

export async function POST(request: Request) {
  const { limit, gender, cleanliness } = await request.json();

  console.log(limit, gender, cleanliness);

  try {
    let whereClause: any;

    if (gender === "All" && cleanliness === "All") {
      whereClause = null;
    } else if (gender === "All") {
      whereClause = eq(devTable.cleanliness, cleanliness);
    } else if (cleanliness === "All") {
      whereClause = eq(devTable.gender, gender);
    } else {
      whereClause = and(
        eq(devTable.gender, gender),
        eq(devTable.cleanliness, cleanliness)
      );
    }

    // Get the total count of rows that match the criteria
    const totalCount = await db
      .select({ count: count() })
      .from(devTable)
      .where(whereClause)
      .execute();

    const matchingRowsCount = totalCount[0].count;

    if (matchingRowsCount === 0) {
      return Response.json({ message: "No matching results found", data: [] });
    }

    // Get all matching IDs
    const allIds = await db
      .select({ id: devTable.id })
      .from(devTable)
      .where(whereClause)
      .execute();

    // Randomly select 'limit' number of IDs
    const selectedIds = selectRandomIds(allIds, limit);

    // Fetch the selected rows
    const data = await db
      .select()
      .from(devTable)
      .where(inArray(devTable.id, selectedIds))
      .execute();

    console.log("data is", data);

    return Response.json({ message: "success", data });
  } catch (err: any) {
    console.error(err);
    return Response.json(
      { message: "Error processing request", error: err.message },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  return Response.json("GET API");
}
