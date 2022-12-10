import {GenericAmiEvent} from "../../generic.types";

type Payload = {
    Queue: string
    Name: string
    Location: string
    StateInterface: string
    Membership: string
    Penalty: string
    CallsTaken: string
    LastCall: string
    LastPause: string
    InCall: string
    Status: string
    Paused: string
    PausedReason: string
    Wrapuptime: string
    ActionID: string
}

export type QueueMember = GenericAmiEvent<"QueueMember", Payload>
