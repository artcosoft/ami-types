import {AmiActionPrototype, AmiResponse} from "../../generic.types";

type Request = {
    Family: string
    Key: string
}

type Response = AmiResponse

type Event = never

export type DBDel = AmiActionPrototype<Request, Response, Event>;
