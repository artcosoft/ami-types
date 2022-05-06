import {AmiError, AmiResponse} from "./definitions/generic.types"
import {AmiActions, AmiActionType} from "./definitions/all.actions";
import { AmiEvent } from "./definitions/events";

type AmiListItemEvent<T extends AmiActionType> = {
    Event: string
    ActionID: string
    /* the last two fields are only available in the last event */
    EventList?: string
    ListItems?: string
} & AmiActions[T]['Event']

type AmiAction<T extends AmiActionType> = {
    Action: T
    ActionID?: string
} & AmiActions[T]['Request']

const amiAction = <T extends AmiActionType>(action: T, params: AmiActions[T]['Request'], actionID: string): AmiAction<T> => {
    return {
        Action: action,
        ActionID: actionID,
        ...params
    };
};

export {
    AmiResponse,
    AmiError,
    AmiActionType,
    AmiListItemEvent,
    AmiEvent,
    AmiAction,
    amiAction
}
