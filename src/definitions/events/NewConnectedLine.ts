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
}

export type NewConnectedLine = GenericAmiEvent<"NewConnectedLine", Payload>
