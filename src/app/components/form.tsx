// Form.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormProps {
  type: 'login' | 'signup';
}

export default function Form({ type }: FormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, firstName: '', lastName: '', phoneNumber: '' }), // Modify as needed for signup
      });

      const result = await response.json();

      if (result.success) {
        router.push('/search');
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 py-10 px-5">
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="name@email.com"
        className="focus:outline-none rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="•••••••••••"
        className="focus:outline-none rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {type === 'signup' && (
        <>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="•••••••••••"
            className="focus:outline-none rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </>
      )}

      <input
        className={`w-auto px-4 py-2 rounded-lg shadow-lg bg-theme-orange hover:bg-theme-orange-light text-white ${isSubmitting ? 'cursor-wait' : ''}`}
        type="submit"
        value={isSubmitting ? 'Processing...' : type === 'login' ? 'Login' : 'Sign Up'}
        disabled={isSubmitting}
      />
    </form>
  );
}
