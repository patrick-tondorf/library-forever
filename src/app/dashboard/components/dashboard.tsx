import Link from "next/link";
export default function dashboard() {
  return (
    <div>
      <div>
        <h1>Hello, Dashboard Page!</h1>
      </div>
      <div>
        <button>
          <Link href="/">Home</Link>
        </button>
      </div>
    </div>
  );
}
