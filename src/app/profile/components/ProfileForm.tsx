"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, auth } from '../../../../firebase/clientApp';

export default function ProfileForm() {
    // State to manage button state (styling, primarily)
    const [isSubmitting, setIsSubmitting] = useState(false); 

    // Initialize router hook
    const router = useRouter(); 

    // State to hold form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '', // Email is not needed for updates as it's part of authentication
        phoneNumber: '',
    });

    // State to manage loading state
    const [loading, setLoading] = useState(true); 

    // Fetch user data when component mounts
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Ensure the user is logged in
                if (auth.currentUser) {
                    const userDoc = doc(db, 'users', auth.currentUser.uid);
                    const docSnapshot = await getDoc(userDoc);

                    // Populate form data with existing user info
                    if (docSnapshot.exists()) {
                        setFormData(docSnapshot.data() as any);
                    }
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []); // Empty dependency array means this runs once when the component mounts

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true); // Set the button state to "submitting"

        try {
            if (auth.currentUser) {
                // Update Firestore with new user data
                const userDoc = doc(db, 'users', auth.currentUser.uid);
                await setDoc(userDoc, formData, { merge: true }); // Merge ensures we don't overwrite other fields

                // Redirect to another page after successful update
                // router.push('/tracker'); 
            }
        } catch (error) {
            console.error('Error updating user data:', error);
            alert('Failed to save profile: ' + error);
        } finally {
            setIsSubmitting(false); // Reset button state
        }
    };

    // Optionally handle loading state
    if (loading) return <p>Loading...</p>;

    return (
        <div className="">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 py-10 px-5">
                <label className="text-theme-orange" htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    placeholder="John" 
                    value={formData.firstName} 
                    onChange={handleInputChange} 
                    className="rounded focus:outline-none" 
                />

                <label className="text-theme-orange" htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    placeholder="Appleseed" 
                    value={formData.lastName} 
                    onChange={handleInputChange} 
                    className="rounded focus:outline-none" 
                />

                <label className="text-theme-orange" htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="name@email.com" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    className="rounded focus:outline-none" 
                    disabled // Email is read-only here
                />

                <label className="text-theme-orange" htmlFor="phoneNumber">Phone Number</label>
                <input 
                    type="tel" 
                    id="phoneNumber" 
                    name="phoneNumber" 
                    placeholder="111-1111" 
                    value={formData.phoneNumber} 
                    onChange={handleInputChange} 
                    className="rounded focus:outline-none" 
                />

                <input
                    className={`w-auto hover:cursor-pointer px-4 py-2 rounded-lg shadow-lg text-white ${isSubmitting ? 'bg-green-500' : 'bg-theme-orange'} ${isSubmitting ? 'hover:bg-green-400 hover:cursor-wait' : 'hover:bg-theme-orange-light'}`}
                    type="submit"
                    value={isSubmitting ? "Saving..." : "Save"}
                />
            </form>
        </div>
    );
}
