import {AmiActionPrototype, AmiResponse, EmptyType} from "../../generic.types";

type Request = EmptyType

type Response = AmiResponse

type Event = {
    ObjectType: string
    ObjectName: string
    Transport: string
    Aor: string
    Auths: string
    OutboundAuths: string
    Contacts: string
    DeviceState: string
    ActiveChannels: string
}

export type PJSIPShowEndpoints = AmiActionPrototype<Request, Response, Event>;
