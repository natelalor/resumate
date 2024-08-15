"use client";

import React from 'react';

interface NavProps {
  activeTab: 'login' | 'signup';
  setActiveTab: React.Dispatch<React.SetStateAction<'login' | 'signup'>>;
}

export default function Nav({ activeTab, setActiveTab }: NavProps) {
  return (
    <div className="inline-flex justify-center items-center shadow-lg rounded-lg">
      <div
        onClick={() => setActiveTab('login')}
        className={`cursor-pointer px-4 py-2 rounded-lg tab-transition ${
          activeTab === 'login'
            ? 'text-white bg-theme-orange tab-active z-20 transform scale-110'
            : 'text-text-color z-10 hover:bg-theme-orange-super-light'
        }`}
      >
        <p>Login</p>
      </div>
      <div
        onClick={() => setActiveTab('signup')}
        className={`cursor-pointer px-4 py-2 rounded-lg tab-transition ${
          activeTab === 'signup'
            ? 'text-white bg-theme-orange tab-active z-20 transform scale-110'
            : 'text-text-color z-10 hover:bg-theme-orange-super-light'
        }`}
      >
        <p>Signup</p>
      </div>
    </div>
  );
}
