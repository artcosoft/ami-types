import {GenericAmiEvent} from "../../generic.types";

type Payload = {
    ActionID: string
}

export type AgentsComplete = GenericAmiEvent<"AgentsComplete", Payload>
