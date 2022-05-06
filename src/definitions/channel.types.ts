export enum ChannelState {
    "Down",
    "Rsrvd",
    "OffHook",
    "Dialing",
    "Ring",
    "Ringing",
    "Up",
    "Busy",
    "Dialing Offhook",
    "Pre-ring",
    "Unknown",
}

export type ChannelStateDescription = "Down"
    | "Rsrvd"
    | "OffHook"
    | "Dialing"
    | "Ring"
    | "Ringing"
    | "Up"
    | "Busy"
    | "Dialing Offhook"
    | "Pre-ring"
    | "Unknown"


export type Reason = "caller"
    | "agent"
    | "transfer"

export type Status = "AGENT_LOGGEDOFF"
    | "AGENT_IDLE"
    | "AGENT_ONCALL"

export type DeviceState = "UNKNOWN"
    | "NOT_INUSE"
    | "INUSE"
    | "BUSY"
    | "INVALID"
    | "UNAVAILABLE"
    | "RINGING"
    | "RINGINUSE"
    | "ONHOLD"


export type DialStatus = "RINGING"
    | "PROCEEDING"
    | "PROGRESS"


export type DialEndStatus = "ABORT"
    | "ANSWER"
    | "BUSY"
    | "CANCEL"
    | "CHANUNAVAIL"
    | "CONGESTION"
    | "CONTINUE"
    | "GOTO"
    | "NOANSWER"
