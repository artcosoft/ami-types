import {AmiActionPrototype, AmiResponse, EmptyType} from "../generic.types";

type Request = EmptyType

type Response = AmiResponse

type Event = never

export type Logoff = AmiActionPrototype<Request, Response, Event>;
