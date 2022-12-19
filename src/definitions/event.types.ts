export type QueueMembership = "dynamic" | "realtime" | "static"


export enum QueueMemberDeviceStatus {
    AST_DEVICE_UNKNOWN = "0",
    AST_DEVICE_NOT_INUSE = "1",
    AST_DEVICE_INUSE = "2",
    AST_DEVICE_BUSY = "3",
    AST_DEVICE_INVALID = "4",
    AST_DEVICE_UNAVAILABLE = "5",
    AST_DEVICE_RINGING = "6",
    AST_DEVICE_RINGINUSE = "7",
    AST_DEVICE_ONHOLD = "8",
}
