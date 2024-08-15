"use client";

import React from 'react';
import Link from 'next/link';


interface NavProps {
  activeTab: 'tracker' | 'walter' | 'profile';
  setActiveTab: React.Dispatch<React.SetStateAction<'tracker' | 'walter' | 'profile'>>;
}

export default function Nav({ activeTab, setActiveTab }: NavProps) {
  return (
    <div className="inline-flex justify-center items-center shadow-lg rounded-lg">
      <div onClick={() => setActiveTab('tracker')}
          className={`cursor-pointer px-4 py-2 rounded-lg tab-transition ${
          activeTab === 'tracker'
            ? 'text-white bg-theme-orange tab-active z-20 transform scale-110'
            : 'text-text-color z-10 hover:bg-theme-orange-super-light'
        }`}>
        <p>Tracker</p>
      </div>
      <div onClick={() => setActiveTab('walter')} 
          className={`cursor-pointer px-4 py-2 rounded-lg tab-transition ${
          activeTab === 'walter'
            ? 'text-white bg-theme-orange tab-active z-20 transform scale-110'
            : 'text-text-color z-10 hover:bg-theme-orange-super-light'
        }`}>
        <p>Walter</p>
      </div>
      <div onClick={() => setActiveTab('profile')} 
          className={`cursor-pointer px-4 py-2 rounded-lg tab-transition ${
          activeTab === 'profile'
            ? 'text-white bg-theme-orange tab-active z-20 transform scale-110'
            : 'text-text-color z-10 hover:bg-theme-orange-super-light'
        }`}>
        <p>Profile</p>
      </div>

      {/* <div className="inline-flex justify-center items-center shadow-lg rounded-lg">
        <Link href="/tracker">
          <a className="cursor-pointer px-4 py-2 rounded-lg tab-transition">Tracker</a>
        </Link>
        <Link href="/walter">
          <a className="cursor-pointer px-4 py-2 rounded-lg tab-transition">Walter</a>
        </Link>
        <Link href="/profile">
          <a className="cursor-pointer px-4 py-2 rounded-lg tab-transition">Profile</a>
        </Link>
      </div> */}
    </div> 
  );
}
