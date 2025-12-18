import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <Link href="/community">go to community page</Link>
      <Link href="/meals">go to meals page</Link>
    </main>
  );
}
