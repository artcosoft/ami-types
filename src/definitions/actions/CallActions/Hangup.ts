import {AmiActionPrototype, AmiResponse} from "../../generic.types";

type Request = {
    Channel: string
    Cause: string
}

type Response = AmiResponse

type Event = never

export type Hangup = AmiActionPrototype<Request, Response, Event>;
