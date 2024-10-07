import Image from "next/image";
import Link from "next/link";
import DesktopLogo from "/public/mainimages/logo.png";
import { UserNav } from "./UserNav";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-gray-100">
      <div className="container mx-auto px-5 lg:px-10 py-1 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-5">
          <Image
            src={DesktopLogo}
            alt="Desktop Logo"
            className="w-32 hidden lg:block"
          />
        </Link>

        {/* Navigation Links for Desktop */}
        <div className="hidden lg:flex flex-1 items-center justify-center lg:justify-end">
          <div className="container mx-auto px-6 flex items-center justify-between overflow-x-auto whitespace-nowrap max-w-2xl relative">
            <Link href="/pages/jobs/view" className="text-black px-2 lg:px-4 py-2 hover:text-yellow-500 transition">
              Jobs
            </Link>
            <Link href="/pages/projects" className="text-black px-2 lg:px-4 py-2 hover:text-yellow-500 transition">
              Projects
            </Link>
            <Link href="/pages/blogs" className="text-black px-2 lg:px-4 py-2 hover:text-yellow-500 transition">
              Blogs
            </Link>
            <Link href="/pages/aboutus" className="text-black px-2 lg:px-4 py-2 hover:text-yellow-500 transition">
              About Us
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-5">
          <UserNav />
        </div>
      </div>

      {/* Mobile Nav with horizontal layout */}
      <div className="flex lg:hidden items-center justify-between container mx-auto px-5 py-1">
        <div className="flex flex-1 items-center justify-center space-x-4">
          <Link href="/pages/jobs/view" className="text-black text-sm px-2 py-1 hover:text-yellow-500 transition">
            Jobs
          </Link>
          <Link href="/pages/projects" className="text-black text-sm px-2 py-1 hover:text-yellow-500 transition">
            Projects
          </Link>
          <Link href="/pages/blogs" className="text-black text-sm px-2 py-1 hover:text-yellow-500 transition">
            Blogs
          </Link>
          <Link href="/pages/aboutus" className="text-black text-sm px-2 py-1 hover:text-yellow-500 transition">
            About
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <UserNav />
        </div>
      </div>
    </nav>
  );
}
