"use client";
import { Suspense } from "react";

import { ExternalLink } from "./external-link";

export function FooterCopyright() {
  return (
    <p className="text-center text-sm/6 text-stone-400 max-md:mt-8 md:order-first">
      <ExternalLink href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
        CC BY-NC-SA 4.0
      </ExternalLink>{" "}
      <Suspense fallback="20xx">
        <FooterYear />
      </Suspense>{" "}
      © Leonardo Gurgel
    </p>
  );
}

function FooterYear() {
  return new Date().getFullYear();
}
