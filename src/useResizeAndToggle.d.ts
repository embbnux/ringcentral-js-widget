import { RefOrElementOrCallback } from '@ringcentral/juno';
import React from 'react';
export declare const DragAnchor: import("styled-components").StyledComponent<"div", import("@ringcentral/juno").RcTheme, {
    direction?: "left" | "right";
}, never>;
export type DragResizeState = {
    show: boolean;
    width: number;
};
export type UseResizeAndToggleOptions = {
    /**
     * direction to increase size
     *
     * @default 'right'
     */
    direction?: 'left' | 'right';
    getCacheStateAndAction: () => [
        DragResizeState,
        (value: DragResizeState) => void
    ];
};
/**
 * group resize and toggle logic together,
 * let you can control resize and toggle easily.
 */
export declare const useResizeAndToggle: (target: RefOrElementOrCallback | EventTarget, { getCacheStateAndAction, direction }: UseResizeAndToggleOptions) => {
    show: boolean;
    setShow: (show: boolean) => void;
    dragNode: React.JSX.Element;
};
