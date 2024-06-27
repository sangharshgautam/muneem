export interface RouteResource {
    resource: string,
    parentId?: string | undefined
}

export interface RouteProp extends RouteResource {
    parent: string
}