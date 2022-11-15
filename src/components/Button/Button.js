import React from "react";

export default function Button({ value, icon, style, active, disabled }) {
  return (
    <button
      className={`${style && "btn btn-"+style} ${active && "active"}`}
      disabled={disabled ? "disabled" : ""}
    >
      {icon && <i className={`bi bi-${icon}`}></i>}
      {value}
    </button>
  );
}
