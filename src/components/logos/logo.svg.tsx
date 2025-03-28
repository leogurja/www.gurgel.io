import type { ComponentProps } from "react";

export function Logo(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="1rem"
      height="1rem"
      {...props}
    >
      <title>Leonardo Gurgel</title>
      <text
        x="17"
        y="62"
        fill="currentColor"
        font-family="Montserrat"
        font-size="100"
        font-weight="600"
        text-anchor="middle"
        transform="translate(12 15)"
      >
        L
      </text>
      <text
        x="50"
        y="79"
        fill="currentColor"
        font-family="Montserrat"
        font-size="100"
        font-weight="600"
        text-anchor="middle"
        transform="translate(12 15)"
      >
        G
      </text>
    </svg>
  );
}
