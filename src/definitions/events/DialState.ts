import {GenericAmiEvent} from "../generic.types";
import {ChannelState, ChannelStateDescription, DialStatus} from "../channel.types";

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
    DestChannel: ChannelState
    DestChannelState: ChannelStateDescription
    DestChannelStateDesc: string
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
    DialStatus: DialStatus
    Forward?: string
}

export type DialState = GenericAmiEvent<"DialState", Payload>
