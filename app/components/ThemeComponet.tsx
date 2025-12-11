"use client"
import { MoonIcon } from "@heroicons/react/24/solid";
import { useState } from "react";


export default function ThemeCompennet() {
    const[theme, setTheme] = useState("light");

    return(
        <div className="flex justify-between align-items gap-2">
            <MoonIcon className="h-5 w-5"/>
            <button 
             className="cursor-pointer"
             aria-label="Dark Mood"
             onClick={() => setTheme(theme === "light" ? "dark " : "light")}
            >
            Dark Mood
            </button>
        </div>
    )
}