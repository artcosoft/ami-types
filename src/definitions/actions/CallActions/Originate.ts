import {AmiActionPrototype, AmiResponse} from "../../generic.types";

type Request = {
    /* originator */
    Channel: string
    /* called string */
    Exten: string
    /* call context */
    Context: string
    /* */
    Priority: string
    Application?: string
    Data?: string
    Timeout?: string
    CallerID?: string
    Variable?: Array<string>
    Account?: string
    EarlyMedia?: string
    Async?: string
    Codecs?: string
    ChannelId?: string
    OtherChannelId?: string
}

type Response = AmiResponse

type Event = never

export type Originate = AmiActionPrototype<Request, Response, Event>;
