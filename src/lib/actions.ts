"use server";

import { user, feedback } from "../drizzle/schema";
import { db } from "./db";

export const addEmail = async (email: string) => {
  try {
    await db.insert(user).values({
      email: email,
    });
    console.log("succs");
    return "success";
  } catch (e) {
    console.log("Error,", e);
    return "error";
  }
};

export const addFeedback = async (text: string) => {
  try {
    await db.insert(feedback).values({
      text: text,
    });
    console.log("succs");
    return "success";
  } catch (e) {
    console.log("Error,", e);
    return "error";
  }
};
