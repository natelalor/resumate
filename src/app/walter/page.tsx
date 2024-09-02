"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import MainNav from '../components/MainNav';

export default function Walter() {
  const pathname = usePathname();
  const activeTab = pathname.split('/')[1] || 'search';

  return (
    <main className="flex flex-col items-center">
      <div>
        <MainNav activeTab={activeTab as 'search' | 'walter' | 'profile'} />
      </div>
      {/* body container */}
      <div className="flex items-center max-w-xl w-full shadow-orange rounded-2xl">
        {/* chat text bar */}
        <div className="flex bg-theme-orange h-2">
          <form>
            <input></input>
          </form>
        </div>
      </div>
      
    </main>
  );
}
