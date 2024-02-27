import {AmiActionPrototype, AmiResponse} from "../../generic.types";

type Request = {
    Family: string
}

type Response = AmiResponse

type Event = never

export type DBDelTree = AmiActionPrototype<Request, Response, Event>;
