import {GenericAmiEvent} from "../../generic.types";
import {ChannelState, ChannelStateDescription} from "../../channel.types";

type Payload = {
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
    DestChannel: string
    DestChannelState: ChannelState
    DestChannelStateDesc: ChannelStateDescription
    DestCallerIDNum: string
    DestCallerIDName: string
    DestConnectedLineNum: string
    DestConnectedLineName: string
    DestLanguage: string
    DestAccountCode: string
    DestContext: string
    DestExten: string
    DestPriority: string
    DestUniqueid: string
    DestLinkedid: string
    Queue: string
    MemberName: string
    Interface: string
    RingTime: string
    HoldTime: string
}

export type AgentConnect = GenericAmiEvent<"AgentConnect", Payload>
