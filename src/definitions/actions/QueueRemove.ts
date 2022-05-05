import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Queue: string
    Interface: string
}

type Response = AmiResponse

type Event = never

export type QueueRemove = AmiActionPrototype<Request, Response, Event>;
