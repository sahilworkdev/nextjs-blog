"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Posts", href: "/posts" },
  { name: "Create post", href: "/create-post" },
];

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="/logo.png"
          width="40"
          height="40"
          alt="Logo"
          className="w-[40px] h-[40px] rounded-md"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((navLink) => {
            return (
              <li key={navLink.href}>
                <Link
                  href={navLink.href}
                  className={` ${
                    pathname === navLink.href
                      ? "text-zinc-900"
                      : "text-zinc-400"
                  }`}
                >
                  {navLink.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
