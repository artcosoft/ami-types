import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Endpoint?: string
    URI?: string
    channel?: string
    Variable: Array<string>
}

type Response = AmiResponse

type Event = never

export type PJSIPNotify = AmiActionPrototype<Request, Response, Event>;
