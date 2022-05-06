import {AmiEventType} from "./all.events";

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


export type GenericAmiEvent<Event extends AmiEventType, Payload extends {}> = {
    ActionID?: string,
    Event: Event
} & Payload
