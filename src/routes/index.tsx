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
      { title: "MedQuest | Simulador de Prova" },
      {
        name: "description",
        content:
          "Simulador MedQuest: 20 questões sorteadas de 150 sobre sistemas visual, somatossensorial e auditivo, com gabarito comentado.",
      },
      { property: "og:title", content: "MedQuest | Simulador de Prova" },
      {
        property: "og:description",
        content:
          "Simulador MedQuest: 20 questões sorteadas de 150 sobre sistemas visual, somatossensorial e auditivo, com gabarito comentado.",
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

type Screen = "intro" | "start" | "quiz" | "result";

function Simulador() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [subject, setSubject] = useState<"todos" | "visual" | "somato" | "auditivo">("todos");
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

  if (screen === "intro") {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero px-6 text-primary-foreground">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent" />
        <div className="pointer-events-none absolute -bottom-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-wine-glow/30 blur-3xl" />
        <div className="relative flex max-w-2xl flex-col items-center text-center">
          <h1 className="text-7xl font-medium tracking-tight sm:text-8xl md:text-9xl">
            MedQuest
          </h1>
          <p className="mt-2 text-lg font-light text-primary-foreground/85 sm:text-xl">
            4º semestre — feito por Cezar
          </p>
          <div className="mt-8 h-px w-24 bg-primary-foreground/30" />
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-primary-foreground/80 sm:text-lg">
            Um simulador de prova com {bank.length} questões baseadas nos roteiros
            de estudo. Cada prova sorteia 20 questões, com correção imediata e
            gabarito comentado para você revisar Sistema Visual e Sistema
            Somatossensorial.
          </p>
          <button
            type="button"
            onClick={() => setScreen("start")}
            className="mt-12 rounded-md bg-primary-foreground px-16 py-4 text-3xl font-medium text-wine shadow-2xl shadow-wine-deep/60 transition-transform hover:-translate-y-0.5 sm:text-4xl"
          >
            Iniciar
          </button>
        </div>
      </main>
    );
  }

  if (screen === "start") {
    return (
      <Shell>
        <header className="mb-10">
          <button type="button" onClick={() => setScreen("intro")} className="text-xs font-semibold uppercase tracking-[0.22em] text-primary hover:opacity-70">
            ← MedQuest
          </button>
          <h1 className="mt-3 text-4xl font-medium sm:text-5xl">
            Monte sua prova
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            20 questões sorteadas do banco, com correção imediata e gabarito
            comentado.
          </p>
        </header>

        <section className="rounded-lg border bg-card p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold">Assunto</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
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
            <ChoiceCard
              active={subject === "somato"}
              onClick={() => setSubject("somato")}
              title="Sistema Somatossensorial"
              subtitle="Receptores, vias e dor"
            />
            <ChoiceCard
              active={subject === "auditivo"}
              onClick={() => setSubject("auditivo")}
              title="Sistema Auditivo"
              subtitle="Orelha, cóclea e vias auditivas"
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
                  className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
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
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              Iniciar prova
            </button>
          </div>
        </section>
      </Shell>
    );
  }

  if (screen === "quiz" && quiz[current]) {
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

        <article className="rounded-lg border bg-card p-6 shadow-sm sm:p-8">
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
                  className={`flex w-full items-start gap-3 rounded-md border p-4 text-left transition-colors ${style}`}
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
            <div className="mt-6 rounded-md border bg-surface p-5">
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
            className="rounded-md border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary disabled:opacity-40"
          >
            Anterior
          </button>
          {current === quiz.length - 1 ? (
            <button
              type="button"
              onClick={() => setScreen("result")}
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Finalizar prova
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCurrent((c) => c + 1)}
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
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
        <h1 className="mt-3 text-6xl font-medium">
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
              className={`rounded-md border p-5 ${
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
          className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Nova prova
        </button>
        <button
          type="button"
          onClick={() => setScreen("start")}
          className="rounded-md border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
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
      <div className="pointer-events-none fixed inset-x-0 top-0 h-1.5 bg-hero" />
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
      className={`rounded-md border p-4 text-left transition-colors ${
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
