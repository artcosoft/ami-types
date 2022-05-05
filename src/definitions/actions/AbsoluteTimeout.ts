import {AmiActionPrototype} from "../generic.types";

type Request = {
    Channel: string
    Timeout: string
}

type Response = {}

type Event = never

export type AbsoluteTimeout = AmiActionPrototype<Request, Response, Event>;
