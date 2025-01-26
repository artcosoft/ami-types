import {
    AbsoluteTimeout,
    AgentLogoff,
    Agents,
    Atxfer,
    BlindTransfer,
    Bridge,
    BridgeDestroy,
    BridgeInfo,
    BridgeKick,
    BridgeList,
    BridgeTechnologyList,
    BridgeTechnologySuspend,
    BridgeTechnologyUnsuspend,
    CancelAtxfer,
    Command,
    DBDel,
    DBDelTree,
    DBPut,
    DeviceStateList,
    Events,
    ExtensionState,
    Getvar,
    Hangup,
    Login,
    Logoff,
    Reload,
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
} from "./actions"

export type AmiActionType = keyof AmiActions;


export type _AmiActionType = "AbsoluteTimeout"
    | "AgentLogoff"
    | "Agents"
    | "AGI"
    | "AOCMessage"
    | "Atxfer"
    | "BlindTransfer"
    | "Bridge"
    | "BridgeDestroy"
    | "BridgeInfo"
    | "BridgeKick"
    | "BridgeList"
    | "BridgeTechnologyList"
    | "BridgeTechnologySuspend"
    | "BridgeTechnologyUnsuspend"
    | "CancelAtxfer"
    | "Challenge"
    | "ChangeMonitor"
    | "Command"
    | "ConfbridgeKick"
    | "ConfbridgeList"
    | "ConfbridgeListRooms"
    | "ConfbridgeLock"
    | "ConfbridgeMute"
    | "ConfbridgeSetSingleVideoSrc"
    | "ConfbridgeStartRecord"
    | "ConfbridgeStopRecord"
    | "ConfbridgeUnlock"
    | "ConfbridgeUnmute"
    | "ControlPlayback"
    | "CoreSettings"
    | "CoreShowChannels"
    | "CoreStatus"
    | "CreateConfig"
    | "DAHDIDialOffhook"
    | "DAHDIDNDoff"
    | "DAHDIDNDon"
    | "DAHDIHangup"
    | "DAHDIRestart"
    | "DAHDIShowChannels"
    | "DAHDITransfer"
    | "DataGet"
    | "DBDel"
    | "DBDelTree"
    | "DBGet"
    | "DBPut"
    | "DeviceStateList"
    | "DialplanExtensionAdd"
    | "DialplanExtensionRemove"
    | "Events"
    | "ExtensionState"
    | "ExtensionStateList"
    | "FAXSession"
    | "FAXSessions"
    | "FAXStats"
    | "Filter"
    | "FilterList"
    | "GetConfig"
    | "GetConfigJSON"
    | "Getvar"
    | "Hangup"
    | "IAXnetstats"
    | "IAXpeerlist"
    | "IAXpeers"
    | "IAXregistry"
    | "JabberSend_res_xmpp"
    | "ListCategories"
    | "ListCommands"
    | "LocalOptimizeAway"
    | "LoggerRotate"
    | "Login"
    | "Logoff"
    | "MailboxCount"
    | "MailboxStatus"
    | "MeetmeList"
    | "MeetmeListRooms"
    | "MeetmeMute"
    | "MeetmeUnmute"
    | "MessageSend"
    | "MixMonitor"
    | "MixMonitorMute"
    | "ModuleCheck"
    | "ModuleLoad"
    | "Monitor"
    | "MuteAudio"
    | "MWIDelete"
    | "MWIGet"
    | "MWIUpdate"
    | "Originate"
    | "Park"
    | "ParkedCalls"
    | "Parkinglots"
    | "PauseMonitor"
    | "Ping"
    | "PJSIPNotify"
    | "PJSIPQualify"
    | "PJSIPRegister"
    | "PJSIPShowAors"
    | "PJSIPShowAuths"
    | "PJSIPShowContacts"
    | "PJSIPShowEndpoint"
    | "PJSIPShowEndpoints"
    | "PJSIPShowRegistrationInboundContactStatuses"
    | "PJSIPShowRegistrationsInbound"
    | "PJSIPShowRegistrationsOutbound"
    | "PJSIPShowResourceLists"
    | "PJSIPShowSubscriptionsInbound"
    | "PJSIPShowSubscriptionsOutbound"
    | "PJSIPUnregister"
    | "PlayDTMF"
    | "PlayMF"
    | "PresenceState"
    | "PresenceStateList"
    | "PRIDebugFileSet"
    | "PRIDebugFileUnset"
    | "PRIDebugSet"
    | "PRIShowSpans"
    | "QueueAdd"
    | "QueueChangePriorityCaller"
    | "QueueLog"
    | "QueueMemberRingInUse"
    | "QueuePause"
    | "QueuePenalty"
    | "QueueReload"
    | "QueueRemove"
    | "QueueReset"
    | "QueueRule"
    | "QueueStatus"
    | "QueueSummary"
    | "QueueWithdrawCaller"
    | "Redirect"
    | "Reload"
    | "SendText"
    | "Setvar"
    | "ShowDialPlan"
    | "SIPnotify"
    | "SIPpeers"
    | "SIPpeerstatus"
    | "SIPqualifypeer"
    | "SIPshowpeer"
    | "SIPshowregistry"
    | "SKINNYdevices"
    | "SKINNYlines"
    | "SKINNYshowdevice"
    | "SKINNYshowline"
    | "SorceryMemoryCacheExpire"
    | "SorceryMemoryCacheExpireObject"
    | "SorceryMemoryCachePopulate"
    | "SorceryMemoryCacheStale"
    | "SorceryMemoryCacheStaleObject"
    | "Status"
    | "StopMixMonitor"
    | "StopMonitor"
    | "UnpauseMonitor"
    | "UpdateConfig"
    | "UserEvent"
    | "VoicemailRefresh"
    | "VoicemailUsersList"
    | "VoicemailUserStatus"
    | "WaitEvent"


export type AmiActions = {
    AbsoluteTimeout: AbsoluteTimeout
    Agents: Agents
    AgentLogoff: AgentLogoff
    Atxfer: Atxfer
    BlindTransfer: BlindTransfer
    Bridge: Bridge
    BridgeDestroy: BridgeDestroy
    BridgeInfo: BridgeInfo,
    BridgeKick: BridgeKick,
    BridgeList: BridgeList,
    BridgeTechnologyList: BridgeTechnologyList,
    BridgeTechnologySuspend: BridgeTechnologySuspend,
    BridgeTechnologyUnsuspend: BridgeTechnologyUnsuspend,
    CancelAtxfer: CancelAtxfer
    Command: Command

    DBDel: DBDel,
    DBPut: DBPut,
    DBDelTree: DBDelTree,

    DeviceStateList: DeviceStateList
    Events: Events
    ExtensionState: ExtensionState
    Getvar: Getvar
    Setvar: Setvar
    Hangup: Hangup
    Login: Login
    Logoff: Logoff
    Reload: Reload
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
