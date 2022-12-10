import {AmiActionPrototype, AmiResponse} from "../../generic.types";

type Request = {
    BridgeUniqueid?: string
    Channel: string
}

type Response = AmiResponse

type Event = never

export type BridgeKick = AmiActionPrototype<Request, Response, Event>;
