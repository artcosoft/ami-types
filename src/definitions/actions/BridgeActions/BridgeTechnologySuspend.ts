import {AmiActionPrototype, AmiResponse} from "../../generic.types";

type Request = {
    BridgeTechnology: string
}

type Response = AmiResponse

type Event = never

export type BridgeTechnologySuspend = AmiActionPrototype<Request, Response, Event>;
