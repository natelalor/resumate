"use client";

import React, { useState, useEffect, useRef } from 'react';
import Form from './components/form';
import Nav from './components/nav';
import Title from './components/title';

export default function Login() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  
  return (
    <main className="flex flex-col items-center">

      <Title />
        {/* body container */}
        <div className="inline-flex flex-col items-center shadow-lg rounded-2xl">
          <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
          <Form activeTab={activeTab} />
        </div>
    </main>
  );
}
