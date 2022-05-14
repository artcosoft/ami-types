export enum ChannelState {
    "Down" = "0",
    "Rsrvd" = "1",
    "OffHook" = "2",
    "Dialing" = "3",
    "Ring" = "4",
    "Ringing" = "5",
    "Up" = "6",
    "Busy" = "7",
    "Dialing Offhook" = "8",
    "Pre-ring" = "9",
    "Unknown" = "10",
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

export type AOC_Type = "NotAvailable"
    | "Free"
    | "Currency"
    | "Units"

export type AOC_BillingId =
    "Normal"
    | "Reverse"
    | "CreditCard"
    | "CallForwardingUnconditional"
    | "CallForwardingBusy"
    | "CallForwardingNoReply"
    | "CallDeflection"
    | "CallTransfer"
    | "NotAvailable"

export type AOC_TotalType =
    "SubTotal"
    | "Total"

export type AOC_Multiplier =
    "1/1000"
    | "1/100"
    | "1/10"
    | "1"
    | "10"
    | "100"
    | "1000"

export type AOC_RateType =
    "NotAvailable"
    | "Free"
    | "FreeFromBeginning"
    | "Duration"
    | "Flag"
    | "Volume"
    | "SpecialCode"

export type AOC_Unit =
    "Octect"
    | "Segment"
    | "Message"
