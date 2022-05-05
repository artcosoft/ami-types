import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Channel: string
    Variable: string
}

type Response = AmiResponse & {
    Variable: string
    Value: string
}

type Event = never

export type Getvar = AmiActionPrototype<Request, Response, Event>;
