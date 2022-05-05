import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Queue: string
}

type Response = AmiResponse

type Event = never

export type QueueSummary = AmiActionPrototype<Request, Response, Event>;
