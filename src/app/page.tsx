"use client";

import React, { useState } from 'react';

export default function Login() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');


  return (
    <main className="flex flex-col items-center">
        {/* title container */}
        <div className="text-8xl text-theme-orange p-20">
          <p>Resumate</p>
        </div>
        {/* body container */}
        <div className="inline-flex flex-col items-center shadow-lg rounded-2xl">
          {/* nav container */}
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

          
          {/* add an action here when you know where this data will be going: https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit */}
          <form className="flex flex-col space-y-4 py-10 px-5"> 
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" placeholder="me@me.com" ></input>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="•••••••••••"></input>
            <input className="w-auto px-4 py-2 rounded-lg shadow-lg bg-theme-orange hover:bg-theme-orange-light"type="submit" value="Let's Go"></input>
          </form>
        </div>
    </main>
  );
}
