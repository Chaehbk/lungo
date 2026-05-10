import { Field, inputClass } from "@/components/ui";
import type { IntakeQuestion, IntakeQuestionSection } from "@/lib/types";

function QuestionInput({ question }: { question: IntakeQuestion }) {
  if (question.type === "textarea") {
    return (
      <textarea
        name={question.name}
        required={question.required}
        className={inputClass}
        rows={question.rows ?? 3}
        placeholder={question.placeholder}
      />
    );
  }

  if (question.type === "select") {
    return (
      <select name={question.name} required={question.required} className={inputClass} defaultValue="">
        <option value="" disabled>
          Select an option
        </option>
        {question.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  if (question.type === "checkbox") {
    return (
      <label className="flex gap-3 rounded-2xl border border-ink/10 p-4 text-sm text-moss">
        <input type="checkbox" name={question.name} className="mt-1 h-4 w-4 rounded border-ink/20" />
        <span>{question.label}</span>
      </label>
    );
  }

  return (
    <input
      name={question.name}
      type={question.type}
      required={question.required}
      className={inputClass}
      placeholder={question.placeholder}
    />
  );
}

export function IntakeForm({ sections }: { sections: IntakeQuestionSection[] }) {
  return (
    <form action="/intake/thank-you" method="get" className="space-y-8">
      {sections.map((section) => (
        <section key={section.id}>
          <h2 className="text-xl font-semibold">{section.title}</h2>
          {section.description ? <p className="mt-2 text-sm leading-6 text-moss">{section.description}</p> : null}
          <div className={`mt-5 grid gap-5 ${section.columns === 2 ? "sm:grid-cols-2" : ""}`}>
            {section.questions.map((question) =>
              question.type === "checkbox" ? (
                <QuestionInput key={question.name} question={question} />
              ) : (
                <Field key={question.name} label={question.label} hint={question.hint}>
                  <QuestionInput question={question} />
                </Field>
              ),
            )}
          </div>
        </section>
      ))}

      <button type="submit" className="w-full rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-moss sm:w-auto">
        Submit intake preview
      </button>
    </form>
  );
}
