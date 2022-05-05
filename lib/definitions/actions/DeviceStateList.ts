import {AmiActionPrototype, AmiResponse, EmptyType} from "../generic.types";
import {DeviceStateChange} from "../events/DeviceStateChange";

type Request = EmptyType

type Response = AmiResponse

type Event = DeviceStateChange

export type DeviceStateList = AmiActionPrototype<Request, Response, Event>;
