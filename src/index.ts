import {
    AbsoluteTimeout,
    AgentLogoff,
    Agents,
    Atxfer,
    BlindTransfer,
    Bridge,
    BridgeDestroy,
    CancelAtxfer,
    Command,
    DeviceStateList,
    Events,
    ExtensionState,
    Getvar,
    Hangup,
    Originate,
    Park,
    PJSIPNotify,
    PJSIPShowEndpoint,
    PJSIPShowEndpoints,
    QueueAdd,
    QueueChangePriorityCaller,
    QueueLog,
    QueueMemberRingInUse,
    QueuePause,
    QueuePenalty,
    QueueReload,
    QueueRemove,
    QueueReset,
    QueueRule,
    QueueStatus,
    QueueSummary,
    Redirect,
    Setvar,
    ShowDialPlan
} from "./definitions/actions"

export type AmiActionType = keyof AmiActions;

export type AmiListItemEvent<T extends AmiActionType> = {
    Event: string
    ActionID: string
    /* the last two fields are only available in the last event */
    EventList?: string
    ListItems?: string
} & AmiActions[T]['Event']

export type AmiAction<T extends AmiActionType> = {
    Action: T
    ActionID?: string
} & AmiActions[T]['Request']

export type AmiActions = {
    AbsoluteTimeout: AbsoluteTimeout
    Agents: Agents
    AgentLogoff: AgentLogoff
    /* Attended Transfer */
    Atxfer: Atxfer
    BlindTransfer: BlindTransfer
    Bridge: Bridge
    BridgeDestroy: BridgeDestroy
    CancelAtxfer: CancelAtxfer
    Command: Command
    DeviceStateList: DeviceStateList
    Events: Events
    ExtensionState: ExtensionState
    Getvar: Getvar
    Setvar: Setvar
    Hangup: Hangup
    Originate: Originate
    Park: Park
    PJSIPNotify: PJSIPNotify
    PJSIPShowEndpoint: PJSIPShowEndpoint
    PJSIPShowEndpoints: PJSIPShowEndpoints
    QueueAdd: QueueAdd
    QueueChangePriorityCaller: QueueChangePriorityCaller
    QueueLog: QueueLog
    QueueMemberRingInUse: QueueMemberRingInUse
    QueuePause: QueuePause
    QueuePenalty: QueuePenalty
    QueueReload: QueueReload
    QueueRemove: QueueRemove
    QueueReset: QueueReset
    QueueRule: QueueRule
    QueueStatus: QueueStatus
    QueueSummary: QueueSummary
    Redirect: Redirect
    ShowDialPlan: ShowDialPlan
}
