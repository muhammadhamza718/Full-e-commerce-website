"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
  ];

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setMenuOpen(false);
  };

  useEffect(() => {
    setIsMounted(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Top Header */}
      <section id="Top-Header" className="flex flex-col md:flex-row justify-center items-center h-12 bg-black px-4 py-2 md:py-0">
        <div className="flex flex-col md:flex-row w-full max-w-7xl justify-end gap-2 md:gap-80 items-center mx-auto">
          {/* Notification Banner */}
          <div className="flex items-center space-x-2 text-white text-xs md:text-sm">
            <p className="Poppins font-light">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </p>
            <p className="font-medium Poppins hover:underline hover:underline-offset-4">ShopNow</p>
          </div>

          {/* Language Dropdown */}
          <div ref={dropdownRef} className="relative mt-2 md:mt-0">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center px-2 py-1 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800"
            >
              {selectedLanguage}
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${menuOpen ? "rotate-180" : "rotate-0"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {menuOpen && (
              <div className="absolute right-0 z-10 mt-2 bg-gray-800 rounded-md shadow-lg w-36">
                <ul>
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      className="px-4 py-2 text-sm text-white font-light cursor-pointer hover:bg-gray-700"
                      onClick={() => handleLanguageChange(lang.name)}
                    >
                      {lang.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Header */}
      <section id="Header" className="flex justify-between items-center h-auto md:h-24 w-full border border-gray-300 px-4">
        <div className="max-w-7xl w-full flex justify-between items-center mx-auto py-4 md:py-0">
          {/* Logo */}
          <h1 className="font-bold text-2xl whitespace-nowrap">Exclusive</h1>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="/#Home" className="text-lg hover:underline hover:underline-offset-4 hover:font-bold">Home</Link>
            <Link href="/#Contact" className="text-lg hover:underline hover:underline-offset-4 hover:font-bold">Contact</Link>
            <Link href="/#About" className="text-lg hover:underline hover:underline-offset-4 hover:font-bold">About</Link>
            <Link href="/Sign-Up" className="text-lg hover:underline hover:underline-offset-4 hover:font-bold">Sign Up</Link>
          </div>

          {/* Search and Icons */}
          <div className="flex items-center gap-6">
            <div className="flex items-center bg-[#f5f5f5] py-2 px-4 rounded-md">
              <input
                id="search"
                type="text"
                placeholder="What are you looking for?"
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.607-10.607 7.5 7.5 0 0 0 10.607 10.607z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </section>

      {/* Mobile Menu */}
      {isOpen && (
        <section className="md:hidden w-full bg-black border-t">
          <div className="flex flex-col items-center py-4">
            <Link href="/" className="py-2 text-white">Home</Link>
            <Link href="/" className="py-2 text-white">Contact</Link>
            <Link href="/" className="py-2 text-white">About</Link>
            <Link href="/" className="py-2 text-white">Sign Up</Link>
          </div>
        </section>
      )}
    </>
  );
}
