"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import MainNav from '../components/MainNav';
import ChatBar from './components/ChatBar';
import ChatWindow from './components/ChatWindow';

export default function Raymond() {
  const pathname = usePathname();
  const activeTab = pathname.split('/')[1] || 'search';

  return (
    <main className="flex flex-col items-center">
      <div>
        <MainNav activeTab={activeTab as 'search' | 'raymond' | 'profile'} />
      </div>
      {/* body container */}
      <div className="flex flex-col items-center max-w-xl w-full shadow-orange rounded-2xl">
        {/* chat window */}
        <div className="flex bg-theme-orange-super-light">
          <ChatWindow />
        </div>
        {/* chat response bar */}
        <div className="flex bg-theme-orange">
          <ChatBar />
        </div>
      </div>
      
    </main>
  );
}
