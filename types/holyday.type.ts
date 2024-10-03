export interface IHolyday {
    date: string,
    localName: string,
    name: string,
    countryCode: string,
    global: true,
    counties: string[],
    launchYear: number,
    types: HolydayType
}

export enum HolydayType {
    Public = 'Public',
    Bank = 'Bank',
    School = 'School',
    Authorities = 'Authorities',
    Optional = 'Optional',
    Observance = 'Observance'
}