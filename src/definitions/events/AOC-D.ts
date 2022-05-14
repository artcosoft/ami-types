import {GenericAmiEvent} from "../generic.types";
import {AOC_BillingId, AOC_Multiplier, AOC_TotalType, AOC_Type, ChannelStateDescription} from "../channel.types";

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
    Charge: string
    Type: AOC_Type
    BillingID: AOC_BillingId
    TotalType: AOC_TotalType
    Currency: string
    Name: string
    Cost: string
    Multiplier: AOC_Multiplier
    Units: string
    NumberOf: string
    TypeOf: string
}

export type AOC_D = GenericAmiEvent<"AOC-D", Payload>
