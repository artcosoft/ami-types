# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`@artcosoft/ami-types` is a types-only TypeScript package for the Asterisk Manager Interface (AMI): request, response and event shapes for AMI actions, plus AMI event payloads. The only runtime code is the `amiAction()` helper and two string enums (`ChannelState`, `QueueMemberDeviceStatus`).

## Commands

- `npm run build`: runs `tsc`, compiling `src/` into `lib/` (CommonJS + `.d.ts`). `lib/` is gitignored.
- `npx tsc --noEmit`: type-checks without emitting. There are no tests (`npm test` is a stub that fails), so this check is how you verify a change.
- `npx prettier --write <files>`: formats files using `.prettierrc.json` (4 spaces, single quotes, trailing commas). Most existing files predate the Prettier config and are not formatted. Run it only on files you touch, never across all of `src/`.
- `npm run build_and_publish`: runs clean, build, then `npm publish` to GitHub Packages (`publishConfig.registry`). `.npmignore` leaves `src/` and `tsconfig.json` out of the tarball, so only `lib/` ships. Each release bumps `version` in `package.json` in its own commit (`upd: version ...`).

## Architecture

The public API is `src/index.ts`. Everything is built from two maps:

- **Actions**: `src/definitions/all.actions.ts` defines `AmiActions`, a map from action name to `AmiActionPrototype<Request, Response, Event>` (from `generic.types.ts`). `AmiActionType = keyof AmiActions`, so an action exists in the typed API only once it has an entry in this map. `_AmiActionType` in the same file is just a reference list of every Asterisk action and is not used anywhere.
  - `Request` holds the action's parameters (without `Action`/`ActionID`, which `AmiAction<T>` adds in `index.ts`).
  - `Event` is the union of list-item events the action emits (for example, `QueueStatus` emits `QueueParams | QueueMember | QueueEntry`), or `never`. `AmiListItemEvent<T>` in `index.ts` uses it.
- **Events**: `src/definitions/all.events.ts` defines `AmiEventType`, a string union of all Asterisk event names. Each event is `GenericAmiEvent<'Name', Payload>`, and its name must be in that union. `src/definitions/events/index.ts` builds the exported `AmiEvent` union (the discriminant is `Event`) and `AmiChannelEvent`. Events that are not implemented yet appear there as commented-out imports or union members.

Layout: one file per action in `src/definitions/actions/` and one per event in `src/definitions/events/`. Related ones are grouped in folders (`QueueActions/`, `BridgeEvents/`, …), each with its own `index.ts` barrel. Action files reuse event types (for example, `actions/QueueActions/QueueStatus.ts` imports from `events/QueueEvents/`). Use `_template.ts` files as the starting point for new ones.

### Adding an action

1. Create `actions/[Group/]Name.ts` exporting `type Name = AmiActionPrototype<Request, Response, Event>`.
2. Re-export it from the folder's `index.ts`, or from `actions/index.ts` if it is not in a group.
3. Import it in `all.actions.ts` and add `Name: Name` to `AmiActions`.

### Adding an event

1. Create `events/[Group/]Name.ts` exporting `type Name = GenericAmiEvent<'Name', Payload>`. Use `ChannelState`/`ChannelStateDescription` from `channel.types.ts` for channel fields.
2. In `events/index.ts`, replace the commented-out import and union line with real ones (or add new ones).
3. Check that the name is in `AmiEventType`.

The name of a file containing a hyphen becomes an underscore in its type (`AOC-D.ts` exports `AOC_D`). AMI sends every value as a string, so numeric fields are typed as `string` or as string enums.

## Registry / auth

`.npmrc` maps the `@artcosoft` and `@aatdev` scopes to `npm.pkg.github.com`. The committed version reads tokens from environment variables. Do not commit a literal `_authToken`.
