import React from "react";
import { DataFetchUIComponents } from "../../../types/providers";

export const DEFAULT_UI_COMPONENTS: DataFetchUIComponents = {
  search: (options) => (
    <>
      {options.label && <p>{options.label}</p>}
      <input
        name={options.name}
        id={options.id}
        type="search"
        placeholder={options.placeholder}
        onChange={(e) => {
          if (options.onValueChange) options.onValueChange(e.target.value);
        }}
      />
    </>
  ),
  textInput: (options) => (
    <>
      {options.label && <p>{options.label}</p>}
      <input
        name={options.name}
        id={options.id}
        type="text"
        placeholder={options.placeholder}
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
        type="text"
        placeholder={options.placeholder}
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
        type="number"
        placeholder={options.placeholder}
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
        type="number"
        placeholder={options.placeholder}
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
      <select name={options.name} id={options.id}>
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
        type="checkbox"
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
        type="checkbox"
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
        type="color"
        placeholder={options.placeholder}
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
        type="password"
        placeholder={options.placeholder}
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
        type="file"
        placeholder={options.placeholder}
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
};
