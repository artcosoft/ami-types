import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    BridgeUniqueid: string
}

type Response = AmiResponse

type Event = never

export type BridgeDestroy = AmiActionPrototype<Request, Response, Event>;
