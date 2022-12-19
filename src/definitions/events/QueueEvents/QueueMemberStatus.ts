// {
//     "Event": "QueueMemberStatus",
//     "Privilege": "agent,all",
//     "Queue": "ru_contactcenter",
//     "MemberName": "1234",
//     "Interface": "PJSIP/6620",
//     "StateInterface": "PJSIP/6620",
//     "Membership": "dynamic",
//     "Penalty": "1",
//     "CallsTaken": "0",
//     "LastCall": "0",
//     "LastPause": "1671461786",
//     "LoginTime": "1671461786",
//     "InCall": "0",
//     "Status": "6",
//     "Paused": "0",
//     "PausedReason": "",
//     "Ringinuse": "0",
//     "Wrapuptime": "0"
// }
import {QueueMemberDeviceStatus, QueueMembership} from "../../event.types";

export type QueueMemberStatus = {
    Event: "QueueMemberStatus",
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
