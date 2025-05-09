import type { Project } from "@/lib/constants/featured-projects";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Button } from "../atoms/button";
import { MotionInView } from "../atoms/motion-in-view";
import { Badge } from "../molecules/badge";

export function ProjectCard({
  title,
  site,
  aside,
  description,
  tags,
  repo,
  className,
}: Project) {
  return (
    <MotionInView
      className={twMerge(
        "motion-safe:even:motion-preset-slide-left motion-safe:odd:motion-preset-slide-right motion-ease-spring-bouncy",
        "group flex flex-col gap-3 transition-transform odd:md:flex-row even:md:flex-row-reverse",
        className,
      )}
      as="article"
    >
      {aside.type === "image" ? (
        <a
          href={site ?? "#"}
          target="_blank"
          rel="noreferrer"
          className="h-40 overflow-hidden rounded-2xl transition-transform group-hover:scale-102 md:h-auto md:w-1/3"
        >
          <Image
            src={aside.image.src}
            placeholder="blur"
            blurDataURL={aside.image.blurDataURL ?? ""}
            alt={site ?? ""}
            className="h-auto scale-102 object-cover transition-transform group-hover:scale-105"
            width={640}
            height={360}
            quality={100}
          />
        </a>
      ) : (
        aside.code
      )}
      <div className="flex flex-col justify-between gap-3 rounded-2xl bg-stone-900 p-4 md:w-2/3">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mb-2 text-pretty text-stone-300">{description}</p>
        <ul className="mb-3 flex gap-2">
          {tags.map((tag) => (
            <Badge key={tag} name={tag} />
          ))}
        </ul>
        <footer className="flex gap-4">
          {repo && (
            <Button asChild intent="link">
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <SiGithub className="size-6" /> <span>Github</span>
              </a>
            </Button>
          )}
          {site && (
            <Button asChild intent="link">
              <a
                href={site}
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <ArrowSquareOut className="size-6" /> Site
              </a>
            </Button>
          )}
        </footer>
      </div>
    </MotionInView>
  );
}
