import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div>
        <Link href="/"></Link>
        <Link href="/about">About</Link>
        <Link href="/project">Project</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
