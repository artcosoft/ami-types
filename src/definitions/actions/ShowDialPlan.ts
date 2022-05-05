import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {
    Extension: string
    Context: string
}

type Response = AmiResponse

type Event = never

export type ShowDialPlan = AmiActionPrototype<Request, Response, Event>;
