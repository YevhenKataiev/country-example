import type { IShortCountry, ICountry } from '../types/country.type';
import type { IHolyday } from '~/types/holyday.type';
export const useCountry = () => {
    const app = useRuntimeConfig();
    const apiUrl = app.public.api_url
    const getAll = async (): Promise<IShortCountry[]> => {
        const  data = await $fetch<IShortCountry[]>(`${apiUrl}/AvailableCountries`)
        return data
    }
    const getCountryInfo = async(code: string): Promise<ICountry> => {
        const data = await $fetch<ICountry>(`${apiUrl}/CountryInfo/${code}`)
        return data
    }
    
    const getNextHolyday = async(code: string): Promise<IHolyday> => {
        const data = await $fetch<IHolyday[]>(`${apiUrl}/NextPublicHolidays/${code}`)
        return data[0]
    }
    return {
        getAll,
        getCountryInfo,
        getNextHolyday
    }
}