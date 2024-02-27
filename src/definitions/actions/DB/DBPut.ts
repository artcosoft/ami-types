import {AmiActionPrototype, AmiResponse} from "../../generic.types";

type Request = {
    Family: string
    Key: string
    Val: string
}

type Response = AmiResponse

type Event = never

export type DBPut = AmiActionPrototype<Request, Response, Event>;
