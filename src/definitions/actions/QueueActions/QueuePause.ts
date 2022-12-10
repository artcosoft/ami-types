import {AmiActionPrototype, AmiResponse} from "../../generic.types";

type Request = {
    Interface: string
    Paused: boolean
    Queue: string
    Reason: string
}

type Response = AmiResponse

type Event = never

export type QueuePause = AmiActionPrototype<Request, Response, Event>;
