import {GenericAmiEvent} from "../generic.types";

type Payload = {
    Device: string
    State: string
}

export type ContactStatus = GenericAmiEvent<"ContactStatus", Payload>
