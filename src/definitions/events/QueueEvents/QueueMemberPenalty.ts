
import {QueueMembership, QueueMemberDeviceStatus} from "../../event.types";

export type QueueMemberPenalty = {
    Event: "QueueMemberPenalty",
    Queue: string
    MemberName: string
    Interface: string
    StateInterface: string
    Membership: QueueMembership
    Penalty: string
    CallsTaken: string
    LastCall: string
    LastPause: string
    LoginTime: string
    InCall: "0" | "1"
    Status: QueueMemberDeviceStatus
    Paused: "0" | "1"
    PausedReason: string
    Ringinuse: "0" | "1"
    Wrapuptime: string
}
