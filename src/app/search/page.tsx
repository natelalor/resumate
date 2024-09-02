"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import MainNav from '../components/MainNav';

export default function Search() {
  const pathname = usePathname();
  const activeTab = pathname.split('/')[1] || 'search';
    
  const now = new Date();
  const hours = now.getHours();
  let daypart: string;
  
  if (hours > 4 && hours < 12) {
    daypart = "Morning";
  } else if (hours > 11 && hours < 6) {
    daypart = "Afternoon";
  } else {
     daypart = "Evening";
  }  

  return (
    <main className='flex flex-col'>
      <div className='flex flex-col items-center'>
        <MainNav activeTab={activeTab as 'search' | 'walter' | 'profile'} />
      </div>
      <div className='w-full'>
        <h2 className='flex-1 text-midnight-purple font-extrabold text-3xl py-6'>
          Good {daypart}
        </h2>
        <h3 className='flex-1 text-m mb-6 py-1 px-3 text-white bg-midnight-purple w-fit rounded-lg shadow-custom-heavy'>
          Recommended Jobs
        </h3>
        <div className='flex mx-auto justify-center w-full gap-4 overflow-x-scroll'>
          <div className='flex-1 bg-white p-5 rounded-xl'>
            <p className='text-center'>
              JOB 1
            </p>
          </div>
          <div className='flex-1 bg-white p-5 rounded-xl'>
            <p className='text-center'>
              JOB 2
            </p>
          </div>
          <div className='flex-1 bg-white p-5 rounded-xl'>
            <p className='text-center'>
              JOB 3
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
