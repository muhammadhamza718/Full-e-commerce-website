import React from "react";
import Link from "next/link";
import { MdSend } from 'react-icons/md';
import Image from "next/image";


export default function Footer() {
    return (
      <footer className="Poppins bg-black font-light text-white pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Exclusive */}
            <div className="w-3/4">
              <h3 className="font-medium text-2xl mb-5">Exclusive</h3>
              <h3 className="text-lg font-normal mb-5">Subscribe</h3>
              <p className="mb-4 text-sm w-48">Get 10% off your first order</p>
              <div className="flex items-center border w-60 h-14 border-gray-300 p-2 rounded">
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="flex-1 p-0 bg-transparent border-none outline-none focus:ring-0"
                />
                <MdSend className="text-white text-xl"/>
              </div>
            </div>
            {/* Support */}
            <div className="flex justify-center">
              <div className="w-4/5">
              <h3 className="text-lg font-medium mb-6">Support</h3>
              <ul className="space-y-4">
                <li>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</li>
                <li>
                  <Link href="mailto:exclusive@gmail.com" className="hover:text-blue-600">
                    exclusive@gmail.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:+88015888889999" className="hover:text-blue-600">
                    +88015-88888-9999
                  </Link>
                </li>
              </ul>
              </div>
            </div>
            {/* Account */}
            <div className="flex justify-center">
              <div>
              <h3 className="text-lg font-medium mb-5">Account</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Login / Register
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Shop
                  </Link>
                </li>
              </ul>
              </div>
            </div>
            {/* Quick Link */}
            <div className="flex justify-center">
              <div>
              <h3 className="text-lg font-medium mb-4">Quick Link</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Terms Of Use
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Contact
                  </Link>
                </li>
              </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
              <h3 className="text-lg font-medium mb-5">Download App</h3>
              <ul className="space-y-4">
                <li className="text-xs text-gray-300">
                  <Link href="#" className="hover:text-blue-600">
                    Save $3 with App New User Only
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    <Image src="/download.png" alt="google-play" width={200} height={200} />
                  </Link>
                </li>
                <div>
                    <Image src="/icons.png" alt="google-play" width={200} height={200} />
                </div>
              </ul>
              </div>
            </div>
          </div>
        </div>
          {/* Footer Bottom */}
          <div className="h-px w-full bg-[#121212] mt-10"></div>
          <div className="mt-6 text-center text-[#393939]">
            <p className="Poppins text-base">&copy; Copyright Rimel 2022. All rights reserved.</p>
          </div>
      </footer>
    );
  }
  