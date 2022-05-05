import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Channel: string
}

type Response = AmiResponse

type Event = never

export type CancelAtxfer = AmiActionPrototype<Request, Response, Event>;
