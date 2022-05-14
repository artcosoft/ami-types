import {GenericAmiEvent} from "../generic.types";

type Payload = {
    Device: string
    State: string
}

export type DeviceStateChange = GenericAmiEvent<"DeviceStateChange", Payload>
