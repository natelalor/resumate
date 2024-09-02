"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfileForm() {
    const [isSubmitting, setIsSubmitting] = useState(false); // State to manage button state
    const router = useRouter(); // Initialize the useRouter hook

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true); // Set the button state to "submitting"
        setTimeout(() => {
          setIsSubmitting(false); // Reset button state after 3 seconds
        //   router.push('/tracker'); 
        }, 3000); // Simulate a delay for the notification
      };

    return (
        <div className="">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 py-10 px-5">
                <label className="text-theme-orange" htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="John" />
                <label className="text-theme-orange" htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Appleseed" />
                <label className="text-theme-orange" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="name@email.com" />
                <label className="text-theme-orange" htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="111-1111" />

                <input
                    className={`w-auto hover:cursor-pointer px-4 py-2 rounded-lg shadow-lg text-white ${isSubmitting ? 'bg-green-500' : 'bg-theme-orange'} ${isSubmitting ? 'hover:bg-green-400 hover:cursor-wait' : 'hover:bg-theme-orange-light'}`}
                    type="submit"
                    value={isSubmitting ? "Changes Saved." : "Save"}
                />
            </form>
        </div>
    );
}
