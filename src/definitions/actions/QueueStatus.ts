import {AmiActionPrototype, AmiResponse} from "../generic.types";
import {QueueParams} from "../events/QueueParams";
import {QueueEntry} from "../events/QueueEntry";
import {QueueMember} from "../events/QueueMember";

type Request = {
    Queue?: string
    Member?: string
}

type Response = AmiResponse

type Event = QueueParams | QueueMember | QueueEntry

export type QueueStatus = AmiActionPrototype<Request, Response, Event>;
