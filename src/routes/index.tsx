import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
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
type Subject = Question["subject"];
const SUBJECT_CHOICES: { id: Subject; title: string; subtitle: string }[] = [
  { id: "visual", title: "Sistema Visual", subtitle: "Anatomia e vias da visão" },
  { id: "somato", title: "Sistema Somatossensorial", subtitle: "Receptores, vias e dor" },
  { id: "auditivo", title: "Sistema Auditivo", subtitle: "Orelha, cóclea e vias auditivas" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const item = a[i];
    const swap = a[j];
    if (item !== undefined && swap !== undefined) [a[i], a[j]] = [swap, item];
  }
  return a;
}

type Screen = "intro" | "start" | "quiz" | "result";

function Simulador() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [levels, setLevels] = useState<Difficulty[]>(DIFFICULTIES);
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [current, setCurrent] = useState(0);

  const pool = useMemo(
    () =>
      bank.filter(
        (q) =>
          (subjects.length === 0 || subjects.includes(q.subject)) &&
          levels.includes(q.difficulty),
      ),
    [subjects, levels],
  );

  const counts = useMemo(() => {
    const c: Record<Difficulty, number> = { facil: 0, media: 0, dificil: 0 };
    for (const q of bank) {
      if (subjects.length === 0 || subjects.includes(q.subject)) c[q.difficulty]++;
    }
    return c;
  }, [subjects]);

  function toggleSubject(subject: Subject) {
    setSubjects((prev) => prev.includes(subject)
      ? prev.filter((item) => item !== subject)
      : [...prev, subject]);
  }

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
           <Button
            type="button"
            onClick={() => setScreen("start")}
             className="mt-12 h-auto rounded-md bg-primary-foreground px-16 py-4 text-3xl font-medium text-wine shadow-2xl shadow-wine-deep/60 transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground/90 sm:text-4xl"
          >
            Iniciar
           </Button>
        </div>
      </main>
    );
  }

  if (screen === "start") {
    return (
      <Shell>
        <header className="mb-10">
           <Button type="button" variant="outline" size="lg" onClick={() => setScreen("intro")} className="gap-2 text-base font-semibold text-primary">
             <ArrowLeft aria-hidden="true" /> Voltar à tela inicial
           </Button>
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
           <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <ChoiceCard
               active={subjects.length === 0}
               onClick={() => setSubjects([])}
              title="Todos os assuntos"
              subtitle={`${bank.length} questões disponíveis`}
            />
             {SUBJECT_CHOICES.map(({ id, title, subtitle }) => (
               <ChoiceCard key={id} active={subjects.includes(id)} onClick={() => toggleSubject(id)}
                 title={title} subtitle={`${bank.filter((q) => q.subject === id).length} questões · ${subtitle}`} />
             ))}
          </div>

          <h2 className="mt-8 text-lg font-semibold">Nível de dificuldade</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {DIFFICULTIES.map((level) => {
              const active = levels.includes(level);
              return (
                 <Button
                  key={level}
                  type="button"
                   variant={active ? "default" : "outline"}
                   aria-pressed={active}
                  onClick={() => toggleLevel(level)}
                   className="h-10"
                >
                  {DIFFICULTY_LABEL[level]} ({counts[level]})
                 </Button>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              {pool.length} questões no sorteio · prova com{" "}
              {Math.min(QUIZ_SIZE, pool.length)} questões
            </p>
             <Button
              type="button"
              disabled={pool.length === 0}
              onClick={start}
               className="h-11 px-6"
            >
              Iniciar prova
             </Button>
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
         <div className="mb-6 flex items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>
            Questão {current + 1} de {quiz.length}
          </span>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
            {DIFFICULTY_LABEL[q.difficulty]}
          </span>
        </div>

         <div className="mb-5 flex justify-end">
           <Button type="button" variant="outline" onClick={() => setScreen("result")} className="text-primary">
             Encerrar prova
           </Button>
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
                 <Button
                  key={i}
                  type="button"
                   variant="outline"
                  disabled={answered}
                  onClick={() => answer(q.id, i)}
                   className={`h-auto min-h-16 w-full items-start justify-start gap-3 whitespace-normal rounded-md border p-4 text-left transition-colors ${style}`}
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
                 </Button>
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
           <Button
            type="button"
             variant="outline"
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
             className="h-11 px-5"
          >
            Anterior
           </Button>
          {current === quiz.length - 1 ? (
             <Button
              type="button"
              onClick={() => setScreen("result")}
               className="h-11 px-6"
            >
              Finalizar prova
             </Button>
          ) : (
             <Button
              type="button"
              onClick={() => setCurrent((c) => c + 1)}
               className="h-11 px-6"
            >
              Próxima
             </Button>
          )}
        </div>
      </Shell>
    );
  }

  const pct = quiz.length ? Math.round((score / quiz.length) * 100) : 0;
  const answeredCount = quiz.filter((q) => answers[q.id] !== undefined).length;

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
        <p className="mt-1 text-sm text-muted-foreground">{answeredCount} de {quiz.length} respondidas</p>
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
         <Button
          type="button"
          onClick={start}
           className="h-11 px-6"
        >
          Nova prova
         </Button>
         <Button
          type="button"
           variant="outline"
          onClick={() => setScreen("start")}
           className="h-11 px-6"
        >
          Mudar filtros
         </Button>
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
    <Button
      type="button"
      variant="outline"
      aria-pressed={active}
      onClick={onClick}
      className={`h-auto min-h-24 w-full flex-col items-start justify-center gap-0 whitespace-normal rounded-md border p-4 text-left transition-colors ${
        active
          ? "border-primary bg-secondary"
          : "border-border bg-card hover:bg-secondary"
      }`}
    >
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
    </Button>
  );
}
