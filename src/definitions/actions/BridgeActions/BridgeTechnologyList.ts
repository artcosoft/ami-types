import {AmiActionPrototype, AmiResponse} from "../../generic.types";

type Request = {}

type Response = AmiResponse

type Event = never

export type BridgeTechnologyList = AmiActionPrototype<Request, Response, Event>;
