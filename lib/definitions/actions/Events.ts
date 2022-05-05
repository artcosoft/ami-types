import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    EventMask: string
}

type Response = AmiResponse

type Event = never

export type Events = AmiActionPrototype<Request, Response, Event>;
