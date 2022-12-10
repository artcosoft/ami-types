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
}

export type BridgeDestroy = GenericAmiEvent<"BridgeDestroy", Payload>
