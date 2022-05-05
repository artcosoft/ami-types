import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Queue: string
    Caller: string
    Priority: number
}

type Response = AmiResponse

type Event = never

export type QueueChangePriorityCaller = AmiActionPrototype<Request, Response, Event>;
