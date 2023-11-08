import Link from "next/link";

export default function Header() {
  return (
    <div className="relative">
      <nav className="top-[10vh] w-full flex items-center justify-center h-20 bg-pink-100">
        <ul className="flex gap-10 text-xl font-normal ">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#project">Project</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
