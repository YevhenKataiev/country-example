import type { IHolyday } from '~/types/holyday.type';
export const useHolyday = () => {
    const app = useRuntimeConfig();
    const apiUrl = app.public.api_url
  
    
    const getNextHolyday = async(code: string): Promise<IHolyday> => {
        const data = await $fetch<IHolyday[]>(`${apiUrl}/NextPublicHolidays/${code}`)
        return data[0]
    }
    const getAllHolidays = async(code: string): Promise<IHolyday[]> => {
        const data = await $fetch<IHolyday[]>(`${apiUrl}/NextPublicHolidays/${code}`)
        return data
    }
    return {
        getNextHolyday,
        getAllHolidays
    }
}