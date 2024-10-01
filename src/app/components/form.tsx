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
      if (type === 'signup') {
        // Check that the confirm password matches the password
        if (password !== confirmPassword) {
          alert("Passwords do not match. Please try again.");
          return; // Prevent submission
        }
      }

      const requestBody = {
        action: type, // Include action here
        email,
        password,
        ...(type === 'signup' && { confirmPassword }), // Include confirmPassword only for signup
      };
      

      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      // Log the raw response
      const rawResponse = await response.text(); // Get raw response as text
      console.log('Raw Response:', rawResponse); // See what the server returns
      
      // Attempt to parse the response as JSON
      const result = JSON.parse(rawResponse);

      if (result.success) {
        // Redirect to search page on successful login/signup
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
