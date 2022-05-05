import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Queue: string
    Interface: string
    Penalty: number
    Paused: boolean
    MemberName: string
    StateInterface?: string
}

type Response = AmiResponse

type Event = never

export type QueueAdd = AmiActionPrototype<Request, Response, Event>;
