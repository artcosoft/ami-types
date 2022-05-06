import {GenericAmiEvent} from "../generic.types";
import {ChannelState, ChannelStateDescription} from "../channel.types";

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
    DialString: string
}

export type DialBegin = GenericAmiEvent<"DialBegin", Payload>
