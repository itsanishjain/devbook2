import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const devTable = sqliteTable("dev", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name"),
  gender: text("gender"),
  cleanliness: text("cleanliness"),
  sounds_like: text("sounds_like"),
  timestamp: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
});

export const user = sqliteTable("user", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name"),
  email: text("email"),
  timestamp: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
});

export const feedback = sqliteTable("feedback", {
  text: text("text"),
  timestamp: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
});
