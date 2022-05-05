import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Channel1: string
    Channel2: string
    Tone: string
}

type Response = AmiResponse

type Event = never

export type Bridge = AmiActionPrototype<Request, Response, Event>;
