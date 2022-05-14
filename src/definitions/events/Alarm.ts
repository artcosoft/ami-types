import {GenericAmiEvent} from "../generic.types";

type Payload = {
    DAHDIChannel: string
    Alarm: string
}

export type Alarm = GenericAmiEvent<"Alarm", Payload>
