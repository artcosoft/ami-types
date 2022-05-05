import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Agent: string
    Soft?: boolean
}

type Response = AmiResponse

type Event = never

export type AgentLogoff = AmiActionPrototype<Request, Response, Event>;
