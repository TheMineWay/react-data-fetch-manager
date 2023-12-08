type BaseProps<T> = {
  onValueChange?: (value: T) => void;
  value?: T;
  defaultValue?: T;
  name?: string;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  onBlur?: (
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLButtonElement,
      Element
    >
  ) => void;
};
type InputProps<T = string> = {
  placeholder?: string;
  label?: string;
} & BaseProps<T>;

type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text?: string;
  icon?: JSX.Element;
} & Omit<BaseProps<unknown>, "onValueChange" | "value" | "defaultValue">;

type SelectProps<T extends string | number> = {
  options?: { value: T; label: string; key?: string }[];
} & InputProps<T[]>;

export type DataFetchUIComponents = {
  // Input
  search: (
    options: InputProps & { onSearch?: (value?: string) => void }
  ) => JSX.Element;
  textInput: (options: InputProps) => JSX.Element;
  textAreaInput: (options: InputProps) => JSX.Element;
  numberInput: (options: InputProps<number>) => JSX.Element;
  dateTimeInput: (options: InputProps<Date>) => JSX.Element;
  selectInput: (options: SelectProps<string | number>) => JSX.Element;
  switch: (options: Omit<InputProps<boolean>, "placeholder">) => JSX.Element;
  checkbox: (options: Omit<InputProps<boolean>, "placeholder">) => JSX.Element;
  colorInput: (options: InputProps) => JSX.Element;
  passwordInput: (options: InputProps) => JSX.Element;
  fileInput: (options: InputProps) => JSX.Element;

  // Button
  button: (options: ButtonProps) => JSX.Element;
};
