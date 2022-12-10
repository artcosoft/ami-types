import {GenericAmiEvent} from "../../generic.types";
import {BridgeVideoSourceMode} from "./_shared.types";

type Payload = {
    ToBridgeUniqueid: string
    ToBridgeType: string
    ToBridgeTechnology: string
    ToBridgeCreator: string
    ToBridgeName: string
    ToBridgeNumChannels: string
    ToBridgeVideoSourceMode: BridgeVideoSourceMode
    ToBridgeVideoSource?: string
    FromBridgeUniqueid: string
    FromBridgeType: string
    FromBridgeTechnology: string
    FromBridgeCreator: string
    FromBridgeName: string
    FromBridgeNumChannels: string
    FromBridgeVideoSourceMode: BridgeVideoSourceMode
    FromBridgeVideoSource?: string
}

export type BridgeMerge = GenericAmiEvent<"BridgeMerge", Payload>
