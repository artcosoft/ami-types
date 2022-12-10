import {AmiActionPrototype, AmiResponse} from "../../generic.types";

type Request = {
    BridgeType?: string
}

type Response = AmiResponse

type Event = never

export type BridgeList = AmiActionPrototype<Request, Response, Event>;
