
import { Country } from "@/app/types/country"
import Link from "next/link";
import { getCountries } from "@/app/data/getCountries";
import SearchForm from "./components/SearchForm"; 
import { SearchFormProps } from "@/app/types/country";
import FilteredRegion from "./components/FilteredRegion";




export default async function Home( {searchParams} : SearchFormProps) {

  
const countries: Country[] =  await getCountries();

const resolvedSearchParams = await searchParams;
const search = (resolvedSearchParams.search as string)?.toLowerCase() || "";
const region = (resolvedSearchParams.region as string)?.toLowerCase() || "";

const filtered = countries.filter(country => {

   const matchesSearch = country.name.common
   .toLowerCase()
   .includes(search);

   const matchesRegion = !region || country.region.toLowerCase() === region;

   return matchesRegion && matchesSearch
  
}); 



  return (
    <main className="w-full">
    <section className="w-full px-8 md:px-12 py-5 flex justify-between lg:items-center lg:flex-row flex-col items-start gap-10 lg:gap-0">
      <SearchForm search={search}/>
      <FilteredRegion />
     </section>

      <section className=" flex justify-center px-12 py-10">
       <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {filtered.map((c) => (
          
           <article 
           key={c.name.common}
           className="rounded-lg shadow">
           <Link href={`/${c.cca3}`}>

            <img
             src={c.flags.png}
             alt={`flag of ${c.name.common}`}
             className="w-90 h-40 object-cover rounded-tl-xl rounded-tr-xl"
            />

            <div className="info-sec">

              <h2>{c.name.common}</h2>
              <p><span>Population:</span> {c.population.toLocaleString()}</p>
              <p><span>Region:</span> {c.region}</p>
              <p><span>Capital:</span> {c.capital}</p>

            </div>
            </Link>
           </article>
        ))}
       </section>
      </section>
    </main>
  );
}


