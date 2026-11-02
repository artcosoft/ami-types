import { AmiError, AmiResponse } from './definitions/generic.types';
import { AmiActions, AmiActionType } from './definitions/all.actions';
import { AmiEventType } from './definitions/all.events';
import {
    AmiChannelEvent,
    AmiDeviceEvent,
    AmiEvent,
    AmiEventMap,
    AmiQueueEvent,
} from './definitions/events';
import { ChannelState } from './definitions/channel.types';
import { QueueMemberDeviceStatus } from './definitions/event.types';

type AmiListItemEvent<T extends AmiActionType> = {
    Event: string;
    ActionID: string;
    /* the last two fields are only available in the last event */
    EventList?: string;
    ListItems?: string;
} & AmiActions[T]['Event'];

type AmiAction<T extends AmiActionType> = {
    Action: T;
    ActionID?: string;
} & AmiActions[T]['Request'];

/** Event type by its `Event` header value, e.g. `AmiEventByName<'Hangup'>`. */
type AmiEventByName<T extends AmiEventType> = AmiEventMap[T];

const amiAction = <T extends AmiActionType>(
    action: T,
    params: AmiActions[T]['Request'],
    actionID: string,
): AmiAction<T> => {
    return {
        Action: action,
        ActionID: actionID,
        ...params,
    };
};

export {
    AmiResponse,
    AmiError,
    AmiActionType,
    AmiListItemEvent,
    AmiEvent,
    AmiEventType,
    AmiEventMap,
    AmiEventByName,
    AmiChannelEvent,
    AmiDeviceEvent,
    AmiQueueEvent,
    AmiAction,
    AmiActions,
    amiAction,
    ChannelState,
    QueueMemberDeviceStatus,
};
