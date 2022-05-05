import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Command: string
}

type Response = AmiResponse

type Event = never

export type Command = AmiActionPrototype<Request, Response, Event>;
