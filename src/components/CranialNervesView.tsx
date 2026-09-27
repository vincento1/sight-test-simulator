import { useState } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Eye,
  Search,
  Sparkles,
  Stethoscope,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  CRANIAL_NERVES,
  type CranialNerve,
  type NerveType,
} from "@/data/cranial-nerves";

interface CranialNervesViewProps {
  onBack: () => void;
}

const TYPE_COLORS: Record<NerveType, { badge: string; border: string; glow: string }> = {
  "Sensitivo Especial": {
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    border: "border-blue-500/20",
    glow: "group-hover:border-blue-400/40",
  },
  Motor: {
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    border: "border-emerald-500/20",
    glow: "group-hover:border-emerald-400/40",
  },
  Misto: {
    badge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    border: "border-amber-500/20",
    glow: "group-hover:border-amber-400/40",
  },
  "Misto / Viscerais": {
    badge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    border: "border-amber-500/20",
    glow: "group-hover:border-amber-400/40",
  },
  "Motor / Parassimpático": {
    badge: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    border: "border-purple-500/20",
    glow: "group-hover:border-purple-400/40",
  },
};

export function CranialNervesView({ onBack }: CranialNervesViewProps) {
  const [selectedNerve, setSelectedNerve] = useState<CranialNerve | null>(null);
  const [filterType, setFilterType] = useState<string>("todos");
  const [search, setSearch] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"semiotecnica" | "clinica" | "dicas">("semiotecnica");

  const filteredNerves = CRANIAL_NERVES.filter((nerve) => {
    const matchesFilter =
      filterType === "todos" ||
      (filterType === "sensitivo" && nerve.type.includes("Sensitivo")) ||
      (filterType === "motor" && nerve.type.includes("Motor")) ||
      (filterType === "misto" && nerve.type.includes("Misto"));

    const q = search.toLowerCase().trim();
    const matchesSearch =
      q === "" ||
      nerve.name.toLowerCase().includes(q) ||
      nerve.roman.toLowerCase().includes(q) ||
      nerve.shortSummary.toLowerCase().includes(q) ||
      nerve.clinicalFindings.some(
        (c) => c.term.toLowerCase().includes(q) || c.description.toLowerCase().includes(q),
      );

    return matchesFilter && matchesSearch;
  });

  const currentIndex = selectedNerve
    ? CRANIAL_NERVES.findIndex((n) => n.id === selectedNerve.id)
    : -1;

  function goPrevNerve() {
    if (currentIndex > 0) {
      const prev = CRANIAL_NERVES[currentIndex - 1];
      if (prev) setSelectedNerve(prev);
    }
  }

  function goNextNerve() {
    if (currentIndex < CRANIAL_NERVES.length - 1) {
      const next = CRANIAL_NERVES[currentIndex + 1];
      if (next) setSelectedNerve(next);
    }
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#25090f] via-[#1a050a] to-[#120306] px-4 py-8 text-primary-foreground sm:px-6 lg:px-8">
      {/* Subtle ambient background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-red-900/20 blur-[120px]" />
        <div className="absolute top-1/2 right-10 h-[28rem] w-[28rem] rounded-full bg-rose-950/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Navigation Bar */}
        <div className="mb-6 flex items-center justify-between">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onBack}
            className="gap-2 border-white/20 bg-white/5 text-sm font-medium text-white/90 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="size-4" /> Voltar ao menu de Habilidades
          </Button>

          <Badge variant="outline" className="border-white/20 bg-white/5 px-3 py-1 text-xs text-white/70">
            12 Pares Cranianos
          </Badge>
        </div>

        {/* Header Title Section - Styled following user sketch */}
        <header className="mb-8">
          <h1 className="text-4xl font-normal tracking-tight text-white sm:text-5xl md:text-6xl font-sans">
            Nervos cranianos
          </h1>
          <p className="mt-2 max-w-2xl text-sm font-light text-white/75 sm:text-base">
            Guia prático de semiotécnica à beira do leito, função dos 12 pares e principais achados
            clínicos essenciais para a prática médica.
          </p>

          {/* Search and Filters Bar */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por nervo, manobra ou sinal..."
                className="w-full rounded-md border border-white/15 bg-white/5 py-2 pl-9 pr-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur-sm transition-colors focus:border-white/40 focus:bg-white/10"
              />
            </div>

            <div className="flex flex-wrap gap-1.5">
              {[
                { id: "todos", label: "Todos (12)" },
                { id: "sensitivo", label: "Sensitivos" },
                { id: "motor", label: "Motores" },
                { id: "misto", label: "Mistos" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilterType(tab.id)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                    filterType === tab.id
                      ? "bg-white text-zinc-950 shadow-md"
                      : "border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* 12 Cranial Nerves Grid - Faithful to user sketch with elevated design */}
        <div className="grid gap-3 sm:grid-cols-2">
          {filteredNerves.map((nerve) => {
            const colors = TYPE_COLORS[nerve.type] || {
              badge: "bg-white/10 text-white border-white/20",
              border: "border-white/15",
              glow: "group-hover:border-white/30",
            };

            return (
              <div
                key={nerve.id}
                role="button"
                tabIndex={0}
                onClick={() => {
                  // If nerve belongs to a joint group, open the primary nerve instead
                  const target = nerve.jointGroup
                    ? (CRANIAL_NERVES.find((n) => n.id === nerve.jointGroup) ?? nerve)
                    : nerve;
                  setSelectedNerve(target);
                  setActiveTab("semiotecnica");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    const target = nerve.jointGroup
                      ? (CRANIAL_NERVES.find((n) => n.id === nerve.jointGroup) ?? nerve)
                      : nerve;
                    setSelectedNerve(target);
                    setActiveTab("semiotecnica");
                  }
                }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-5 text-zinc-900 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/80 cursor-pointer`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-lg sm:text-xl tracking-tight text-zinc-900">
                      {nerve.roman} — {nerve.name}
                    </span>
                    <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 border border-zinc-200">
                      {nerve.type}
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-medium text-rose-900 group-hover:text-rose-950 transition-colors">
                    Clique aqui para revisar esse nervo
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-zinc-600 line-clamp-2">
                    {nerve.shortSummary}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3 text-xs text-zinc-500">
                  <span className="flex items-center gap-1 font-medium text-zinc-700">
                    <Stethoscope className="size-3.5 text-rose-700" />
                    Semiotécnica e Exame
                  </span>
                  <span className="font-semibold text-rose-900 group-hover:translate-x-0.5 transition-transform">
                    Ver detalhes →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredNerves.length === 0 && (
          <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
            <p className="text-base text-white/70">Nenhum nervo encontrado com os filtros atuais.</p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setSearch("");
                setFilterType("todos");
              }}
              className="mt-4 border-white/20 text-xs text-white"
            >
              Limpar filtros
            </Button>
          </div>
        )}
      </div>

      {/* Clinical Nerve Detail Modal */}
      {selectedNerve && (
        <Dialog open={!!selectedNerve} onOpenChange={(open) => !open && setSelectedNerve(null)}>
          <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto border-zinc-800 bg-[#160408] text-white p-6 sm:p-8">
            <DialogHeader className="border-b border-white/10 pb-4 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="border-white/20 bg-white/10 text-white font-mono text-sm px-3 py-0.5">
                  {selectedNerve.roman}
                </Badge>
                <Badge variant="outline" className="border-rose-400/30 bg-rose-500/20 text-rose-200 text-xs">
                  {selectedNerve.type}
                </Badge>
              </div>

              <DialogTitle className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {selectedNerve.name}
              </DialogTitle>

              <DialogDescription className="mt-1 text-sm text-white/70 leading-relaxed">
                {selectedNerve.functionDescription}
              </DialogDescription>

              {/* Joint group notice */}
              {selectedNerve.jointNote && (
                <div className="mt-3 flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2.5">
                  <span className="mt-0.5 text-amber-400 text-base leading-none">⚠️</span>
                  <p className="text-xs text-amber-200/90 leading-relaxed">
                    <span className="font-semibold">Avaliação conjunta:</span>{" "}
                    {selectedNerve.jointNote} — estes nervos são sempre examinados juntos no mesmo exame de motricidade.
                  </p>
                </div>
              )}

              {/* Modal Navigation Tabs */}
              <div className="mt-4 flex gap-2 border-t border-white/10 pt-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("semiotecnica")}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeTab === "semiotecnica"
                      ? "bg-white text-zinc-950 font-semibold"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Stethoscope className="size-3.5" /> Semiotécnica Prática
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("clinica")}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeTab === "clinica"
                      ? "bg-white text-zinc-950 font-semibold"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <AlertTriangle className="size-3.5" /> Alterações Clínicas
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("dicas")}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeTab === "dicas"
                      ? "bg-white text-zinc-950 font-semibold"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Lightbulb className="size-3.5" /> Dicas do Professor
                </button>
              </div>
            </DialogHeader>

            {/* TAB CONTENT: Semiotécnica */}
            {activeTab === "semiotecnica" && (
              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-rose-300">
                    <CheckCircle2 className="size-4 text-emerald-400" />
                    Como examinar na prática (À beira do leito):
                  </h3>

                  <div className="mt-3 space-y-3">
                    {selectedNerve.semiotecnica.map((block, i) => (
                      <div key={i} className="space-y-2">
                        {block.title && (
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white/80">
                            {block.title}
                          </h4>
                        )}
                        <ol className="space-y-2 pl-1">
                          {block.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85 leading-relaxed">
                              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white">
                                {idx + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: Alterações Clínicas (Resumidas e Diretas) */}
            {activeTab === "clinica" && (
              <div className="mt-4 space-y-3">
                <p className="text-xs text-white/60">
                  Resumo prático das principais manifestações e diagnósticos diferenciais:
                </p>

                <div className="grid gap-2.5 sm:grid-cols-2">
                  {selectedNerve.clinicalFindings.map((finding, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/10 bg-white/5 p-3.5 transition-all hover:bg-white/10"
                    >
                      <h4 className="font-semibold text-xs text-rose-300 flex items-center gap-1.5">
                        <AlertTriangle className="size-3.5 text-amber-400 shrink-0" />
                        {finding.term}
                      </h4>
                      <p className="mt-1 text-xs text-white/80 leading-relaxed">
                        {finding.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT: Dicas do Professor & Pérolas Práticas */}
            {activeTab === "dicas" && (
              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                    <Lightbulb className="size-4 text-amber-400" />
                    Pérolas Clínicas & Observações do Professor
                  </h4>

                  <ul className="mt-3 space-y-2.5">
                    {selectedNerve.professorTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Footer with Previous / Next navigation */}
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={goPrevNerve}
                disabled={currentIndex <= 0}
                className="gap-1 border-white/20 bg-white/5 text-xs text-white disabled:opacity-30"
              >
                <ChevronLeft className="size-4" /> Anterior
              </Button>

              <span className="text-xs text-white/50">
                {currentIndex + 1} de {CRANIAL_NERVES.length}
              </span>

              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={goNextNerve}
                disabled={currentIndex >= CRANIAL_NERVES.length - 1}
                className="gap-1 border-white/20 bg-white/5 text-xs text-white disabled:opacity-30"
              >
                Próximo <ChevronRight className="size-4" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
