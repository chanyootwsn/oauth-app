import Link from "next/link";
export default function Home() {
  return (
    <main className="p-6">
      <nav className="flex flex-col gap-6 text-lg">
        <Link href="/contact">Go Contact Page</Link>
        <Link href="/oauth/authorize-callback">Go Authorize-callback Page</Link>
        <Link href="/profile">Go Profile Page</Link>
      </nav>
    </main>
  );
}
