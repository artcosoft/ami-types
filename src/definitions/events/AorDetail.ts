import {GenericAmiEvent} from "../generic.types";

type Payload = {
    ObjectType: string
    ObjectName: string
    MinimumExpiration: string
    MaximumExpiration: string
    DefaultExpiration: string
    QualifyFrequency: string
    AuthenticateQualify: string
    MaxContacts: string
    RemoveExisting: string
    RemoveUnavailable: string
    Mailboxes: string
    OutboundProxy: string
    SupportPath: string
    TotalContacts: string
    ContactsRegistered: string
    EndpointName: string
}

export type AorDetail = GenericAmiEvent<"AorDetail", Payload>
