import {GenericAmiEvent} from "../generic.types";

type Payload = {
    DAHDIChannel: string
}

export type AlarmClear = GenericAmiEvent<"AlarmClear", Payload>
