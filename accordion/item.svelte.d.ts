/** @typedef {typeof __propDef.props}  ItemProps */
/** @typedef {typeof __propDef.events}  ItemEvents */
/** @typedef {typeof __propDef.slots}  ItemSlots */
export default class Item extends SvelteComponentTyped<{
    title?: string | undefined;
    id?: string | undefined;
    subTitle?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ItemProps = typeof __propDef.props;
export type ItemEvents = typeof __propDef.events;
export type ItemSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title?: string | undefined;
        id?: string | undefined;
        subTitle?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
