"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import MainNav from '../components/MainNav';

export default function Profile() {
  const pathname = usePathname();
  const activeTab = pathname.split('/')[1] || 'tracker';

  return (
    <main className="flex flex-col items-center">
      <div>
        <MainNav activeTab={activeTab as 'tracker' | 'walter' | 'profile'} />
      </div>
      {/* body container */}
      <div className="shadow-orange rounded-2xl">
        <p>
            PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! PROFILE! 
        </p>
      </div>
    </main>
  );
}
