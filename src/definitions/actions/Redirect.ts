import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Channel: string
    Exten: string
    Context: string
    Priority: string
    ExtraChannel?: string
    ExtraExten?: string
    ExtraContext?: string
    ExtraPriority?: string
}

type Response = AmiResponse

type Event = never

export type Redirect = AmiActionPrototype<Request, Response, Event>;
