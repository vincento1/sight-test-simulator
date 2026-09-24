import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  questions as bank,
  DIFFICULTY_LABEL,
  type Difficulty,
  type Question,
} from "@/data/questions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Simulador de Prova | Sistema Visual" },
      {
        name: "description",
        content:
          "Simulado de 20 questões sorteadas de um banco de 50 sobre o sistema visual, com gabarito comentado e correção imediata.",
      },
      { property: "og:title", content: "Simulador de Prova | Sistema Visual" },
      {
        property: "og:description",
        content:
          "Simulado de 20 questões sorteadas de um banco de 50 sobre o sistema visual, com gabarito comentado e correção imediata.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Simulador,
});

const LETTERS = ["A", "B", "C", "D", "E"];
const QUIZ_SIZE = 20;

const DIFFICULTIES: Difficulty[] = ["facil", "media", "dificil"];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

type Screen = "start" | "quiz" | "result";

function Simulador() {
  const [screen, setScreen] = useState<Screen>("start");
  const [subject, setSubject] = useState<"todos" | "visual">("todos");
  const [levels, setLevels] = useState<Difficulty[]>(DIFFICULTIES);
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [current, setCurrent] = useState(0);

  const pool = useMemo(
    () =>
      bank.filter(
        (q) =>
          (subject === "todos" || q.subject === subject) &&
          levels.includes(q.difficulty),
      ),
    [subject, levels],
  );

  const counts = useMemo(() => {
    const c: Record<Difficulty, number> = { facil: 0, media: 0, dificil: 0 };
    for (const q of bank) c[q.difficulty]++;
    return c;
  }, []);

  function toggleLevel(level: Difficulty) {
    setLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level],
    );
  }

  function start() {
    setQuiz(shuffle(pool).slice(0, QUIZ_SIZE));
    setAnswers({});
    setCurrent(0);
    setScreen("quiz");
  }

  function answer(qid: number, index: number) {
    if (answers[qid] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [qid]: index }));
  }

  const score = quiz.filter((q) => answers[q.id] === q.answer).length;

  if (screen === "start") {
    return (
      <Shell>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Roteiro 2 — Visão
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Simulador de Prova
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            20 questões sorteadas de um banco de 50, com correção imediata e
            gabarito comentado.
          </p>
        </header>

        <section className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold">Assunto</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <ChoiceCard
              active={subject === "todos"}
              onClick={() => setSubject("todos")}
              title="Todos os assuntos"
              subtitle={`${bank.length} questões disponíveis`}
            />
            <ChoiceCard
              active={subject === "visual"}
              onClick={() => setSubject("visual")}
              title="Sistema Visual"
              subtitle="Anatomia e vias da visão"
            />
          </div>

          <h2 className="mt-8 text-lg font-semibold">Nível de dificuldade</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {DIFFICULTIES.map((level) => {
              const active = levels.includes(level);
              return (
                <button
                  key={level}
                  type="button"
                  onClick={() => toggleLevel(level)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {DIFFICULTY_LABEL[level]} ({counts[level]})
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              {pool.length} questões no sorteio · prova com{" "}
              {Math.min(QUIZ_SIZE, pool.length)} questões
            </p>
            <button
              type="button"
              disabled={pool.length === 0}
              onClick={start}
              className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              Iniciar prova
            </button>
          </div>
        </section>
      </Shell>
    );
  }

  if (screen === "quiz") {
    const q = quiz[current];
    const chosen = answers[q.id];
    const answered = chosen !== undefined;

    return (
      <Shell>
        <div className="mb-6 flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Questão {current + 1} de {quiz.length}
          </span>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
            {DIFFICULTY_LABEL[q.difficulty]}
          </span>
        </div>

        <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${((current + 1) / quiz.length) * 100}%` }}
          />
        </div>

        <article className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
          <p className="text-lg leading-relaxed">{q.statement}</p>

          <div className="mt-6 space-y-3">
            {q.options.map((opt, i) => {
              const isCorrect = i === q.answer;
              const isChosen = chosen === i;
              let style =
                "border-border bg-card hover:border-primary hover:bg-secondary";
              if (answered && isCorrect)
                style = "border-success bg-success-soft text-foreground";
              else if (answered && isChosen)
                style = "border-error bg-error-soft text-foreground";
              else if (answered) style = "border-border bg-card opacity-60";

              return (
                <button
                  key={i}
                  type="button"
                  disabled={answered}
                  onClick={() => answer(q.id, i)}
                  className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-colors ${style}`}
                >
                  <span
                    className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                      answered && isCorrect
                        ? "bg-success text-success-foreground"
                        : answered && isChosen
                          ? "bg-error text-error-foreground"
                          : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {LETTERS[i]}
                  </span>
                  <span className="text-sm leading-relaxed">{opt}</span>
                </button>
              );
            })}
          </div>

          {answered && (
            <div className="mt-6 rounded-xl border bg-surface p-5">
              <p
                className={`text-sm font-bold ${
                  chosen === q.answer ? "text-success" : "text-error"
                }`}
              >
                {chosen === q.answer
                  ? "Resposta correta!"
                  : `Resposta incorreta — a correta é ${LETTERS[q.answer]}.`}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {q.explanation}
              </p>
            </div>
          )}
        </article>

        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="rounded-xl border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary disabled:opacity-40"
          >
            Anterior
          </button>
          {current === quiz.length - 1 ? (
            <button
              type="button"
              onClick={() => setScreen("result")}
              className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Finalizar prova
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCurrent((c) => c + 1)}
              className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Próxima
            </button>
          )}
        </div>
      </Shell>
    );
  }

  const pct = Math.round((score / quiz.length) * 100);

  return (
    <Shell>
      <header className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Resultado
        </p>
        <h1 className="mt-3 text-5xl font-bold">
          {score}/{quiz.length}
        </h1>
        <p className="mt-2 text-muted-foreground">{pct}% de acerto</p>
      </header>

      <div className="space-y-3">
        {quiz.map((q, i) => {
          const chosen = answers[q.id];
          const ok = chosen === q.answer;
          return (
            <div
              key={q.id}
              className={`rounded-xl border p-5 ${
                ok ? "border-success bg-success-soft" : "border-error bg-error-soft"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-semibold">
                <span>Questão {i + 1}</span>
                <span className={ok ? "text-success" : "text-error"}>
                  {ok ? "Acertou" : "Errou"}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed">{q.statement}</p>
              <p className="mt-3 text-sm">
                <strong>Gabarito {LETTERS[q.answer]}:</strong> {q.options[q.answer]}
              </p>
              {!ok && chosen !== undefined && (
                <p className="mt-1 text-sm text-muted-foreground">
                  Você marcou {LETTERS[chosen]}: {q.options[chosen]}
                </p>
              )}
              {!ok && chosen === undefined && (
                <p className="mt-1 text-sm text-muted-foreground">Sem resposta.</p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <button
          type="button"
          onClick={start}
          className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Nova prova
        </button>
        <button
          type="button"
          onClick={() => setScreen("start")}
          className="rounded-xl border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Mudar filtros
        </button>
      </div>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto w-full max-w-3xl">{children}</div>
    </main>
  );
}

function ChoiceCard({
  active,
  onClick,
  title,
  subtitle,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  subtitle: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border p-4 text-left transition-colors ${
        active
          ? "border-primary bg-secondary"
          : "border-border bg-card hover:bg-secondary"
      }`}
    >
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
    </button>
  );
}
