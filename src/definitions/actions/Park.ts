import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Channel: string
    TimeoutChannel: string
    AnnounceChannel: string
    Timeout: string
    Parkinglot: string
}

type Response = AmiResponse

type Event = never

export type Park = AmiActionPrototype<Request, Response, Event>;
