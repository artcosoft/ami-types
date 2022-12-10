import {AmiActionPrototype, AmiResponse} from "../../generic.types";

type Request = {
    Interface: string
    RingInUse: string
    Queue: string
}

type Response = AmiResponse

type Event = never

export type QueueMemberRingInUse = AmiActionPrototype<Request, Response, Event>;
