export interface Agency {
    id?:string
    name: string
    contact: string
    website: string
}
export interface Contract {
    id?: string
    agencyId?: number
    refId: string
    startDate: string
    endDate: string
}
export interface Timesheet {
    id?:string
    contractId?: number
    refId: string
    startDate: string
    endDate: string
    days: number
    status: string
}