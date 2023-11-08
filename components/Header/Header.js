import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full">
      <nav className="flex items-center justify-center h-20 bg-pink-100">
        <ul className="flex gap-5 text-xl font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/project">Project</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
