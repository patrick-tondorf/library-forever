import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div>
        <h1>Home its Works</h1>
      </div>

      <button>
        <Link href="/dashboard">Dashboard</Link>
      </button>
    </main>
  );
}
