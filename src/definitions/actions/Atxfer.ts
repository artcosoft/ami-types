import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Channel: string
    Exten: string
    Context: string
}

type Response = AmiResponse

type Event = never

export type Atxfer = AmiActionPrototype<Request, Response, Event>;
