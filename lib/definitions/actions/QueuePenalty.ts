import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Interface: string
    Penalty: number
    Queue: string
}

type Response = AmiResponse

type Event = never

export type QueuePenalty = AmiActionPrototype<Request, Response, Event>;
