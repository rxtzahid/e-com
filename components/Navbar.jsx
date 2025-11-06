"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isSeller, setIsSeller] = useState(false); // future use

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-red-600">
        Quick<span className="text-black">Cart</span>
      </Link>

      {/* Links */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        <Link
          href="/"
          className="border-b-2 border-transparent hover:border-red-700 transition-all duration-300"
        >
          Home
        </Link>
        <Link
          href="/all-products"
          className="border-b-2 border-transparent hover:border-red-700 transition-all duration-300"
        >
          Shop
        </Link>
        <Link
          href="/about"
          className="border-b-2 border-transparent hover:border-red-700 transition-all duration-300"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="border-b-2 border-transparent hover:border-red-700 transition-all duration-300"
        >
          Contact
        </Link>

        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-4">
        <button aria-label="Search">🔍</button>
        <button aria-label="Cart" onClick={() => router.push("/cart")}>
          🛒
        </button>
        <button aria-label="Account" onClick={() => router.push("/account")}>
          👤
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
