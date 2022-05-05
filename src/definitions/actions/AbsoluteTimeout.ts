import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Channel: string
    Timeout: string
}

type Response = AmiResponse

type Event = never

export type AbsoluteTimeout = AmiActionPrototype<Request, Response, Event>;
