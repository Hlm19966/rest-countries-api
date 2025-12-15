"use client"
import { MoonIcon as MoonOutline} from "@heroicons/react/24/outline";
import { MoonIcon as MoonSolid } from "@heroicons/react/24/solid";
import { useState,useEffect } from "react";
import { useTheme } from "next-themes";


export default function ThemeCompennet() {
    const { theme, setTheme } = useTheme();
    const[mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) return null;

   
    return(
        <div className="flex justify-between align-items gap-2">
            {theme === "light" ? (
                <MoonOutline className="h-5 w-5"/>
            ): (
                <MoonSolid className="h-5 w-5"/>
            )}
            <button 
             className="cursor-pointer"
             aria-label="toggle Theme"
             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
             Dark Mood 
            </button>
        </div>
    )
}

