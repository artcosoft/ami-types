import {ChannelState, ChannelStateDescription} from "../../channel.types";

export type QueueCallerJoin = {
    Event: "QueueCallerJoin",
    Channel: string
    ChannelState: ChannelState
    ChannelStateDesc: ChannelStateDescription
    CallerIDNum: string
    CallerIDName: string
    ConnectedLineNum: string
    ConnectedLineName: string
    Language: string
    AccountCode: string
    Context: string
    Exten: string
    Priority: string
    Uniqueid: string
    Linkedid: string
    Queue: string
    Position: string
    OriginalPosition: string
    HoldTime: string
}
