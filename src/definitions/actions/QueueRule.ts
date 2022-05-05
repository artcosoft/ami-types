import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Rule: string
}

type Response = AmiResponse

type Event = never

export type QueueRule = AmiActionPrototype<Request, Response, Event>;
