export interface Agency {
    id?:string
    name: string
    contact: string
    website: string
}
export interface Contract {
    id?: number;
    agencyId?: number;
    startDate: string
    endDate: string
}
export interface Timesheet {
    id?:number
    psrContractId: string
    startDate: string
    endDate: string
    units: number
    psrId: string
    status: string
}