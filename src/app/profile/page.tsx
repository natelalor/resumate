"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import MainNav from '../components/MainNav';

export default function Profile() {
  const pathname = usePathname();
  const activeTab = pathname.split('/')[1] || 'search';

  return (
    <main className="flex flex-col items-center">
      <div>
        <MainNav activeTab={activeTab as 'search' | 'walter' | 'profile'} />
      </div>
      <div>
        <p>
            PROFILE!
        </p>
      </div>
    </main>
  );
}
