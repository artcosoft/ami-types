import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Exten: string
    Context: string
}

type Response = AmiResponse

type Event = never

export type ExtensionState = AmiActionPrototype<Request, Response, Event>;
