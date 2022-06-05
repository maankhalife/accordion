/** @typedef {typeof __propDef.props}  BodyProps */
/** @typedef {typeof __propDef.events}  BodyEvents */
/** @typedef {typeof __propDef.slots}  BodySlots */
export default class Body extends SvelteComponentTyped<{
    active?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type BodyProps = typeof __propDef.props;
export type BodyEvents = typeof __propDef.events;
export type BodySlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        active?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
