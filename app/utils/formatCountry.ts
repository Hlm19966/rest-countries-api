import { Country } from "../types/country"


export function getNativeName(country : Country) {

    return country.name.nativeName
     ? 
     Object.values(country.name.nativeName)[0].common
    :country.name.common;
}


export function getCurrencies(country : Country) {

    return country.currencies 
    ? Object.values(country.currencies).map((c : any) => c.name).join(", ")
    : "N/A"
}

export function getLanguages(country : Country) {

    return country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A"
}
