"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaBox, FaTimesCircle, FaStar, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      <section id="Header" className="flex justify-between items-center h-24 w-full border border-gray-300 px-4">
      <div className="max-w-7xl w-full flex justify-between items-center mx-auto">
        
        {/* Logo */}
        <h1 className="font-bold text-2xl">Exclusive</h1>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="/#Home" className="hover:underline font-bold">Home</Link>
          <Link href="/#Contact" className="hover:underline font-bold">Contact</Link>
          <Link href="/#About" className="hover:underline font-bold">About</Link>
          <Link href="/Sign-Up" className="hover:underline font-bold">Sign Up</Link>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center gap-6">
          
          {/* Search Bar */}
          <div className="flex items-center bg-gray-200 py-2 px-4 rounded-md">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="bg-transparent outline-none"
            />
            <button>
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.607-10.607 7.5 7.5 0 0 0 10.607 10.607z" />
              </svg>
            </button>
          </div>

          {/* Favorite Icon */}
          <button>
            <Link href={"/Wishlist"}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21.438 5.432c-1.92-1.92-5.045-1.92-6.964 0l-.474.475-.474-.475c-1.92-1.92-5.045-1.92-6.964 0a4.923 4.923 0 0 0 0 6.964l7.438 7.438 7.438-7.438a4.923 4.923 0 0 0 0-6.964z" />
            </svg>
              <span className="absolute top-[75px] right-[394px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">4</span>
            </Link>
          </button>

          {/* Cart Icon with Badge */}
          <button className="relative">
            <Link href={"/Carts"}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3.5 3h2.3l1.9 8.8c.1.6.6 1 1.2 1h9.5c.6 0 1.1-.4 1.2-1l1.3-7.5H6.3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 16.6h11" />
                  <circle cx="10" cy="20" r="0.8" />
                  <circle cx="18" cy="20" r="0.8" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </Link>
          </button>

          {/* Account Icon with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm-7 7a7 7 0 1 1 14 0H5z" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
                </svg>
              </div>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 backdrop-blur-lg bg-black/40 shadow-md rounded-md w-56">
                <ul className="p-4">
                  <li className="flex items-center gap-3 p-2 cursor-pointer text-white font-extralight hover:bg-black/50">
                    <FaUser className="Poppins text-white font-extralight" /> Manage My Account
                  </li>
                  <li className="flex items-center gap-3 p-2 cursor-pointer text-white font-extralight hover:bg-black/50">
                    <FaBox className="Poppins text-white font-extralight" /> My Order
                  </li>
                  <li className="flex items-center gap-3 p-2 cursor-pointer text-white font-extralight hover:bg-black/50">
                    <FaTimesCircle className="Poppins text-white font-extralight" /> My Cancellations
                  </li>
                  <li className="flex items-center gap-3 p-2 cursor-pointer text-white font-extralight hover:bg-black/50">
                    <FaStar className="Poppins text-white font-extralight" /> My Reviews
                  </li>
                  <li className="flex items-center gap-3 p-2 cursor-pointer text-white font-extralight hover:bg-black/50">
                    <FaSignOutAlt className="Poppins text-white font-extralight" /> Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
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
