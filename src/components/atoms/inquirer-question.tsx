interface InquirerQuestionProps {
  question: string;
  answer: string;
  current?: boolean;
}

export function InquirerQuestion({
  question,
  answer,
  current = false,
}: InquirerQuestionProps) {
  return (
    <p className="flex gap-x-2">
      {current ? (
        <span className="text-blue-500">?</span>
      ) : (
        <span className="text-green-500">✔</span>
      )}
      <strong>{question}</strong>
      <span className={current ? "text-stone-200" : "text-cyan-500"}>
        {answer}
      </span>
    </p>
  );
}
