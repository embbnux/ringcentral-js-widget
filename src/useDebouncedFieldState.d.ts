type SetInputValueOptions = {
    flush?: boolean;
};
type UseDebouncedFieldStateOptions<T> = {
    value: T;
    onChange?: (value: T) => void;
    debounceMs?: number;
    shouldDebounceOnChange?: boolean;
};
type UseDebouncedFieldStateResult<T> = {
    inputValue: T;
    setInputValue: (nextValue: T, options?: SetInputValueOptions) => void;
    focusInput: () => void;
    blurInput: () => void;
    flushInputValue: (nextValue?: T) => void;
};
export declare const useDebouncedFieldState: <T = string>({ value, onChange, debounceMs, shouldDebounceOnChange, }: UseDebouncedFieldStateOptions<T>) => UseDebouncedFieldStateResult<T>;
export {};
