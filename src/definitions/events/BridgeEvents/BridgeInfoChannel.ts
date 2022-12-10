import {ChannelState, ChannelStateDescription} from "../../channel.types";
import {GenericAmiEvent} from "../../generic.types";

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

export type BridgeInfoChannel = GenericAmiEvent<"BridgeInfoChannel", Payload>
