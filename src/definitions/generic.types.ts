export type EmptyType = Record<string, never>

type BaseResponse = {
    Message: string
    ActionID: string
}

export type SuccessResponse = BaseResponse & {
    Response: "Success"
    EventList?: string
}

export type ErrorResponse = BaseResponse & {
    Response: "Error"
}

export type AmiResponse = SuccessResponse



export type AmiActionPrototype<Request, Response, Event> = {
    Request: Request,
    Response: Response,
    Event: Event
}



