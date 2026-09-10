"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useViewTransitionState = void 0;
const juno_1 = require("@ringcentral/juno");
const react_1 = require("react");
/**
 * when browser support view transition, this hook will temp input state and call `document.startViewTransition` before the state change.
 *
 */
const useViewTransitionState = (currentState, 
/**
 * This callback will be called before the view transition starts.
 *
 * which is useful when you want to add some animation before the view transition starts.
 */
onStartViewTransition) => {
    const viewTransitionDocument = globalThis.document;
    const { current: hasViewTransition } = (0, juno_1.useResultRef)(() => 'startViewTransition' in viewTransitionDocument &&
        typeof viewTransitionDocument.startViewTransition === 'function');
    // because the view transition condition is never changed, so we can use useLayoutEffect in the if statement to avoid the not necessary effect binding.
    if (!hasViewTransition) {
        return currentState;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = (0, react_1.useState)(currentState);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const onStartViewTransitionRef = (0, react_1.useRef)(onStartViewTransition);
    if (onStartViewTransitionRef.current !== onStartViewTransition) {
        onStartViewTransitionRef.current = onStartViewTransition;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, juno_1.useOnReRender)(() => {
        var _a;
        (_a = viewTransitionDocument.startViewTransition) === null || _a === void 0 ? void 0 : _a.call(viewTransitionDocument, () => {
            var _a;
            (_a = onStartViewTransitionRef.current) === null || _a === void 0 ? void 0 : _a.call(onStartViewTransitionRef, currentState);
            setState(currentState);
        });
    }, [currentState]);
    return state;
};
exports.useViewTransitionState = useViewTransitionState;
//# sourceMappingURL=useViewTransitionState.js.map