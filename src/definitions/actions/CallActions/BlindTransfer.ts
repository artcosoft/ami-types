import {AmiActionPrototype, AmiResponse} from "../../generic.types";

type Request = {
    Channel: string
    Context: string
    Exten: string
}

type Response = AmiResponse

type Event = never

export type BlindTransfer = AmiActionPrototype<Request, Response, Event>;
