import { BsPersonWorkspace } from "react-icons/bs";

export default function ContactIcon({ title, url, children }) {
  return (
    <li className="scale-50 lg:scale-100">
      <a
        title={title}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </li>
  );
}
