"use client";

import React from 'react';
import Form from '../components/form';
import Nav from '../components/nav';
import Title from '../components/title';

export default function SignupPage() {
  return (
    <main className="flex flex-col items-center">
      <Title />
      <div className="inline-flex flex-col items-center shadow-lg rounded-2xl">
        <Nav /> 
        <Form type="signup" /> {/* Signup form */}
      </div>
    </main>
  );
}
