"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function ChatBar() {

    return (
        <div className="">
            <form className="flex p-5">
                <input type="text" id="respond" name="respond" placeholder="Type Here..." className="mb-4 p-2 border border-gray-300 rounded" />
                <button type="submit" className="w-10 h-10 rounded-full">
                    <img src="./images/send-circle.png" alt="Submit" className="w-full h-full" />
                </button>
            </form>
        </div>
    );
}
