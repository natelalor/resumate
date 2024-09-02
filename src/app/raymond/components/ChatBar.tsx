"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function ChatBar() {

    return (
        <div className="flex">
            <form className="flex p-5">
            <input type="file" id="file-upload" className="hidden" />
            <label htmlFor="file-upload" className="cursor-pointer w-10 h-10 rounded-full">
                <img src="./images/file_upload.png" alt="Upload File" className="w-full h-full" />
            </label>
                            <input type="text" id="respond" name="respond" placeholder="Type Here..." className="mb-4 p-2 w-80 border-gray-300 rounded" />
                <button type="submit" className="w-10 h-10 rounded-full">
                    <img src="./images/send-circle.png" alt="Submit" className="w-full h-full" />
                </button>
            </form>
        </div>
    );
}
