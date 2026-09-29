import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ChevronRight, BookOpen, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  questions as bank,
  DIFFICULTY_LABEL,
  type Difficulty,
  type Question,
} from "@/data/questions";
import { TrackSelectView } from "@/components/TrackSelectView";
import { HabilidadesMenuView } from "@/components/HabilidadesMenuView";
import { CranialNervesView } from "@/components/CranialNervesView";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MedQuest | Morfofuncional e Habilidades Clínicas" },
      {
        name: "description",
        content:
          "MedQuest: Simulador de 300 questões de Morfofuncional e Guia Semiológico Prático dos 12 Pares de Nervos Cranianos.",
      },
      { property: "og:title", content: "MedQuest | Morfofuncional e Habilidades Clínicas" },
      {
        property: "og:description",
        content:
          "MedQuest: Simulador de 300 questões de Morfofuncional e Guia Semiológico Prático dos 12 Pares de Nervos Cranianos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Simulador,
});

const LETTERS = ["A", "B", "C", "D", "E"];
const QUIZ_SIZES = [20, 30, 50, 100] as const;

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

type Screen =
  | "intro"
  | "track_select"
  | "start"
  | "quiz"
  | "result"
  | "habilidades_menu"
  | "nervos_grid";

function Simulador() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [levels, setLevels] = useState<Difficulty[]>(DIFFICULTIES);
  const [quizSize, setQuizSize] = useState<number>(20);
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [current, setCurrent] = useState(0);

  const pool = useMemo(
    () =>
      bank.filter(
        (q) =>
          (subjects.length === 0 || subjects.includes(q.subject)) && levels.includes(q.difficulty),
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

  // Se o sorteio disponível ficar menor que o tamanho escolhido,
  // volta automaticamente para o maior tamanho ainda possível.
  useEffect(() => {
    if (pool.length >= quizSize) return;
    const valid = [...QUIZ_SIZES].reverse().find((size) => size <= pool.length);
    if (valid) setQuizSize(valid);
  }, [pool.length, quizSize]);

  function toggleSubject(subject: Subject) {
    setSubjects((prev) =>
      prev.includes(subject) ? prev.filter((item) => item !== subject) : [...prev, subject],
    );
  }

  function toggleLevel(level: Difficulty) {
    setLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level],
    );
  }

  function start() {
    setQuiz(shuffle(pool).slice(0, Math.min(quizSize, pool.length)));
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
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#2a0910] via-[#1a050a] to-[#110205] px-4 py-12 text-primary-foreground sm:px-6 lg:px-8">
        {/* Ambient background glow effects identical to TrackSelectView & CranialNervesView */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-900/20 blur-[140px]" />
          <div className="absolute bottom-10 right-1/4 h-[30rem] w-[30rem] rounded-full bg-rose-950/25 blur-[130px]" />
        </div>

        {/* Top subtle highlight border */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />

        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          {/* MedQuest Heading with degrade */}
          <h1 className="text-7xl font-medium tracking-tight font-sans bg-gradient-to-b from-white via-rose-50 to-rose-200/80 bg-clip-text text-transparent drop-shadow-sm sm:text-8xl md:text-9xl">
            MedQuest
          </h1>

          {/* Subtitle with matching pearly white degrade underneath MedQuest */}
          <p className="mt-3 text-xl font-light tracking-wide bg-gradient-to-b from-white via-rose-50 to-rose-200/90 bg-clip-text text-transparent sm:text-2xl md:text-3xl">
            4º semestre — feito por Cezar
          </p>

          {/* Subtle gradient divider */}
          <div className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-rose-400/40 to-transparent" />

          {/* Description */}
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/75 sm:text-lg">
            Plataforma para ajudar nos estudos: simulado de <strong className="font-semibold text-rose-200">300 questões</strong> de Morfofuncional com gabarito comentado
            e módulo de revisão para <strong className="font-semibold text-rose-200">Habilidades Clínicas</strong> (Neurologia & Nervos Cranianos).
          </p>

          {/* Feature chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-rose-400/20 bg-rose-950/30 px-4 py-2 text-xs sm:text-sm text-rose-200/90 backdrop-blur-md">
              <BookOpen className="size-4 text-rose-400" />
              <span>300 Questões Morfofuncional</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-rose-400/20 bg-rose-950/30 px-4 py-2 text-xs sm:text-sm text-rose-200/90 backdrop-blur-md">
              <Stethoscope className="size-4 text-rose-400" />
              <span>Semiologia dos Nervos Cranianos</span>
            </div>
          </div>

          {/* Iniciar Button with glowing halo and degrade matching MedQuest title */}
          <div className="relative mt-10 group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-white/30 via-rose-200/30 to-rose-400/25 opacity-40 blur-lg transition duration-500 group-hover:opacity-75" />
            <Button
              type="button"
              onClick={() => setScreen("track_select")}
              className="relative h-auto rounded-full border border-white/80 bg-gradient-to-b from-white via-rose-50 to-rose-200/90 px-14 py-4 text-2xl font-bold text-[#1a050a] shadow-2xl shadow-black/40 transition-all duration-300 hover:scale-105 hover:from-white hover:via-white hover:to-rose-100 hover:border-white hover:shadow-rose-900/40 active:scale-95 cursor-pointer sm:text-3xl"
            >
              <span>Iniciar</span>
              <ChevronRight className="size-7 text-[#1a050a] transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </main>
    );
  }

  if (screen === "track_select") {
    return (
      <TrackSelectView
        onBack={() => setScreen("intro")}
        onSelectMorfofuncional={() => setScreen("start")}
        onSelectHabilidades={() => setScreen("habilidades_menu")}
      />
    );
  }

  if (screen === "habilidades_menu") {
    return (
      <HabilidadesMenuView
        onBack={() => setScreen("track_select")}
        onSelectNervosCranianos={() => setScreen("nervos_grid")}
      />
    );
  }

  if (screen === "nervos_grid") {
    return <CranialNervesView onBack={() => setScreen("habilidades_menu")} />;
  }

  if (screen === "start") {
    return (
      <div className="relative min-h-screen bg-gradient-to-b from-[#22070d] via-[#170408] to-[#0f0205] px-4 py-8 text-primary-foreground sm:px-6 lg:px-8">
        {/* Background glow */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute top-10 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-rose-900/15 blur-[140px]" />
        </div>

        <div className="pointer-events-none fixed inset-x-0 top-0 h-1.5 bg-hero" />

        <div className="relative mx-auto max-w-3xl">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setScreen("track_select")}
            className="mb-8 gap-2 border-white/20 bg-white/5 text-sm font-medium text-white/90 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="size-4" /> Voltar à seleção de área
          </Button>

          <header className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">Morfofuncional</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Monte sua prova
            </h1>
            <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              Prova com <span className="text-rose-300">{Math.min(quizSize, pool.length)} questões</span> sorteadas do banco
            </p>
            <p className="mt-1 text-sm text-white/70 leading-relaxed">
              Correção imediata e gabarito comentado em todas as questões.
            </p>
          </header>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl sm:p-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80">Assunto</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <DarkChoiceCard
                active={subjects.length === 0}
                onClick={() => setSubjects([])}
                title="Todos os assuntos"
                subtitle={`${bank.length} questões disponíveis`}
              />
              {SUBJECT_CHOICES.map(({ id, title, subtitle }) => (
                <DarkChoiceCard
                  key={id}
                  active={subjects.includes(id)}
                  onClick={() => toggleSubject(id)}
                  title={title}
                  subtitle={`${bank.filter((q) => q.subject === id).length} questões · ${subtitle}`}
                />
              ))}
            </div>

            <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white/80">Nível de dificuldade</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {DIFFICULTIES.map((level) => {
                const active = levels.includes(level);
                return (
                  <button
                    key={level}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleLevel(level)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${active
                      ? "bg-white text-zinc-950 shadow-md"
                      : "border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                  >
                    {DIFFICULTY_LABEL[level]} ({counts[level]})
                  </button>
                );
              })}
            </div>

            <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white/80">Tamanho da prova</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {QUIZ_SIZES.map((size) => {
                const available = pool.length >= size;
                const active = quizSize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    aria-pressed={active}
                    disabled={!available}
                    onClick={() => setQuizSize(size)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${active
                      ? "bg-white text-zinc-950 shadow-md"
                      : "border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                      } disabled:opacity-30 disabled:pointer-events-none`}
                  >
                    {size} questões
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-base font-medium text-white/80">
                <span className="text-white">{pool.length} questões</span> no sorteio · prova com{" "}
                <span className="text-rose-300 font-semibold">{Math.min(quizSize, pool.length)} questões</span>
              </p>
              <button
                type="button"
                disabled={pool.length === 0}
                onClick={start}
                className="rounded-full bg-white px-8 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/90 disabled:opacity-40 disabled:pointer-events-none"
              >
                Iniciar prova →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === "quiz" && quiz[current]) {
    const q = quiz[current];
    const chosen = answers[q.id];
    const answered = chosen !== undefined;

    return (
      <div className="relative min-h-screen bg-gradient-to-b from-[#22070d] via-[#170408] to-[#0f0205] px-4 py-8 text-primary-foreground sm:px-6 lg:px-8">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute top-10 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-rose-900/15 blur-[140px]" />
        </div>
        <div className="pointer-events-none fixed inset-x-0 top-0 h-1.5 bg-hero" />

        <div className="relative mx-auto max-w-3xl">
          {/* Top bar */}
          <div className="mb-6 flex items-center justify-between gap-3">
            <span className="text-base font-medium text-white/85">
              Questão {current + 1} de {quiz.length}
            </span>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90">
                {DIFFICULTY_LABEL[q.difficulty]}
              </span>
              <button
                type="button"
                onClick={() => setScreen("result")}
                className="rounded-full border border-rose-400/40 bg-rose-500/15 px-5 py-2 text-sm font-semibold text-rose-200 transition-all hover:bg-rose-500/25 hover:text-white"
              >
                Encerrar prova
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-rose-400 transition-all"
              style={{ width: `${((current + 1) / quiz.length) * 100}%` }}
            />
          </div>

          {/* Question card */}
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md sm:p-8">
            <p className="text-base leading-relaxed text-white sm:text-lg">{q.statement}</p>

            <div className="mt-6 space-y-2.5">
              {q.options.map((opt, i) => {
                const isCorrect = i === q.answer;
                const isChosen = chosen === i;
                let style = "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10 text-white/85";
                if (answered && isCorrect)
                  style = "border-emerald-400/60 bg-emerald-500/15 text-white";
                else if (answered && isChosen)
                  style = "border-rose-400/60 bg-rose-500/15 text-white";
                else if (answered)
                  style = "border-white/5 bg-white/[0.03] text-white/35";

                return (
                  <button
                    key={i}
                    type="button"
                    disabled={answered}
                    onClick={() => answer(q.id, i)}
                    className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-all duration-150 disabled:cursor-default ${style}`}
                  >
                    <span
                      className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${answered && isCorrect
                        ? "bg-emerald-400 text-zinc-950"
                        : answered && isChosen
                          ? "bg-rose-400 text-zinc-950"
                          : "bg-white/10 text-white/70"
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
              <div className={`mt-5 rounded-xl border p-4 ${chosen === q.answer
                ? "border-emerald-500/30 bg-emerald-500/10"
                : "border-rose-500/30 bg-rose-500/10"
                }`}>
                <p className={`text-sm font-bold ${chosen === q.answer ? "text-emerald-300" : "text-rose-300"
                  }`}>
                  {chosen === q.answer
                    ? "✓ Resposta correta!"
                    : `✗ Incorreta — a correta é ${LETTERS[q.answer]}.`}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{q.explanation}</p>
              </div>
            )}
          </article>

          {/* Navigation */}
          <div className="mt-5 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-2 text-sm font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
            >
              ← Anterior
            </button>
            {current === quiz.length - 1 ? (
              <button
                type="button"
                onClick={() => setScreen("result")}
                className="rounded-full bg-white px-8 py-2 text-sm font-semibold text-zinc-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/90"
              >
                Finalizar prova →
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setCurrent((c) => c + 1)}
                className="rounded-full bg-white px-8 py-2 text-sm font-semibold text-zinc-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/90"
              >
                Próxima →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const pct = quiz.length ? Math.round((score / quiz.length) * 100) : 0;
  const answeredCount = quiz.filter((q) => answers[q.id] !== undefined).length;

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#22070d] via-[#170408] to-[#0f0205] px-4 py-8 text-primary-foreground sm:px-6 lg:px-8">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-rose-900/15 blur-[140px]" />
      </div>
      <div className="pointer-events-none fixed inset-x-0 top-0 h-1.5 bg-hero" />

      <div className="relative mx-auto max-w-3xl pb-28">
        {/* Sticky action bar */}
        <div className="sticky top-2 z-10 mb-6 flex justify-center gap-3">
          <button
            type="button"
            onClick={start}
            className="rounded-full bg-white px-7 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/90"
          >
            Nova prova (mesmo assunto)
          </button>
          <button
            type="button"
            onClick={() => setScreen("start")}
            className="rounded-full border border-white/25 bg-white/10 px-7 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white"
          >
            Voltar ao início
          </button>
        </div>

        <header className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-400">Resultado</p>
          <h1 className="mt-3 text-6xl font-medium text-white">
            {score}/{quiz.length}
          </h1>
          <p className="mt-2 text-white/60">{pct}% de acerto</p>
          <p className="mt-1 text-sm text-white/40">
            {answeredCount} de {quiz.length} respondidas
          </p>
        </header>

        <div className="space-y-3">
          {quiz.map((q, i) => {
            const chosen = answers[q.id];
            const ok = chosen === q.answer;
            return (
              <div
                key={q.id}
                className={`rounded-xl border p-5 ${ok
                  ? "border-emerald-500/30 bg-emerald-500/10"
                  : "border-rose-500/30 bg-rose-500/10"
                  }`}
              >
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-white/60">Questão {i + 1}</span>
                  <span className={ok ? "text-emerald-300" : "text-rose-300"}>
                    {ok ? "✓ Acertou" : "✗ Errou"}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{q.statement}</p>
                <p className="mt-3 text-sm text-white/80">
                  <strong className="text-white">Gabarito {LETTERS[q.answer]}:</strong>{" "}
                  {q.options[q.answer]}
                </p>
                {!ok && chosen !== undefined && (
                  <p className="mt-1 text-sm text-white/45">
                    Você marcou {LETTERS[chosen]}: {q.options[chosen]}
                  </p>
                )}
                {!ok && chosen === undefined && (
                  <p className="mt-1 text-sm text-white/45">Sem resposta.</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
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
      className={`h-auto min-h-24 w-full flex-col items-start justify-center gap-0 whitespace-normal rounded-md border p-4 text-left transition-colors ${active ? "border-primary bg-secondary" : "border-border bg-card hover:bg-secondary"
        }`}
    >
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
    </Button>
  );
}

function DarkChoiceCard({
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
      aria-pressed={active}
      onClick={onClick}
      className={`h-auto min-h-20 w-full rounded-xl border p-4 text-left transition-all duration-200 ${active
        ? "border-white/50 bg-white/15 shadow-md"
        : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10"
        }`}
    >
      <p className="font-semibold text-white text-sm">{title}</p>
      <p className="mt-1 text-xs text-white/55">{subtitle}</p>
    </button>
  );
}
