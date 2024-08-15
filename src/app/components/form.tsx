"use client";

import React from 'react';

interface FormProps {
  activeTab: 'login' | 'signup';
}

export default function Form({ activeTab }: FormProps) {
  return (
    <form className="flex flex-col space-y-4 py-10 px-5">
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" placeholder="me@me.com" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="•••••••••••" />
      
      {activeTab === 'signup' && (
        <>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="•••••••••••" />
        </>
      )}
      
      <input className="w-auto px-4 py-2 rounded-lg shadow-lg bg-theme-orange hover:bg-theme-orange-light text-white" type="submit" value="Let's Go" />
    </form>
  );
}
