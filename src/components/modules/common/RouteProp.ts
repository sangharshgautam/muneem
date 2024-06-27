export interface RouteResource {
    resource: "agency" | "contract" | "timesheet",
    parentId?: string | undefined
}

export interface RouteProp extends RouteResource {
    parent: string
}