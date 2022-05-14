



export type AmiEventType = "AgentCalled"
    | "AgentComplete"
    | "AgentConnect"
    | "AgentDump"
    | "AgentLogin"
    | "AgentLogoff"
    | "AgentRingNoAnswer"
    | "Agents"
    | "AgentsComplete"
    | "AGIExecEnd"
    | "AGIExecStart"
    | "Alarm"
    | "AlarmClear"
    | "AOC-D"
    | "AOC-E"
    | "AOC-S"
    | "AorDetail"
    | "AorList"
    | "AorListComplete"
    | "AsyncAGIEnd"
    | "AsyncAGIExec"
    | "AsyncAGIStart"
    | "AttendedTransfer"
    | "AuthDetail"
    | "AuthList"
    | "AuthListComplete"
    | "AuthMethodNotAllowed"
    | "BlindTransfer"
    | "BridgeCreate"
    | "BridgeDestroy"
    | "BridgeEnter"
    | "BridgeInfoChannel"
    | "BridgeInfoComplete"
    | "BridgeLeave"
    | "BridgeMerge"
    | "BridgeVideoSourceUpdate"
    | "Cdr"
    | "CEL"
    | "ChallengeResponseFailed"
    | "ChallengeSent"
    | "ChannelTalkingStart"
    | "ChannelTalkingStop"
    | "ChanSpyStart"
    | "ChanSpyStop"
    | "ConfbridgeEnd"
    | "ConfbridgeJoin"
    | "ConfbridgeLeave"
    | "ConfbridgeList"
    | "ConfbridgeMute"
    | "ConfbridgeRecord"
    | "ConfbridgeStart"
    | "ConfbridgeStopRecord"
    | "ConfbridgeTalking"
    | "ConfbridgeUnmute"
    | "ContactList"
    | "ContactListComplete"
    | "ContactStatus"
    | "ContactStatusDetail"
    | "CoreShowChannel"
    | "CoreShowChannelsComplete"
    | "DAHDIChannel"
    | "DeviceStateChange"
    | "DeviceStateListComplete"
    | "DialBegin"
    | "DialEnd"
    | "DialState"
    | "DNDState"
    | "DTMFBegin"
    | "DTMFEnd"
    | "EndpointDetail"
    | "EndpointDetailComplete"
    | "EndpointList"
    | "EndpointListComplete"
    | "ExtensionStateListComplete"
    | "ExtensionStatus"
    | "FailedACL"
    | "FAXSession"
    | "FAXSessionsComplete"
    | "FAXSessionsEntry"
    | "FAXStats"
    | "FAXStatus"
    | "Flash"
    | "FullyBooted"
    | "Hangup"
    | "HangupHandlerPop"
    | "HangupHandlerPush"
    | "HangupHandlerRun"
    | "HangupRequest"
    | "Hold"
    | "IdentifyDetail"
    | "InvalidAccountID"
    | "InvalidPassword"
    | "InvalidTransport"
    | "Load"
    | "LoadAverageLimit"
    | "LocalBridge"
    | "LocalOptimizationBegin"
    | "LocalOptimizationEnd"
    | "LogChannel"
    | "MCID"
    | "MeetmeEnd"
    | "MeetmeJoin"
    | "MeetmeLeave"
    | "MeetmeMute"
    | "MeetmeTalking"
    | "MeetmeTalkRequest"
    | "MemoryLimit"
    | "MessageWaiting"
    | "MiniVoiceMail"
    | "MixMonitorMute"
    | "MixMonitorStart"
    | "MixMonitorStop"
    | "MonitorStart"
    | "MonitorStop"
    | "MusicOnHoldStart"
    | "MusicOnHoldStop"
    | "MWIGet"
    | "MWIGetComplete"
    | "NewAccountCode"
    | "NewCallerid"
    | "Newchannel"
    | "NewConnectedLine"
    | "NewExten"
    | "Newstate"
    | "OriginateResponse"
    | "ParkedCall"
    | "ParkedCallGiveUp"
    | "ParkedCallSwap"
    | "ParkedCallTimeOut"
    | "PeerStatus"
    | "Pickup"
    | "PresenceStateChange"
    | "PresenceStateListComplete"
    | "PresenceStatus"
    | "QueueCallerAbandon"
    | "QueueCallerJoin"
    | "QueueCallerLeave"
    | "QueueEntry"
    | "QueueMemberAdded"
    | "QueueMemberPause"
    | "QueueMemberPenalty"
    | "QueueMemberRemoved"
    | "QueueMemberRinginuse"
    | "QueueMemberStatus"
    | "QueueParams"
    | "QueueMember"
    | "ReceiveFAX"
    | "Registry"
    | "Reload"
    | "Rename"
    | "RequestBadFormat"
    | "RequestNotAllowed"
    | "RequestNotSupported"
    | "RTCPReceived"
    | "RTCPSent"
    | "SendFAX"
    | "SessionLimit"
    | "SessionTimeout"
    | "Shutdown"
    | "SIPQualifyPeerDone"
    | "SoftHangupRequest"
    | "SpanAlarm"
    | "SpanAlarmClear"
    | "Status"
    | "StatusComplete"
    | "SuccessfulAuth"
    | "TransportDetail"
    | "UnexpectedAddress"
    | "Unhold"
    | "Unload"
    | "UnParkedCall"
    | "UserEvent"
    | "VarSet"
    | "Wink"

