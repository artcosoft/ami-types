import {GenericAmiEvent} from "../generic.types";
import {ChannelStateDescription} from "../channel.types";

type Payload = {
    Channel: string
    ChannelState: string
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
    Command: string
    CommandId: string
}

export type AGIExecStart = GenericAmiEvent<"AGIExecStart", Payload>
