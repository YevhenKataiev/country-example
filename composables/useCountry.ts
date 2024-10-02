import type { ICountry } from './country.type';
export const useCountry = () => {
    const app = useRuntimeConfig();
    const apiUrl = app.public.api_url
    const getAll = async (): Promise<ICountry[]> => {
        const  data = await $fetch<ICountry[]>(`${apiUrl}/AvailableCountries`)
        return data
    }
    return {
        getAll
    }
}