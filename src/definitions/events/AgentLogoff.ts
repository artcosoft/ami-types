import {GenericAmiEvent} from "../generic.types";
import {ChannelStateDescription} from "../channel.types";

type Payload = {
    Agent: string
    Logintime: string
}

export type AgentLogoff = GenericAmiEvent<"AgentLogoff", Payload>
