import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Module: string
}

type Response = AmiResponse

type Event = never

export type Reload = AmiActionPrototype<Request, Response, Event>;
