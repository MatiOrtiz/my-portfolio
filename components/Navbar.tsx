import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="w-full fixed top-4 z-50 flex justify-center">
      {/* Botones de redes en la esquina superior derecha */}
     <div className="absolute right-6 top-1">
        <div className="flex bg-blue-400/40 backdrop-blur-md border border-blue-400/10 px-6 py-2 rounded-full shadow-md space-x-4 items-center">
          <a
            href="https://www.linkedin.com/in/tu-usuario/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full transition hover:bg-blue-400/20 p-0"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full transition hover:bg-blue-400/20 p-0"
          >
            <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6" />
          </a>
        </div>
      </div>
      <ul className="flex bg-black/40 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full shadow-md space-x-4">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm px-4 py-2 rounded-full transition-colors hover:bg-white/10"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}