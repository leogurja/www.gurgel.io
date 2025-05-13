import type { ComponentProps } from "react";
import { Light } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import shell from "react-syntax-highlighter/dist/esm/languages/hljs/shell";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

Light.registerLanguage("javascript", js);
Light.registerLanguage("shell", shell);

export function SyntaxHighlighter(props: ComponentProps<typeof Light>) {
  return (
    <div className="font-fira-code flex size-full h-40 items-center justify-center overflow-hidden rounded-2xl bg-[rgb(43,43,43)] text-xs transition-transform group-hover:scale-102 md:h-auto md:w-1/3 md:text-sm">
      <Light style={darcula} {...props} />
    </div>
  );
}
