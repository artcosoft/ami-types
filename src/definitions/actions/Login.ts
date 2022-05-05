import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Username: string
    Secret: string
}

type Response = AmiResponse

type Event = never

export type Login = AmiActionPrototype<Request, Response, Event>;
