"use client";

import React from 'react';
import Link from 'next/link';

interface NavProps {
  activeTab: 'search' | 'raymond' | 'profile';
}

export default function MainNav({ activeTab }: NavProps) {
  return (
    <div className="inline-flex mb-5 justify-center items-center shadow-lg rounded-lg">
      <Link href="/search">
        <div
          className={`cursor-pointer px-4 py-2 rounded-lg tab-transition ${
            activeTab === 'search'
              ? 'text-white bg-theme-orange tab-active z-20 transform scale-110'
              : 'text-text-color z-10 hover:bg-theme-orange-super-light'
          }`}
        >
          <p>Search</p>
        </div>
      </Link>

      <Link href="/raymond">
        <div
          className={`cursor-pointer px-4 py-2 rounded-lg tab-transition ${
            activeTab === 'raymond'
              ? 'text-white bg-theme-orange tab-active z-20 transform scale-110'
              : 'text-text-color z-10 hover:bg-theme-orange-super-light'
          }`}
        >
          <p>Raymond</p>
        </div>
      </Link>

      <Link href="/profile">
        <div
          className={`cursor-pointer px-4 py-2 rounded-lg tab-transition ${
            activeTab === 'profile'
              ? 'text-white bg-theme-orange tab-active z-20 transform scale-110'
              : 'text-text-color z-10 hover:bg-theme-orange-super-light'
          }`}
        >
          <p>Profile</p>
        </div>
      </Link>
    </div>
  );
}
