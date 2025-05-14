import dedent from "dedent";
import { SyntaxHighlighter } from "../atoms/syntax-highlighter";

const code = dedent`
  import config from "@gurja/eslint-config";
  import react from "@gurja/eslint-config/react";

  export default config(
    react({ vite: true }),
    // any other ESLint config you'd want to add as well
  );
`;

export function EslintConfigCode() {
  return <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>;
}
