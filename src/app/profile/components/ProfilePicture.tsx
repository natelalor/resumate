"use client";

import React from 'react';

export default function ProfilePicture() {
  return (
    <div className="">
    {/* profile picture & name container */}
        <div className="w-56 m-3">
            <img src="./images/profile_picture_placeholder.png"/> 
        </div>
        <div className="flex flex-col items-center font-bold">
            {/* name container */}
            <p>John Appleseed</p>
        </div>
    </div>
  );
}
