import {AmiActionPrototype, AmiResponse} from "../generic.types";

type Request = {

}

type Response = AmiResponse

type Event = never

export type TemplateType = AmiActionPrototype<Request, Response, Event>;
