import Home from "./home/home";
import Link from "next/link";
export default function App() {
  return (
    <main>
      <Home />

      <div>
        <button>
          <Link href="/home">Home</Link>
        </button>
      </div>
    </main>
  );
}
