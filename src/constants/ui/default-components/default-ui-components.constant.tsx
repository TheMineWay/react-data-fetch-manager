import React, { useRef } from "react";
import { DataFetchUIComponents } from "../../../types/providers";

export const DEFAULT_UI_COMPONENTS: DataFetchUIComponents = {
  search: (options) => {
    const ref = useRef<HTMLInputElement>(null);

    return (
      <>
        {options.label && <p>{options.label}</p>}
        <input
          ref={ref}
          name={options.name}
          id={options.id}
          value={options.value}
          defaultValue={options.defaultValue}
          type="search"
          placeholder={options.placeholder}
          onBlur={options.onBlur}
          disabled={options.disabled || options.loading}
          onChange={(e) => {
            if (options.onValueChange) options.onValueChange(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (options.onSearch) options.onSearch(ref.current?.value);
          }}
        >
          Search
        </button>
      </>
    );
  },
  textInput: (options) => (
    <>
      {options.label && <p>{options.label}</p>}
      <input
        name={options.name}
        id={options.id}
        value={options.value}
        defaultValue={options.defaultValue}
        type="text"
        placeholder={options.placeholder}
        onBlur={options.onBlur}
        disabled={options.disabled || options.loading}
        onChange={(e) => {
          if (options.onValueChange) options.onValueChange(e.target.value);
        }}
      />
    </>
  ),
  textAreaInput: (options) => (
    <>
      {options.label && <p>{options.label}</p>}
      <input
        name={options.name}
        id={options.id}
        value={options.value}
        defaultValue={options.defaultValue}
        type="text"
        placeholder={options.placeholder}
        onBlur={options.onBlur}
        disabled={options.disabled || options.loading}
        onChange={(e) => {
          if (options.onValueChange) options.onValueChange(e.target.value);
        }}
      />
    </>
  ),
  numberInput: (options) => (
    <>
      {options.label && <p>{options.label}</p>}
      <input
        name={options.name}
        id={options.id}
        value={options.value}
        defaultValue={options.defaultValue}
        type="number"
        placeholder={options.placeholder}
        onBlur={options.onBlur}
        disabled={options.disabled || options.loading}
        onChange={(e) => {
          if (options.onValueChange)
            options.onValueChange(+e.target.value ?? null);
        }}
      />
    </>
  ),
  dateTimeInput: (options) => (
    <>
      {options.label && <p>{options.label}</p>}
      <input
        name={options.name}
        id={options.id}
        value={options.value?.getTime()}
        defaultValue={options.defaultValue?.getTime()}
        type="date"
        placeholder={options.placeholder}
        onBlur={options.onBlur}
        disabled={options.disabled || options.loading}
        onChange={(e) => {
          if (options.onValueChange)
            options.onValueChange(new Date(e.target.value));
        }}
      />
    </>
  ),
  selectInput: (options) => (
    <>
      {options.label && <p>{options.label}</p>}
      <select
        name={options.name}
        id={options.id}
        onBlur={options.onBlur}
        disabled={options.disabled || options.loading}
        value={options.value?.map((e) => e.toString())}
        defaultValue={options.defaultValue?.map((e) => e.toString())}
      >
        {options.options?.map((opt) => (
          <option key={opt.key} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </>
  ),
  switch: (options) => (
    <>
      {options.label && <p>{options.label}</p>}
      <input
        name={options.name}
        id={options.id}
        checked={options.value}
        defaultChecked={options.defaultValue}
        type="checkbox"
        onBlur={options.onBlur}
        disabled={options.disabled || options.loading}
        onChange={(e) => {
          if (options.onValueChange) options.onValueChange(!!e.target.value);
        }}
      />
    </>
  ),
  checkbox: (options) => (
    <>
      {options.label && <p>{options.label}</p>}
      <input
        name={options.name}
        id={options.id}
        checked={options.value}
        defaultChecked={options.defaultValue}
        type="checkbox"
        onBlur={options.onBlur}
        disabled={options.disabled || options.loading}
        onChange={(e) => {
          if (options.onValueChange) options.onValueChange(!!e.target.value);
        }}
      />
    </>
  ),
  colorInput: (options) => (
    <>
      {options.label && <p>{options.label}</p>}
      <input
        name={options.name}
        id={options.id}
        value={options.value}
        defaultValue={options.defaultValue}
        type="color"
        onBlur={options.onBlur}
        placeholder={options.placeholder}
        disabled={options.disabled || options.loading}
        onChange={(e) => {
          if (options.onValueChange) options.onValueChange(e.target.value);
        }}
      />
    </>
  ),
  passwordInput: (options) => (
    <>
      {options.label && <p>{options.label}</p>}
      <input
        name={options.name}
        id={options.id}
        value={options.value}
        defaultValue={options.defaultValue}
        type="password"
        onBlur={options.onBlur}
        placeholder={options.placeholder}
        disabled={options.disabled || options.loading}
        onChange={(e) => {
          if (options.onValueChange) options.onValueChange(e.target.value);
        }}
      />
    </>
  ),
  fileInput: (options) => (
    <>
      {options.label && <p>{options.label}</p>}
      <input
        name={options.name}
        id={options.id}
        value={options.value}
        defaultValue={options.defaultValue}
        type="file"
        onBlur={options.onBlur}
        placeholder={options.placeholder}
        disabled={options.disabled || options.loading}
        onChange={(e) => {
          if (options.onValueChange) options.onValueChange(e.target.value);
        }}
      />
    </>
  ),
  button: (options) => (
    <button
      name={options.name}
      id={options.id}
      onBlur={options.onBlur}
      disabled={options.disabled || options.loading}
      onClick={(e) => {
        if (options.onClick) options.onClick(e);
      }}
    >
      <span>
        {options.icon}
        {options.text}
      </span>
    </button>
  ),
  layout: ({ Filters, managedFetch, render }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
      <div>
        <Filters managedFetch={managedFetch} />
      </div>
      {render && <div>{render({ rows: managedFetch.data })}</div>}
    </div>
  ),
};
