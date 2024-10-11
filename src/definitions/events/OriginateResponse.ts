import {GenericAmiEvent} from "../generic.types";

type Payload = {
    ActionID: string
    Response: 'Failure' | 'Success',
    Channel: string
    Context: string
    Exten: string
    Reason: string
    Uniqueid: string
    CallerIDNum: string
    CallerIDName: string
}

export type OriginateResponse = GenericAmiEvent<"OriginateResponse", Payload>

