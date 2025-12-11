import  { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface SearchFormProps {
    search: string;
}



export default async function SearchForm( { search } : SearchFormProps) {

    return (
        <div className="relative flex justify-between gap-5 items-center w-full md:w-[480px]">
            <MagnifyingGlassIcon className="absolute w-5 h-5 magnify-icon"/>
            <form 
             method="GET"
             className="w-full"
             >
                
             <label htmlFor="search-for-country" className="sr-only"> search </label>
              <input 
               type="text"
               name="search"
               id="search-for-country"
               defaultValue={search}
               placeholder="Search for a country..."
               className="w-full rounded-md shadow-md py-5 px-8 border-none search-input pl-14"/>
            </form>
        </div>
        
    )
}  