import {GenericAmiEvent} from "../generic.types";

type Payload = {
    EventList: string
    ListItems: string
}

export type AorListComplete = GenericAmiEvent<"AorListComplete", Payload>
