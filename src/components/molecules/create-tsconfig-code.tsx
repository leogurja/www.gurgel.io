"use client";

import { useEffect, useState } from "react";
import { useIntersectionOnce } from "@/lib/hooks/useIntersectionOnce";
import { InquirerQuestion } from "../atoms/inquirer-question";

const codeFrames = [
	null,
	<>
		<p className="flex gap-x-2">
			<span className="text-blue-500">?</span>
			<strong>Select a framework</strong>
			<span className="text-stone-200">(Use arrow keys)</span>
		</p>
		<p className="text-blue-400">❯ React</p>
		<p className="ml-4.5">Next.js</p>
		<p className="ml-4.5">None</p>
	</>,
	<>
		<InquirerQuestion question="Select a framework" answer="React" />
		<InquirerQuestion question="Is it a library?" answer="(y/N)" current />
	</>,
	<>
		<InquirerQuestion question="Select a framework" answer="React" />
		<InquirerQuestion question="Is this a library?" answer="Yes" />
		<InquirerQuestion
			question="Is this library being used inside a monorepo?"
			answer="(y/N)"
			current
		/>
	</>,
	<>
		<InquirerQuestion question="Select a framework" answer="React" />
		<InquirerQuestion question="Is this a library?" answer="Yes" />
		<InquirerQuestion
			question="Is this library being used inside a monorepo?"
			answer="Yes"
		/>
		<InquirerQuestion
			question="Choose a filename for the config"
			answer="(tsconfig.json)"
			current
		/>
	</>,
	<>
		<InquirerQuestion question="Select a framework" answer="React" />
		<InquirerQuestion question="Is this a library?" answer="Yes" />
		<InquirerQuestion
			question="Is this library being used inside a monorepo?"
			answer="Yes"
		/>
		<InquirerQuestion
			question="Choose a filename for the config"
			answer="tsconfig.json"
		/>
	</>,
];

export function CreateTsConfigCode() {
	const [count, setCount] = useState(0);
	const [ref, didIntersect] = useIntersectionOnce({
		rootMargin: "0px 0px",
	});

	useEffect(() => {
		if (!didIntersect) return;
		const intervalId = setInterval(() => {
			setCount((a) => a + 1);
		}, 1500);

		return () => clearInterval(intervalId);
	}, [didIntersect]);

	return (
		<code
			className="flex size-full h-40 flex-col gap-1 overflow-hidden rounded-2xl bg-stone-800 p-6 font-fira-code text-xs transition-transform group-hover:scale-102 md:h-auto md:w-1/3 md:text-sm"
			ref={ref}
		>
			<p className="flex flex-nowrap gap-x-2">
				<span className="text-green-500">$</span>
				<span className="text-blue-500">npm</span>
				<span className="text-cyan-500">create</span>
				<span>@gurja/tsconfig</span>
			</p>
			<br />
			{codeFrames[count % codeFrames.length]}
		</code>
	);
}
