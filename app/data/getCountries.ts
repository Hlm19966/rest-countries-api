export async function getCountries() {

    
const res = await fetch(
  "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3,languages,currencies,tld,borders",  
  {
    cache: "no-store",
  });

    const data = await res.json();

    console.log("COUNTRIES DATA:", data);

    return data;
}






