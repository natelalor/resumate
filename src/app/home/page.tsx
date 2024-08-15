"use client";

import React, { useState, useEffect, useRef } from 'react';
import Nav from './components/nav';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'tracker' | 'walter' | 'profile'>('tracker');
  
  return (
    <main className="flex flex-col items-center">
        <div>
            <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    </main>
  );
}
