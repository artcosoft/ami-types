import {AmiActionPrototype, AmiResponse} from "../../generic.types";
import {QueueParams} from "../../events/QueueEvents/QueueParams";
import {QueueEntry} from "../../events/QueueEvents/QueueEntry";
import {QueueMember} from "../../events/QueueEvents/QueueMember";

type Request = {
    Queue?: string
    Member?: string
}

type Response = AmiResponse

type Event = QueueParams | QueueMember | QueueEntry

export type QueueStatus = AmiActionPrototype<Request, Response, Event>;
