import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../atoms/button";
import { ExternalLink } from "../atoms/external-link";
import { LinkedInLogo } from "../atoms/linkedin-logo.svg";
import { SectionContainer } from "../atoms/section-container";
import { SectionTitle } from "../molecules/section-title";

export function CallToActionSection() {
  return (
    <SectionContainer id="contact">
      <SectionTitle number={4} className="from-whatsapp to-linkedin">
        Vamos conversar?
      </SectionTitle>
      <p className="w-full text-center text-pretty">
        Se você curtiu meu trabalho e acredita que posso agregar ao seu time,
        entre em contato.
        <br /> Estou aberto a oportunidades e pronto pra encarar novos desafios.
      </p>
      <div className="mx-auto mt-10 flex w-fit items-center justify-center gap-3 max-sm:flex-col max-sm:items-stretch">
        <Button
          asChild
          className="hover:bg-whatsapp bg-green-700 hover:text-white"
        >
          <ExternalLink
            href="https://wa.me/5521971237912"
            className="no-underline"
          >
            <SiWhatsapp className="size-6" /> WhatsApp
          </ExternalLink>
        </Button>
        <Button
          asChild
          className="bg-linkedin hover:bg-blue-500 hover:text-white"
        >
          <ExternalLink
            href="https://linkedin.com/in/leogurja"
            className="no-underline"
          >
            <LinkedInLogo className="size-6" /> LinkedIn
          </ExternalLink>
        </Button>
        <Button asChild intent="secondary">
          <ExternalLink
            href="mailto:leo@gurgel.io"
            className="no-underline hover:text-black"
          >
            <EnvelopeSimple className="size-6" /> Email
          </ExternalLink>
        </Button>
      </div>
    </SectionContainer>
  );
}
