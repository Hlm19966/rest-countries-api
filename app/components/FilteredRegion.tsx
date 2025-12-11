"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/solid";



const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];


export default function FilteredRegion() {

    const[isOpen, setIsOpen] = useState(false);
    const router = useRouter();


    const handelFilter = (region: string) => 
    {
        setIsOpen(false);
        router.push(`?region=${region}`);
    }

    return (
        <div className="relative w-48 shrink-0">
        <button
         onClick={()=> setIsOpen(!isOpen)}
         className="flex items-center gap-5 rounded-md shadow-sm p-5 hover:shadow-md"
         aria-expanded={isOpen}
         aria-controls="region-menu"
         >
            <span className="region-span">Filter by Region</span>
            <span><ChevronDownIcon className="w-4 h-4" /></span>
        </button>
        {isOpen && (
            <ul
             id="region-menu"
             className="min-w-full absolute left-0 rounded-md shadow-md px-6 py-3 bg-white z-1 region-list"
             >
                {regions.map((region) => (
                    <li key={region}
                     onClick={() => handelFilter(region)}
                     className="py-1 cursor-pointer">
                        {region}
                    </li>
                ))}
            </ul>
        )}
        </div>
    )
}  