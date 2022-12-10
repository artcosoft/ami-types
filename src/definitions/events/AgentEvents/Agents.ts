import {ChannelState, ChannelStateDescription, Status} from "../../channel.types";
import {GenericAmiEvent} from "../../generic.types";

type Payload = {
    Agent: string
    Name: string
    Status: Status
    /* TalkingToChan is present if Status value is AGENT_ONCALL */
    TalkingToChan?: string
    /* CallStarted is present if Status value is AGENT_ONCALL */
    CallStarted?: string
    /* LoggedInTime is present if Status value is AGENT_IDLE or AGENT_ONCALL.*/
    LoggedInTime?: string
    Channel: string
    ChannelState: ChannelState
    ChannelStateDesc: ChannelStateDescription
    CallerIDNum: string
    CallerIDName: string
    ConnectedLineNum: string
    ConnectedLineName: string
    Language: string
    AccountCode: string
    Context: string
    Exten: string
    Priority: string
    Uniqueid: string
    Linkedid: string
    ActionID: string
}

export type Agents = GenericAmiEvent<"Agents", Payload>
