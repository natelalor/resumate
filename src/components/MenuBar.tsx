"use client";

import { func } from "prop-types";
import React, {useState} from "react";

const MenuBar = () => {
    const [tab, changeTab] = useState('Edison')


    function changeMenu() {
        // checking that on click is functional
        console.log(99);
    }

    return (
        <>
            {/* initial menu bar setup (was basically tryna grasp tailwind) */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 flex flex-row justify-center rounded-xl shadow-custom-heavy">
                <p onClick={changeMenu} className="p-4 rounded-xl">Browse</p>
                <p className="p-4 rounded-xl">Edison</p>
                <p className="p-4 rounded-xl">Profile</p>
            </div>
        </>

    )
};

export default MenuBar;
