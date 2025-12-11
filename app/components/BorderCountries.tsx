import Link from "next/link";
import { Country } from "../types/country";


 interface BorderProp {
        borders: Country[];
    }

export default function BorderCountries( { borders } : BorderProp) {

    return (
        <div className="lg:col-span-2 lg:flex gap-3"> 
            <h3 className="mb-3">Border Countries:</h3>
                <div className="grid grid-cols-3 gap-3 ">
                    {borders.length === 0 ? (
                        <p>No Border Countries</p>
                        ) : (
                        borders.map((border) => (
                            <Link href={`/${border.cca3}`} key={border.cca3}>
                                <button className="shadow px-4 py-1 rounded border-btn">
                                    {border.name.common}
                                </button>
                            </Link>
                        ))
                    )} 
                </div>
        </div>
    )
}