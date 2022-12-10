import {AmiActionPrototype, AmiResponse} from "../../generic.types";

type Request = {
    Queue: string
    Members: 'yes' | 'no'
    Rules: 'yes' | 'no'
    Parameters: 'yes' | 'no'
}

type Response = AmiResponse

type Event = never

export type QueueReload = AmiActionPrototype<Request, Response, Event>;
