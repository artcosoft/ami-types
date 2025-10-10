import { GenericAmiEvent } from '../generic.types';

type Payload = {
    URI: string;
    ContactStatus:
        | 'Unknown'
        | 'Unreachable'
        | 'Reachable'
        | 'Unqualified'
        | 'Removed'
        | 'Updated';
    AOR: string;
    EndpointName: string;
    RoundtripUsec: string;
};

export type ContactStatus = GenericAmiEvent<'ContactStatus', Payload>;
