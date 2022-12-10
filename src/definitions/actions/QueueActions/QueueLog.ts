import {AmiActionPrototype, AmiResponse} from "../../generic.types";

type Request = {
    Queue: string
    Event: string
    Uniqueid: string
    Interface: string
    Message: string
}

type Response = AmiResponse

type Event = never

export type QueueLog = AmiActionPrototype<Request, Response, Event>;
