import { ArrowLeft, BookOpen, Stethoscope, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TrackSelectViewProps {
  onBack: () => void;
  onSelectMorfofuncional: () => void;
  onSelectHabilidades: () => void;
}

export function TrackSelectView({
  onBack,
  onSelectMorfofuncional,
  onSelectHabilidades,
}: TrackSelectViewProps) {
  return (
    <div className="relative min-h-screen flex flex-col justify-center bg-gradient-to-b from-[#2a0910] via-[#1a050a] to-[#110205] px-4 py-12 text-primary-foreground sm:px-6 lg:px-8">
      {/* Background glow effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-900/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto w-full max-w-4xl">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onBack}
          className="mb-8 gap-2 border-white/20 bg-white/5 text-sm font-medium text-white/90 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="size-4" /> Voltar à tela inicial
        </Button>

        <header className="mb-10 text-center sm:text-left">
          <Badge variant="outline" className="mb-3 border-rose-500/30 bg-rose-500/15 px-3 py-1 text-xs text-rose-300">
            MedQuest · 4º Semestre
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl font-sans">
            Escolha sua área de estudo
          </h1>
          <p className="mt-3 max-w-2xl text-sm font-light text-white/75 sm:text-base leading-relaxed">
            Selecione qual modalidade você deseja praticar hoje:
          </p>
        </header>

        {/* 2 Main Choice Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1: Morfofuncional */}
          <div
            role="button"
            tabIndex={0}
            onClick={onSelectMorfofuncional}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onSelectMorfofuncional();
            }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-rose-400/30 bg-gradient-to-b from-rose-950/40 to-white/10 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-rose-400/60 hover:bg-rose-950/50 hover:shadow-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-400"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-rose-500/30 text-rose-200 border border-rose-400/40 group-hover:scale-105 transition-transform">
                  <BookOpen className="size-7" />
                </div>
                <Badge variant="outline" className="border-white/20 bg-white/5 text-xs text-white/80">
                  200 Questões
                </Badge>
              </div>

              <h2 className="mt-6 text-2xl font-bold tracking-tight text-white group-hover:text-rose-200 transition-colors">
                Morfofuncional
              </h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-rose-300">
                Simulado de Prova com Gabarito
              </p>

              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                Pratique com 200 questões de múltipla escolha com correção imediata e gabarito comentado
                cobrindo os sistemas <strong>Visual</strong>, <strong>Somatossensorial</strong> e{" "}
                <strong>Auditivo</strong>.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-xs text-white/50">Filtro por assunto e dificuldade</span>
              <span className="flex items-center gap-1 text-sm font-semibold text-rose-200 group-hover:text-white group-hover:translate-x-1 transition-all">
                Iniciar Simulado <ChevronRight className="size-4" />
              </span>
            </div>
          </div>

          {/* Card 2: Habilidades Clínicas (Neuro) */}
          <div
            role="button"
            tabIndex={0}
            onClick={onSelectHabilidades}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onSelectHabilidades();
            }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-rose-400/30 bg-gradient-to-b from-rose-950/40 to-white/10 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-rose-400/60 hover:bg-rose-950/50 hover:shadow-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-400"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-rose-500/30 text-rose-200 border border-rose-400/40 group-hover:scale-105 transition-transform">
                  <Stethoscope className="size-7" />
                </div>
                <Badge variant="outline" className="border-rose-400/40 bg-rose-500/20 text-xs font-semibold text-rose-200">
                  <Sparkles className="size-3 mr-1" /> Revisão
                </Badge>
              </div>

              <h2 className="mt-6 text-2xl font-bold tracking-tight text-white group-hover:text-rose-200 transition-colors">
                Habilidades Clínicas (Neuro)
              </h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-rose-300">
                Semiologia e Exame Físico Prático
              </p>

              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                Guia prático de exame neurológico. Roteiro semiológico dos <strong>12 pares de nervos cranianos</strong>,
                passo a passo de semiotécnica, testes e resumo direto das principais alterações clínicas.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-xs text-white/50">Semiologia dos 12 Pares Cranianos</span>
              <span className="flex items-center gap-1 text-sm font-semibold text-rose-200 group-hover:text-white group-hover:translate-x-1 transition-all">
                Acessar Habilidades <ChevronRight className="size-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
