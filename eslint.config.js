import { config, configs } from "@gurja/eslint-config";

export default config(configs.next, {
  rules: {
    "import-x/no-namespace": "off",
    "import-x/no-deprecated": "off",
    "import-x/no-duplicates": "off",
    "import-x/no-self-import": "off",
    "import-x/no-rename-default": "off",
    "import-x/namespace": "off",
    "import-x/default": "off",
    "import-x/no-named-as-default": "off",
    "import-x/no-named-as-default-member": "off",
  },
});
