// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import Link from "next/link";

import Dashboard from "./components/dashboard";
import Teste from "./components/teste";

export default function Page() {
  return (
    <main>
      <Dashboard />

      <hr />
      <Teste />
    </main>
  );
}
