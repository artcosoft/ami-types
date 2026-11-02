import { AmiEventType } from './all.events';

export type EmptyType = Record<string, never>;

type BaseResponse = {
    Message: string;
    ActionID: string;
};

export type AmiResponse = BaseResponse & {
    Response: 'Success';
    EventList?: string;
};

export type AmiError = BaseResponse & {
    Response: 'Error';
};

export type AmiActionPrototype<Request, Response extends AmiResponse, Event> = {
    Request: Request;
    Response: Response;
    Event: Event;
};

export type GenericAmiEvent<Event extends AmiEventType, Payload extends {}> = {
    /** Present on events sent in reply to an action that carried an ActionID. */
    ActionID?: string;
    Event: Event;
    /** Event class list (e.g. "call,all"); added by the manager core to unsolicited events. */
    Privilege?: string;
} & Payload;
