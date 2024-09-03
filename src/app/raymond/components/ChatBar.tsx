"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function ChatBar() {

    return (
        <div className="flex">
            <form className="flex p-5">
                {/* file upload */}
                <input type="file" id="file-upload" className="hidden" />
                <label htmlFor="file-upload" className="cursor-pointer w-10 h-10 rounded-full">
                    <img src="./images/file_upload.png" alt="Upload File" className="w-full h-full" />
                </label>
                {/* response text input */}
                <input type="text" id="respond" name="respond" placeholder="Type Here..." className="mb-4 ml-1 mr-1 p-2 w-96 rounded focus:outline-none" />
                {/* submit text */}
                <button type="submit" className="w-10 h-10 rounded-full">
                    <img src="./images/send-circle.png" alt="Submit" className="w-full h-full" />
                </button>
            </form>
        </div>
    );
}
