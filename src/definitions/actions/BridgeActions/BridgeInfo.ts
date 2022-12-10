import {AmiActionPrototype, AmiResponse} from "../../generic.types";

type Request = {
    BridgeUniqueid: string
}

type Response = AmiResponse

type Event = never

export type BridgeInfo = AmiActionPrototype<Request, Response, Event>;
