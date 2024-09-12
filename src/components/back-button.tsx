"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="hover:bg-stone-200 border h-9 rounded grid place-items-center px-3"
    >
      Back
    </button>
  );
}
