import { getCountries } from "@/app/data/getCountries"
import { Country, PageProps} from "@/app/types/country";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCurrencies,getLanguages, getNativeName } from "../utils/formatCountry";
import  { ArrowLeftIcon } from "@heroicons/react/24/solid";
import BorderCountries from "../components/BorderCountries";




export default async function pageSlug( { params }: PageProps ) {

    const {slug} = await params;
    const countries: Country[] = await getCountries();

    
    const country = countries.find((c) => c.cca3 === slug);

    if(!country) {
        console.error(`country not found for slug: ${slug}`);
        notFound();
    }

    const borders = Array.isArray(country.borders) ? country.borders : [];

    const borderCountries = borders.map((border) => 
    countries.find((c) => c.cca3 === border)).filter(Boolean) as Country[];

    return(
        <>
        <main className="py-10 px-8">
            <Link href={'/'}>
             <button 
            className="rounded-sm py-1 px-7 btn-back"
            aria-label="Back to home">
              <ArrowLeftIcon className="w-5 h-5"/>
            Back
             </button>
            </Link>
            
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
                <img 
                src={country.flags.png}
                alt={`The flag of ${country.name.common}`}
                className="flag-img w-full max-w-[260px] h-auto object-cover"/>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-11 self-center">

                    <div className="flex flex-col gap-3">
                       <h2 className="country-name">{country.name.common}</h2>
                       <p><span>Native Name: </span>{getNativeName(country)}</p>
                       <p><span>Population: </span>{country.population.toLocaleString()}</p>
                       <p><span>Region: </span>{country.region}</p>
                       <p><span>Capital: </span>{country.capital}</p> 
                    </div>

                    <div className="flex flex-col gap-3 self-end extra-info-s">
                         <p><span>Top Level Domain: </span>{country.tld}</p>
                         <p><span>Currencies: </span>{getCurrencies(country)}</p>
                         <p><span>Languages: </span>{getLanguages(country)}</p>
                    </div>
                       <BorderCountries  borders={borderCountries}/>                
                </div>  
            </section>
        </main>
        </>
    )
}   