"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname(); // Get the current path to highlight the active tab

  return (
    <div className="inline-flex justify-center items-center shadow-lg rounded-lg">
      <Link href="/login" passHref>
        <div
          className={`cursor-pointer px-4 py-2 rounded-lg tab-transition ${
            pathname === '/login'
              ? 'text-white bg-theme-orange tab-active z-20 transform scale-110'
              : 'text-text-color z-10 hover:bg-theme-orange-super-light'
          }`}
        >
          <p>Login</p>
        </div>
      </Link>
      <Link href="/signup" passHref>
        <div
          className={`cursor-pointer px-4 py-2 rounded-lg tab-transition ${
            pathname === '/signup'
              ? 'text-white bg-theme-orange tab-active z-20 transform scale-110'
              : 'text-text-color z-10 hover:bg-theme-orange-super-light'
          }`}
        >
          <p>Signup</p>
        </div>
      </Link>
    </div>
  );
}
