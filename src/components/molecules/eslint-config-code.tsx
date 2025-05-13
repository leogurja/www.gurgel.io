import dedent from "dedent";
import { SyntaxHighlighter } from "../atoms/syntax-highlighter";

const code = dedent`
  import { config, configs } from "@gurja/eslint-config";

  export default config(
    configs.react({ vite: true }),
    // any other ESLint config you'd want to add as well
  );
`;

export function EslintConfigCode() {
  return <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>;
}
