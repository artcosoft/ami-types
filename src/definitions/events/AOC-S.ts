import {GenericAmiEvent} from "../generic.types";
import {AOC_Multiplier, AOC_RateType, AOC_Unit, ChannelStateDescription} from "../channel.types";

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
    Chargeable: string
    RateType: AOC_RateType
    Currency: string
    Name: string
    Cost: string
    Multiplier: AOC_Multiplier
    ChargingType: string
    StepFunction: string
    Granularity: string
    Length: string
    Scale: string
    Unit: AOC_Unit
    SpecialCode: string
}

export type AOC_S = GenericAmiEvent<"AOC-S", Payload>
