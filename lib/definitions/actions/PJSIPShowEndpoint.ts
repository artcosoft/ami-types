import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Endpoint: string
}

type Response = AmiResponse

type Event = never

export type PJSIPShowEndpoint = AmiActionPrototype<Request, Response, Event>;
