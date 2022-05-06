import {AgentCalled} from './AgentCalled'
import {AgentComplete} from './AgentComplete'
import {AgentConnect} from './AgentConnect'
import {AgentDump} from './AgentDump'
import {AgentLogin} from './AgentLogin'
import {AgentLogoff} from './AgentLogoff'
import {AgentRingNoAnswer} from './AgentRingNoAnswer'
import {Agents} from './Agents'
import {AgentsComplete} from './AgentsComplete'
// import {AGIExecEnd} from './AGIExecEnd'
// import {AGIExecStart} from './AGIExecStart'
// import {Alarm} from './Alarm'
// import {AlarmClear} from './AlarmClear'
// import {AOC-D} from './AOC-D'
// import {AOC-E} from './AOC-E'
// import {AOC-S} from './AOC-S'
// import {AorDetail} from './AorDetail'
// import {AorList} from './AorList'
// import {AorListComplete} from './AorListComplete'
// import {AsyncAGIEnd} from './AsyncAGIEnd'
// import {AsyncAGIExec} from './AsyncAGIExec'
// import {AsyncAGIStart} from './AsyncAGIStart'
// import {AttendedTransfer} from './AttendedTransfer'
// import {AuthDetail} from './AuthDetail'
// import {AuthList} from './AuthList'
// import {AuthListComplete} from './AuthListComplete'
// import {AuthMethodNotAllowed} from './AuthMethodNotAllowed'
// import {BlindTransfer} from './BlindTransfer'
// import {BridgeCreate} from './BridgeCreate'
// import {BridgeDestroy} from './BridgeDestroy'
// import {BridgeEnter} from './BridgeEnter'
// import {BridgeInfoChannel} from './BridgeInfoChannel'
// import {BridgeInfoComplete} from './BridgeInfoComplete'
// import {BridgeLeave} from './BridgeLeave'
// import {BridgeMerge} from './BridgeMerge'
// import {BridgeVideoSourceUpdate} from './BridgeVideoSourceUpdate'
// import {Cdr} from './Cdr'
// import {CEL} from './CEL'
// import {ChallengeResponseFailed} from './ChallengeResponseFailed'
// import {ChallengeSent} from './ChallengeSent'
// import {ChannelTalkingStart} from './ChannelTalkingStart'
// import {ChannelTalkingStop} from './ChannelTalkingStop'
// import {ChanSpyStart} from './ChanSpyStart'
// import {ChanSpyStop} from './ChanSpyStop'
// import {ConfbridgeEnd} from './ConfbridgeEnd'
// import {ConfbridgeJoin} from './ConfbridgeJoin'
// import {ConfbridgeLeave} from './ConfbridgeLeave'
// import {ConfbridgeList} from './ConfbridgeList'
// import {ConfbridgeMute} from './ConfbridgeMute'
// import {ConfbridgeRecord} from './ConfbridgeRecord'
// import {ConfbridgeStart} from './ConfbridgeStart'
// import {ConfbridgeStopRecord} from './ConfbridgeStopRecord'
// import {ConfbridgeTalking} from './ConfbridgeTalking'
// import {ConfbridgeUnmute} from './ConfbridgeUnmute'
// import {ContactList} from './ContactList'
// import {ContactListComplete} from './ContactListComplete'
// import {ContactStatus} from './ContactStatus'
// import {ContactStatusDetail} from './ContactStatusDetail'
// import {CoreShowChannel} from './CoreShowChannel'
// import {CoreShowChannelsComplete} from './CoreShowChannelsComplete'
// import {DAHDIChannel} from './DAHDIChannel'
import {DeviceStateChange} from './DeviceStateChange'
// import {DeviceStateListComplete} from './DeviceStateListComplete'
import {DialBegin} from './DialBegin'
import {DialEnd} from './DialEnd'
import {DialState} from './DialState'
// import {DNDState} from './DNDState'
// import {DTMFBegin} from './DTMFBegin'
// import {DTMFEnd} from './DTMFEnd'
// import {EndpointDetail} from './EndpointDetail'
// import {EndpointDetailComplete} from './EndpointDetailComplete'
// import {EndpointList} from './EndpointList'
// import {EndpointListComplete} from './EndpointListComplete'
// import {ExtensionStateListComplete} from './ExtensionStateListComplete'
// import {ExtensionStatus} from './ExtensionStatus'
// import {FailedACL} from './FailedACL'
// import {FAXSession} from './FAXSession'
// import {FAXSessionsComplete} from './FAXSessionsComplete'
// import {FAXSessionsEntry} from './FAXSessionsEntry'
// import {FAXStats} from './FAXStats'
// import {FAXStatus} from './FAXStatus'
// import {Flash} from './Flash'
// import {FullyBooted} from './FullyBooted'
import {Hangup} from './Hangup'
// import {HangupHandlerPop} from './HangupHandlerPop'
// import {HangupHandlerPush} from './HangupHandlerPush'
// import {HangupHandlerRun} from './HangupHandlerRun'
// import {HangupRequest} from './HangupRequest'
import {Hold} from './Hold'
// import {IdentifyDetail} from './IdentifyDetail'
// import {InvalidAccountID} from './InvalidAccountID'
// import {InvalidPassword} from './InvalidPassword'
// import {InvalidTransport} from './InvalidTransport'
// import {Load} from './Load'
// import {LoadAverageLimit} from './LoadAverageLimit'
// import {LocalBridge} from './LocalBridge'
// import {LocalOptimizationBegin} from './LocalOptimizationBegin'
// import {LocalOptimizationEnd} from './LocalOptimizationEnd'
// import {LogChannel} from './LogChannel'
// import {MCID} from './MCID'
// import {MeetmeEnd} from './MeetmeEnd'
// import {MeetmeJoin} from './MeetmeJoin'
// import {MeetmeLeave} from './MeetmeLeave'
// import {MeetmeMute} from './MeetmeMute'
// import {MeetmeTalking} from './MeetmeTalking'
// import {MeetmeTalkRequest} from './MeetmeTalkRequest'
// import {MemoryLimit} from './MemoryLimit'
// import {MessageWaiting} from './MessageWaiting'
// import {MiniVoiceMail} from './MiniVoiceMail'
// import {MixMonitorMute} from './MixMonitorMute'
// import {MixMonitorStart} from './MixMonitorStart'
// import {MixMonitorStop} from './MixMonitorStop'
// import {MonitorStart} from './MonitorStart'
// import {MonitorStop} from './MonitorStop'
// import {MusicOnHoldStart} from './MusicOnHoldStart'
// import {MusicOnHoldStop} from './MusicOnHoldStop'
// import {MWIGet} from './MWIGet'
// import {MWIGetComplete} from './MWIGetComplete'
// import {NewAccountCode} from './NewAccountCode'
// import {NewCallerid} from './NewCallerid'
import {Newchannel} from './Newchannel'
import {NewConnectedLine} from './NewConnectedLine'
// import {NewExten} from './NewExten'
import {Newstate} from './Newstate'
// import {OriginateResponse} from './OriginateResponse'
// import {ParkedCall} from './ParkedCall'
// import {ParkedCallGiveUp} from './ParkedCallGiveUp'
// import {ParkedCallSwap} from './ParkedCallSwap'
// import {ParkedCallTimeOut} from './ParkedCallTimeOut'
// import {PeerStatus} from './PeerStatus'
// import {Pickup} from './Pickup'
// import {PresenceStateChange} from './PresenceStateChange'
// import {PresenceStateListComplete} from './PresenceStateListComplete'
// import {PresenceStatus} from './PresenceStatus'
// import {QueueCallerAbandon} from './QueueCallerAbandon'
// import {QueueCallerJoin} from './QueueCallerJoin'
// import {QueueCallerLeave} from './QueueCallerLeave'
import {QueueEntry} from './QueueEntry'
// import {QueueMemberAdded} from './QueueMemberAdded'
// import {QueueMemberPause} from './QueueMemberPause'
// import {QueueMemberPenalty} from './QueueMemberPenalty'
// import {QueueMemberRemoved} from './QueueMemberRemoved'
// import {QueueMemberRinginuse} from './QueueMemberRinginuse'
// import {QueueMemberStatus} from './QueueMemberStatus'
import {QueueParams} from './QueueParams'
import {QueueMember} from './QueueMember'
// import {ReceiveFAX} from './ReceiveFAX'
// import {Registry} from './Registry'
// import {Reload} from './Reload'
// import {Rename} from './Rename'
// import {RequestBadFormat} from './RequestBadFormat'
// import {RequestNotAllowed} from './RequestNotAllowed'
// import {RequestNotSupported} from './RequestNotSupported'
// import {RTCPReceived} from './RTCPReceived'
// import {RTCPSent} from './RTCPSent'
// import {SendFAX} from './SendFAX'
// import {SessionLimit} from './SessionLimit'
// import {SessionTimeout} from './SessionTimeout'
// import {Shutdown} from './Shutdown'
// import {SIPQualifyPeerDone} from './SIPQualifyPeerDone'
// import {SoftHangupRequest} from './SoftHangupRequest'
// import {SpanAlarm} from './SpanAlarm'
// import {SpanAlarmClear} from './SpanAlarmClear'
// import {Status} from './Status'
// import {StatusComplete} from './StatusComplete'
// import {SuccessfulAuth} from './SuccessfulAuth'
// import {TransportDetail} from './TransportDetail'
// import {UnexpectedAddress} from './UnexpectedAddress'
import {Unhold} from './Unhold'
// import {Unload} from './Unload'
// import {UnParkedCall} from './UnParkedCall'
// import {UserEvent} from './UserEvent'
// import {VarSet} from './VarSet'
// import {Wink} from './Wink'

export type AmiEvent =
    AgentCalled
    | AgentComplete
    | AgentConnect
    | AgentDump
    | AgentLogin
    | AgentLogoff
    | AgentRingNoAnswer
    | Agents
    | AgentsComplete
    // | AGIExecEnd
    // | AGIExecStart
    // | Alarm
    // | AlarmClear
// | AOC
// | AOC
// | AOC
//     | AorDetail
//     | AorList
//     | AorListComplete
//     | AsyncAGIEnd
//     | AsyncAGIExec
//     | AsyncAGIStart
//     | AttendedTransfer
//     | AuthDetail
//     | AuthList
//     | AuthListComplete
//     | AuthMethodNotAllowed
//     | BlindTransfer
//     | BridgeCreate
//     | BridgeDestroy
//     | BridgeEnter
//     | BridgeInfoChannel
//     | BridgeInfoComplete
//     | BridgeLeave
//     | BridgeMerge
//     | BridgeVideoSourceUpdate
//     | Cdr
//     | CEL
//     | ChallengeResponseFailed
//     | ChallengeSent
//     | ChannelTalkingStart
//     | ChannelTalkingStop
//     | ChanSpyStart
//     | ChanSpyStop
//     | ConfbridgeEnd
//     | ConfbridgeJoin
//     | ConfbridgeLeave
//     | ConfbridgeList
//     | ConfbridgeMute
//     | ConfbridgeRecord
//     | ConfbridgeStart
//     | ConfbridgeStopRecord
//     | ConfbridgeTalking
//     | ConfbridgeUnmute
//     | ContactList
//     | ContactListComplete
//     | ContactStatus
//     | ContactStatusDetail
//     | CoreShowChannel
//     | CoreShowChannelsComplete
//     | DAHDIChannel
    | DeviceStateChange
    // | DeviceStateListComplete
    | DialBegin
    | DialEnd
    | DialState
    // | DNDState
    // | DTMFBegin
    // | DTMFEnd
    // | EndpointDetail
    // | EndpointDetailComplete
    // | EndpointList
    // | EndpointListComplete
    // | ExtensionStateListComplete
    // | ExtensionStatus
    // | FailedACL
    // | FAXSession
    // | FAXSessionsComplete
    // | FAXSessionsEntry
    // | FAXStats
    // | FAXStatus
    // | Flash
    // | FullyBooted
    | Hangup
    // | HangupHandlerPop
    // | HangupHandlerPush
    // | HangupHandlerRun
    // | HangupRequest
    | Hold
    // | IdentifyDetail
    // | InvalidAccountID
    // | InvalidPassword
    // | InvalidTransport
    // | Load
    // | LoadAverageLimit
    // | LocalBridge
    // | LocalOptimizationBegin
    // | LocalOptimizationEnd
    // | LogChannel
    // | MCID
    // | MeetmeEnd
    // | MeetmeJoin
    // | MeetmeLeave
    // | MeetmeMute
    // | MeetmeTalking
    // | MeetmeTalkRequest
    // | MemoryLimit
    // | MessageWaiting
    // | MiniVoiceMail
    // | MixMonitorMute
    // | MixMonitorStart
    // | MixMonitorStop
    // | MonitorStart
    // | MonitorStop
    // | MusicOnHoldStart
    // | MusicOnHoldStop
    // | MWIGet
    // | MWIGetComplete
    // | NewAccountCode
    // | NewCallerid
    | Newchannel
    | NewConnectedLine
    // | NewExten
    | Newstate
    // | OriginateResponse
    // | ParkedCall
    // | ParkedCallGiveUp
    // | ParkedCallSwap
    // | ParkedCallTimeOut
    // | PeerStatus
    // | Pickup
    // | PresenceStateChange
    // | PresenceStateListComplete
    // | PresenceStatus
    // | QueueCallerAbandon
    // | QueueCallerJoin
    // | QueueCallerLeave
    | QueueEntry
    // | QueueMemberAdded
    // | QueueMemberPause
    // | QueueMemberPenalty
    // | QueueMemberRemoved
    // | QueueMemberRinginuse
    // | QueueMemberStatus
    | QueueParams
    | QueueMember
    // | ReceiveFAX
    // | Registry
    // | Reload
    // | Rename
    // | RequestBadFormat
    // | RequestNotAllowed
    // | RequestNotSupported
    // | RTCPReceived
    // | RTCPSent
    // | SendFAX
    // | SessionLimit
    // | SessionTimeout
    // | Shutdown
    // | SIPQualifyPeerDone
    // | SoftHangupRequest
    // | SpanAlarm
    // | SpanAlarmClear
    // | Status
    // | StatusComplete
    // | SuccessfulAuth
    // | TransportDetail
    // | UnexpectedAddress
    | Unhold
    // | Unload
    // | UnParkedCall
    // | UserEvent
    // | VarSet
    // | Wink

