import { ArrowLeft, Brain, Activity, Compass, ShieldAlert, Lock, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HabilidadesMenuViewProps {
  onBack: () => void;
  onSelectNervosCranianos: () => void;
}

export function HabilidadesMenuView({ onBack, onSelectNervosCranianos }: HabilidadesMenuViewProps) {
  const modules = [
    {
      id: "nervos",
      title: "Nervos Cranianos (I a XII)",
      subtitle: "Semiologia prática dos 12 pares, semiotécnica passo a passo e alterações clínicas resumidas.",
      icon: Brain,
      available: true,
      onClick: onSelectNervosCranianos,
    },
    {
      id: "motor",
      title: "Exame Motor e Reflexos Profundos",
      subtitle: "Avaliação de trofismo, tônus (espasticidade vs. rigidez), força (escala MRC de 0 a 5) e reflexos miotáticos.",
      icon: Activity,
      available: false,
    },
    {
      id: "sensibilidade",
      title: "Sensibilidade e Coordenação Cerebelar",
      subtitle: "Vias de sensibilidade superficial e profunda, testes de Romberg, índex-nariz, diadococinesia e marcha.",
      icon: Compass,
      available: false,
    },
    {
      id: "meningeos",
      title: "Simulador de Mini-Osce",
      subtitle: "Exame final abordando todos os assuntos ministrados em aula",
      icon: ShieldAlert,
      available: false,
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#22070d] via-[#170408] to-[#0f0205] px-4 py-8 text-primary-foreground sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-rose-900/15 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onBack}
          className="mb-8 gap-2 border-white/20 bg-white/5 text-sm font-medium text-white/90 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="size-4" /> Voltar à seleção de assuntos
        </Button>

        <header className="mb-8">
          <Badge variant="outline" className="mb-3 border-rose-500/30 bg-rose-500/15 px-3 py-1 text-xs text-rose-300">
            Semiologia Neurológica
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl font-sans">
            Habilidades Clínicas (Neuro)
          </h1>
          <p className="mt-2 text-sm text-white/70 sm:text-base leading-relaxed">
            Selecione o módulo prático de semiologia para estudar o passo a passo e
            os principais achados clínicos.
          </p>
        </header>

        {/* Vertical Options List */}
        <div className="flex flex-col gap-3.5">
          {modules.map((mod) => {
            const Icon = mod.icon;
            if (mod.available) {
              return (
                <div
                  key={mod.id}
                  role="button"
                  tabIndex={0}
                  onClick={mod.onClick}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") mod.onClick?.();
                  }}
                  className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 cursor-pointer shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-rose-400"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 group-hover:scale-105 transition-transform">
                      <Icon className="size-6" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-semibold text-white group-hover:text-rose-200 transition-colors">
                          {mod.title}
                        </h2>
                        <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300 border border-emerald-500/30">
                          <CheckCircle2 className="size-3" /> Liberado
                        </span>
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-white/70 leading-relaxed max-w-xl">
                        {mod.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center self-end sm:self-center gap-1 text-xs font-semibold text-rose-300 group-hover:text-rose-200 group-hover:translate-x-1 transition-all">
                    <span>Acessar</span>
                    <ChevronRight className="size-4" />
                  </div>
                </div>
              );
            }

            return (
              <div
                key={mod.id}
                className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-5 opacity-60 backdrop-blur-sm select-none"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-white/40 border border-white/10">
                    <Icon className="size-6" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-medium text-white/60">{mod.title}</h2>
                      <span className="flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/50 border border-white/10">
                        <Lock className="size-3" /> Em breve
                      </span>
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-white/40 leading-relaxed max-w-xl">
                      {mod.subtitle}
                    </p>
                  </div>
                </div>

                <span className="self-end sm:self-center text-xs text-white/30 font-medium">
                  Bloqueado
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
