import React from "react";
import BackButton from "@/components/back-button";
export default function PublicLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <BackButton />
      <main>{children}</main>
    </>
  );
}
