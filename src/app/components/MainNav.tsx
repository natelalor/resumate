"use client";

import React from 'react';
import Link from 'next/link';

interface NavProps {
  activeTab: 'tracker' | 'walter' | 'profile';
}

export default function MainNav({ activeTab }: NavProps) {
  return (
    <div className="inline-flex justify-center items-center my-10 shadow-lg rounded-lg">
      <Link href="/tracker">
        <div
          className={`cursor-pointer px-4 py-2 rounded-lg tab-transition ${
            activeTab === 'tracker'
              ? 'text-white bg-theme-orange tab-active z-20 transform scale-110'
              : 'text-text-color z-10 hover:bg-theme-orange-super-light'
          }`}
        >
          <p>Tracker</p>
        </div>
      </Link>

      <Link href="/walter">
        <div
          className={`cursor-pointer px-4 py-2 rounded-lg tab-transition ${
            activeTab === 'walter'
              ? 'text-white bg-theme-orange tab-active z-20 transform scale-110'
              : 'text-text-color z-10 hover:bg-theme-orange-super-light'
          }`}
        >
          <p>Walter</p>
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
