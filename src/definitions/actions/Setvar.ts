import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Channel: string
    Variable: string
    Value: string
}

type Response = AmiResponse

type Event = never

export type Setvar = AmiActionPrototype<Request, Response, Event>;
