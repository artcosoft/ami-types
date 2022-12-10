import {ChannelState, ChannelStateDescription} from "../../channel.types";
import {GenericAmiEvent} from "../../generic.types";
import {BridgeVideoSourceMode} from "./_shared.types";

type Payload = {
    BridgeUniqueid: string
    BridgeType: string
    BridgeTechnology: string
    BridgeCreator: string
    BridgeName: string
    BridgeNumChannels: string
    BridgeVideoSourceMode: BridgeVideoSourceMode
    BridgeVideoSource?: string
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
    SwapUniqueid: string
}

export type BridgeEnter = GenericAmiEvent<"BridgeEnter", Payload>
