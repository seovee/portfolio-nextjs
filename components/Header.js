import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row">
      <div>
        <a>Home</a>
      </div>
      <nav>
        <ul className="text-pink-700">
          <li>
            <Link href="/"></Link>
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
    </header>
  );
}
