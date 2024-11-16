"use client";
import React, { useState } from "react";
import { addEmail } from "@/lib/actions";
import toast from "react-hot-toast";
import ThreeDbutton from "./ThreeDbutton";

export function EmailJoin() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      toast.error("please enter your email");
      return;
    }
    console.log("CLICKED");
    setLoading(true);
    await addEmail(email);
    setLoading(false);
    toast.success("joined successfully");
  };

  return (
    <div className="w-full rounded-md flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto">
        <p className="max-w-lg mx-auto my-2 text-md text-center relative z-10">
          Excited about this feature? Enter your email below to be the first to
          know when it goes live!
        </p>
        <input
          type="email"
          required
          placeholder="hi@example.com"
          className="p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {/* <button
        className="my-4 btn btn-wide btn-secondary"
        onClick={async () => {
          if (!email) {
            toast.error("please enter your email");
            return;
          }
          console.log("CLICKED");
          setLoading(true);
          await addEmail(email);
          setLoading(false);
          toast.success("joined successfully");
        }}
      >
        {loading ? "loading...." : "Join"}
      </button> */}
      <ThreeDbutton text="Join" onClick={handleSubmit} isLoading={loading} />
    </div>
  );
}
