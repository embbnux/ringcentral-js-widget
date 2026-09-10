"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebouncedFieldState = void 0;
const spring_ui_1 = require("@ringcentral/spring-ui");
const react_1 = require("react");
const DEFAULT_DEBOUNCE_MS = 500;
const useDebouncedFieldState = ({ value, onChange, debounceMs = DEFAULT_DEBOUNCE_MS, shouldDebounceOnChange = false, }) => {
    const [inputValue, setInputValueState] = (0, spring_ui_1.useRefState)(value);
    // Focus and dirty refs decide whether parent updates can overwrite the input.
    const isFocusedRef = (0, react_1.useRef)(false);
    const isDirtyRef = (0, react_1.useRef)(false);
    // Keep the latest parent value and local change for delayed callbacks.
    const parentValueRef = (0, react_1.useRef)(value);
    const changeValueRef = (0, react_1.useRef)(value);
    const onChangeRef = (0, react_1.useRef)(onChange);
    // Debounced callbacks should always call the latest onChange prop.
    onChangeRef.current = onChange;
    const debounceNotifyChange = (0, spring_ui_1.useDebounce)(() => {
        var _a;
        // Push the latest local value to the parent after the debounce delay.
        (_a = onChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onChangeRef, changeValueRef.current);
    }, debounceMs);
    const debounceSyncParentValue = (0, spring_ui_1.useDebounce)(() => {
        // Pull the latest parent value into the input when the input is safe to sync.
        changeValueRef.current = parentValueRef.current;
        setInputValueState(parentValueRef.current);
    }, debounceMs);
    const isInputProtected = (0, spring_ui_1.useEventCallback)(() => {
        // A dirty input means the user has local edits that should not be overwritten.
        return isDirtyRef.current;
    });
    const syncInputValue = (0, spring_ui_1.useEventCallback)((nextValue, rerender) => {
        // Local sync cancels any pending parent sync because this value wins now.
        changeValueRef.current = nextValue;
        debounceSyncParentValue.cancel();
        setInputValueState(nextValue, rerender);
    });
    const flushInputValue = (0, spring_ui_1.useEventCallback)((nextValue = inputValue.current) => {
        var _a;
        const flushValue = nextValue;
        changeValueRef.current = flushValue;
        // Commit immediately and prevent a later debounced commit from firing again.
        debounceNotifyChange.cancel();
        (_a = onChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onChangeRef, flushValue);
    });
    (0, spring_ui_1.useDepsChange)(() => {
        parentValueRef.current = value;
        if (inputValue.current === value) {
            // Already in sync with parent, so any pending parent sync is stale.
            debounceSyncParentValue.cancel();
            return;
        }
        if (isInputProtected()) {
            // User edits are in progress; keep the local value as the visible value.
            debounceSyncParentValue.cancel();
            return;
        }
        if (inputValue.current !== '' && value === '') {
            // External clear should be reflected immediately without forcing a render.
            syncInputValue(value, false);
            return;
        }
        // Clean input can follow parent changes, but debounce to avoid flicker.
        debounceSyncParentValue();
    }, [value]);
    const setInputValue = (0, spring_ui_1.useEventCallback)((nextValue, options = {}) => {
        if (!isDirtyRef.current && nextValue === changeValueRef.current) {
            // Ignore same-value updates so focus/blur does not create dirty state.
            return;
        }
        if (nextValue !== changeValueRef.current) {
            // Mark dirty only when the user actually changes the current local value.
            isDirtyRef.current = true;
        }
        changeValueRef.current = nextValue;
        // Local input edits should cancel delayed parent-to-input syncing.
        debounceSyncParentValue.cancel();
        setInputValueState(nextValue);
        if (options.flush) {
            // Used for selections or actions that must notify the parent right away.
            flushInputValue(nextValue);
            if (!isFocusedRef.current) {
                isDirtyRef.current = false;
            }
            return;
        }
        if (!shouldDebounceOnChange) {
            // Default behavior: notify parent immediately on every local change.
            flushInputValue(nextValue);
            if (!isFocusedRef.current) {
                isDirtyRef.current = false;
            }
            return;
        }
        // Debounced mode: update UI now, notify parent later or on blur.
        debounceNotifyChange();
    });
    const focusInput = (0, spring_ui_1.useEventCallback)(() => {
        isFocusedRef.current = true;
        // Avoid applying a pending parent sync while the user starts editing.
        debounceSyncParentValue.cancel();
    });
    const blurInput = (0, spring_ui_1.useEventCallback)(() => {
        if (isDirtyRef.current) {
            // Commit the user's last local value before leaving the field.
            flushInputValue();
        }
        else if (inputValue.current !== parentValueRef.current) {
            // If nothing was edited, reconcile display with the latest parent value.
            syncInputValue(parentValueRef.current);
        }
        isFocusedRef.current = false;
        isDirtyRef.current = false;
    });
    return {
        inputValue: inputValue.current,
        setInputValue,
        focusInput,
        blurInput,
        flushInputValue,
    };
};
exports.useDebouncedFieldState = useDebouncedFieldState;
//# sourceMappingURL=useDebouncedFieldState.js.map