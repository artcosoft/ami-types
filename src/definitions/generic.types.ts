export type EmptyType = Record<string, never>

type BaseResponse = {
    Message: string
    ActionID: string
}

export type AmiResponse = BaseResponse & {
    Response: "Success"
    EventList?: string
}

export type AmiError = BaseResponse & {
    Response: "Error"
}


export type AmiActionPrototype<Request, Response extends AmiResponse, Event> = {
    Request: Request,
    Response: Response,
    Event: Event
}



