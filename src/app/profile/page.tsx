"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import MainNav from '../components/MainNav';
import ProfilePicture from './components/ProfilePicture';
import ProfileForm from './components/ProfileForm';

export default function Profile() {
  const pathname = usePathname();
  const activeTab = pathname.split('/')[1] || 'tracker';

  return (
    <main className="flex flex-col">
      <div className="flex flex-col items-center">
        <MainNav activeTab={activeTab as 'tracker' | 'walter' | 'profile'} />
      </div>
      {/* body container */}
      <div className="flex items-center justify-center">
        <div className="flex items-center max-w-xl w-full shadow-orange rounded-2xl">
          <ProfilePicture />
          <ProfileForm />
        </div>
      </div>
    </main>
  );
}
