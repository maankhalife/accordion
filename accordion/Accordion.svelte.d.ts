/** @typedef {typeof __propDef.props}  AccordionProps */
/** @typedef {typeof __propDef.events}  AccordionEvents */
/** @typedef {typeof __propDef.slots}  AccordionSlots */
export default class Accordion extends SvelteComponentTyped<{
    active?: string | undefined;
    title?: string | undefined;
    id?: string | undefined;
    subTitle?: string | undefined;
    content?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AccordionProps = typeof __propDef.props;
export type AccordionEvents = typeof __propDef.events;
export type AccordionSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        active?: string | undefined;
        title?: string | undefined;
        id?: string | undefined;
        subTitle?: string | undefined;
        content?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
