import {AmiActionPrototype, AmiResponse, EmptyType} from "../generic.types";

type Request = EmptyType

type Response = AmiResponse

type Event = {
    Agent: string
    Name: string
    Status: string
}

export type Agents = AmiActionPrototype<Request, Response, Event>;
