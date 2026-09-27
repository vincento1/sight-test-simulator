export type NerveType =
  | "Sensitivo Especial"
  | "Motor"
  | "Misto"
  | "Motor / Parassimpático"
  | "Misto / Viscerais";

export interface CranialNerve {
  id: number;
  roman: string;
  name: string;
  type: NerveType;
  shortSummary: string;
  functionDescription: string;
  semiotecnica: {
    title?: string;
    steps: string[];
  }[];
  clinicalFindings: {
    term: string;
    description: string;
  }[];
  professorTips: string[];
  pearls?: string;
  /** When set, clicking this nerve opens the nerve with this id instead */
  jointGroup?: number;
  /** Human-readable names of the other nerves in the joint group */
  jointNote?: string;
}

export const CRANIAL_NERVES: CranialNerve[] = [
  {
    id: 1,
    roman: "N.C. I",
    name: "Nervo Olfatório",
    type: "Sensitivo Especial",
    shortSummary: "Percepção, identificação e discriminação de odores.",
    functionDescription:
      "Sensitiva pura (olfato especial). Conduz os estímulos químicos odoríferos da mucosa olfatória nasal até o bulbo olfatório e córtex piriforme.",
    semiotecnica: [
      {
        title: "Passo a passo à beira do leito",
        steps: [
          "Inspecione e certifique-se de que as fossas nasais estão pérvias e desobstruídas (sem rinite aguda, congestão ou pólipos).",
          "Solicite ao paciente que feche bem os olhos e oclua uma das narinas com o dedo indicador.",
          "Aproxime da narina aberta uma substância de odor conhecido e não irritante (ex.: café, canela, cravo, sabonete ou baunilha).",
          "Pergunte: 'Você sente algum cheiro?', 'É agradável ou desagradável?' e 'Consegue identificar que substância é?'.",
          "Repita o teste na narina oposta trocando a substância odorífera para evitar adivinhação. Em caso de queixa unilateral, teste primeiro o lado suspeito.",
        ],
      },
    ],
    clinicalFindings: [
      {
        term: "Anosmia",
        description: "Perda completa do olfato (frequente em TCE com fratura de lâmina crivosa ou pós-COVID-19).",
      },
      {
        term: "Hiposmia",
        description: "Diminuição do olfato. Presente precocemente em cerca de 90% dos pacientes com Doença de Parkinson e Alzheimer.",
      },
      {
        term: "Parosmia e Cacosmia",
        description: "Perversão da percepção odorífera real ou sensação ilusória de cheiro fétido/pútrido sem estímulo.",
      },
      {
        term: "Crises Uncinadas",
        description: "Alucinações olfatórias desagradáveis como aura epiléptica originada no lobo temporal (córtex uncinado).",
      },
    ],
    professorTips: [
      "O bulbo não é o nervo: o bulbo olfatório na base do crânio é parte do SNC; o verdadeiro nervo são os filetes microscópicos que atravessam a lâmina crivosa.",
      "Nunca use substâncias irritantes (como álcool ou amônia): elas estimulam terminações dolorosas do trigêmeo (NC V) e geram um falso teste de olfato.",
      "Grande parte do 'paladar' percebido é olfato retrofaríngeo. Pacientes com lesão do NC I queixam-se tipicamente de perda do sabor dos alimentos.",
    ],
  },
  {
    id: 2,
    roman: "N.C. II",
    name: "Nervo Óptico",
    type: "Sensitivo Especial",
    shortSummary: "Condução da informação visual da retina ao córtex occipital.",
    functionDescription:
      "Sensitiva pura (visão). Anatomicamente não é um nervo periférico comum, mas sim um trato de substância branca do SNC envolto pelas meninges e banhado por líquor.",
    semiotecnica: [
      {
        title: "1. Acuidade Visual",
        steps: [
          "Avalie cada olho separadamente. Use a Tabela de Snellen a 6 metros ou a Tabela de Rosenbaum mantida a 35 cm.",
          "O paciente deve manter seus óculos corretivos usuais (o objetivo é avaliar a via neural e não erros de refração).",
        ],
      },
      {
        title: "2. Campimetria por Confrontação",
        steps: [
          "Sente-se à frente do paciente a cerca de 1 metro, na mesma altura dos olhos.",
          "O paciente oclui o olho direito e o examinador fecha o esquerdo (servindo de referência).",
          "Mova os dedos da periferia para o centro nos 4 quadrantes (superior, inferior, nasal e temporal) solicitando quando o paciente passa a ver o movimento.",
        ],
      },
      {
        title: "3. Reflexo Fotomotor (Direto e Consensual)",
        steps: [
          "Incida feixe de luz obliquamente (30º a 45º) em uma pupila em ambiente de penumbra.",
          "Observe a miose na pupila iluminada (reflexo direto) e na contralateral (reflexo consensual). Aferência = NC II; Eferência = NC III.",
        ],
      },
      {
        title: "4. Fundoscopia (Exame de Fundo de Olho)",
        steps: [
          "Mantenha a sala em penumbra e oriente o paciente a fixar um ponto distante. Examine o olho DIREITO do paciente com o seu olho DIREITO (e vice-versa) para evitar aproximação constrangedora.",
          "Centralize o disco óptico (papila) e avalie: bordas nítidas e limites claros indicam normalidade — apagamento ou elevação das bordas sugere papiledema. Os vasos devem ser visíveis emergindo da papila (artérias mais finas e avermelhadas; veias mais calibrosas e escuras).",
          "Avalie a escavação fisiológica do disco óptico: escavação aumentada com bordas apagadas sugere glaucoma.",
        ],
      },
    ],
    clinicalFindings: [
      {
        term: "Amaurose Monocular",
        description: "Cegueira completa em um único olho por lesão pré-quiasmática do nervo óptico correspondente.",
      },
      {
        term: "Hemianopsia Bitemporal",
        description: "Perda dos campos visuais temporais de ambos os olhos, causada por lesão no quiasma óptico (clássica de macroadenoma de hipófise).",
      },
      {
        term: "Hemianopsia Homônima",
        description: "Perda da mesma metade do campo visual em ambos os olhos por lesão retroquiasmática (trato óptico, CGL ou radiações ópticas).",
      },
      {
        term: "Papiledema",
        description: "Edema e apagamento dos limites da papila óptica na fundoscopia, sinal fidedigno de hipertensão intracraniana.",
      },
    ],
    professorTips: [
      "No quiasma óptico, apenas as fibras nasais da retina (que enxergam o campo lateral/temporal) cruzam a linha média.",
      "A representação da mácula no córtex occipital possui dupla vascularização (ramos da ACP e ACM), permitindo a 'preservação macular' em infartos da ACP.",
    ],
  },
  {
    id: 3,
    roman: "N.C. III",
    name: "Nervo Oculomotor",
    type: "Motor / Parassimpático",
    shortSummary: "Motilidade da maioria dos músculos oculares, elevação palpebral e constrição pupilar.",
    functionDescription:
      "Motor somático para 4 músculos extrínsecos (reto superior, inferior, medial e oblíquo inferior) + elevador da pálpebra. Motor visceral (parassimpático de Edinger-Westphal) para esfíncter da pupila e músculo ciliar.",
    semiotecnica: [
      {
        title: "⚠️ Avaliação Conjunta — NC III, IV e VI",
        steps: [
          "Os nervos Oculomotor (III), Troclear (IV) e Abducente (VI) controlam conjuntamente toda a motilidade ocular extrínseca e são sempre avaliados em um único exame integrado.",
        ],
      },
      {
        title: "1. Inspeção Estática",
        steps: [
          "Observe em repouso: ptose palpebral (NC III), desvio ocular (estrabismo) e posição espontânea da cabeça (inclinação cervical sugere paresia do NC IV).",
        ],
      },
      {
        title: "2. Motilidade Ocular Extrínseca (Ducções e Versões)",
        steps: [
          "Peça ao paciente para acompanhar seu dedo em 'H' e em cruz vertical sem mover a cabeça — explore os 6 campos de ação dos músculos extrínsecos.",
          "NC III: testa adução, elevação (olhar para cima) e depressão em abdução.",
          "NC IV (oblíquo superior): testa depressão com o olho em adução (olhar 'para baixo e para dentro').",
          "NC VI (reto lateral): testa abdução (olhar para fora) em cada lado.",
          "Pesquise diplopia em cada direção do olhar — perguntar: 'Está vendo duplo?'",
        ],
      },
      {
        title: "3. Reflexo Pupilar e Convergência (NC III)",
        steps: [
          "Reflexo fotomotor direto e consensual com feixe de luz (NC III – eferência parassimpática).",
          "Tríade de perto (convergência): aproxime o dedo em direção ao nariz do paciente e observe convergência dos eixos oculares + miose pupilar bilateral.",
        ],
      },
    ],
    clinicalFindings: [
      {
        term: "Lesão Completa do NC III",
        description: "Ptose palpebral, olho desviado 'para baixo e para fora' e midríase paralítica fixa. Pupila não reage à luz.",
      },
      {
        term: "Paralisia do NC IV",
        description: "Diplopia vertical ao olhar para baixo em adução. Paciente inclina a cabeça para o lado contralateral (manobra de Bielschowsky).",
      },
      {
        term: "Paralisia do NC VI",
        description: "Estrabismo convergente com olho que não consegue cruzar a linha média. Diplopia horizontal máxima no olhar lateral ipsilateral.",
      },
      {
        term: "Midríase Paralítica (NC III)",
        description: "Compressões externas (aneurisma ou herniação) afetam primeiro as fibras parassimpáticas superficiais, causando midríase antes da paralisia motora.",
      },
      {
        term: "NC VI como sinal de HIC",
        description: "O longo trajeto do NC VI sobre a crista petrosa o torna sensível a aumentos difusos da pressão intracraniana (falso sinal localizatório).",
      },
    ],
    professorTips: [
      "Regra mnemônica: RL6, OS4, TO3 — Reto Lateral pelo VI; Oblíquo Superior pelo IV; Todos os outros músculos extrínsecos pelo III.",
      "Fibras pupilares do NC III trafegam na periferia do nervo: compressões causam midríase; infartos microvasculares (diabetes) poupam a pupila.",
      "O NC IV é o único que decussa completamente e emerge na face dorsal do mesencéfalo, sendo muito suscetível a TCE.",
      "O NC VI tem o trajeto intracraniano mais longo — sua paralisia isolada em HIC é falso sinal localizatório (não significa lesão pontina).",
    ],
    jointNote: "NC III (Oculomotor), NC IV (Troclear) e NC VI (Abducente)",
  },
  {
    id: 4,
    roman: "N.C. IV",
    name: "Nervo Troclear",
    type: "Motor",
    shortSummary: "Inervação do músculo oblíquo superior (olhar para baixo e para dentro).",
    functionDescription:
      "Motor puro. Inerva unicamente o músculo oblíquo superior, responsável por intorsão, depressão e abdução acessória do globo ocular.",
    semiotecnica: [
      {
        title: "Avaliação Conjunta — NC III, IV e VI",
        steps: [
          "A avaliação do NC IV é sempre realizada em conjunto com os nervos Oculomotor (III) e Abducente (VI) no exame integrado da motilidade ocular extrínseca.",
        ],
      },
    ],
    clinicalFindings: [
      {
        term: "Diplopia Vertical",
        description: "Dificuldade para descer escadas ou ler — o olho não deprime adequadamente em adução.",
      },
      {
        term: "Inclinação Compensatória da Cabeça",
        description: "O paciente inclina a cabeça para o lado contralateral à lesão para compensar a diplopia (Manobra de Bielschowsky).",
      },
    ],
    professorTips: [
      "É o único nervo que decussa completamente e emerge da face dorsal do mesencéfalo, sendo muito suscetível a TCE.",
    ],
    jointGroup: 3,
    jointNote: "NC III (Oculomotor), NC IV (Troclear) e NC VI (Abducente)",
  },
  {
    id: 5,
    roman: "N.C. V",
    name: "Nervo Trigêmeo",
    type: "Misto",
    shortSummary: "Sensibilidade geral da face (V1, V2, V3) e motricidade dos músculos mastigatórios (V3).",
    functionDescription:
      "Sensitivo para a face, couro cabeludo até o vértex, córnea, mucosas oral e nasal. Motor (via divisão V3 mandibular) para masseter, temporal e pterigóideos medial e lateral.",
    semiotecnica: [
      {
        title: "1. Exame Sensitivo Facial",
        steps: [
          "Toque com algodão (tato leve) e palito rombo (sensibilidade dolorosa) de modo comparativo e simétrico nos 3 territórios: fronte (V1), malar/bochecha (V2) e mandíbula (V3).",
        ],
      },
      {
        title: "2. Reflexo Córneo-Palpebral",
        steps: [
          "Peça ao paciente para olhar para o lado oposto (evitando reflexo de piscar por ameaça).",
          "Com gaze ou mecha fina de algodão estéril, toque suavemente a junção córneo-escleral (limbo).",
          "Resposta normal: fechamento palpebral bilateral imediato. Aferência: NC V1; Eferência: NC VII.",
        ],
      },
      {
        title: "3. Exame Motor da Mastigação",
        steps: [
          "Palpe os músculos masseteres e temporais enquanto o paciente cerra os dentes com força máxima.",
          "Peça para o paciente abrir a boca e observe se a mandíbula permanece centrada ou se sofre desvio lateral.",
        ],
      },
    ],
    clinicalFindings: [
      {
        term: "Desvio Mandibular",
        description: "Na fraqueza unilateral do V3, a mandíbula desvia-se para o lado da lesão ao abrir a boca, pois o pterigóideo contralateral saudável empurra sem oposição.",
      },
      {
        term: "Neuralgia do Trigêmeo",
        description: "Paroxismos lancinantes de dor em choque elétrico (nota 10/10), deflagrados por estímulos táteis banais (barbear, mastigar, vento).",
      },
      {
        term: "Padrão em Casca de Cebola",
        description: "Em lesões no núcleo espinhal do trigêmeo no tronco, a perda de dor ocorre em anéis concêntricos na face, e não por limites de V1/V2/V3.",
      },
    ],
    professorTips: [
      "Cuidado com falso negativo no córneo-palpebral: tocar na esclera branca não desencadeia o reflexo.",
      "O reflexo mandibular/masseterino (percutir o queixo com boca aberta) deve ser mínimo ou ausente; se estiver exaltado (hiperreflexia), indica lesão bilateral do 1º neurônio motor.",
    ],
  },
  {
    id: 6,
    roman: "N.C. VI",
    name: "Nervo Abducente",
    type: "Motor",
    shortSummary: "Inervação do músculo reto lateral (abdução do olho / olhar para fora).",
    functionDescription:
      "Motor somático exclusivo para o músculo reto lateral do bulbo ocular, promovendo a abdução e o olhar lateral.",
    semiotecnica: [
      {
        title: "Avaliação Conjunta — NC III, IV e VI",
        steps: [
          "A avaliação do NC VI é sempre realizada em conjunto com os nervos Oculomotor (III) e Troclear (IV) no exame integrado da motilidade ocular extrínseca.",
        ],
      },
    ],
    clinicalFindings: [
      {
        term: "Estrabismo Convergente",
        description: "O olho afetado desvia para dentro e não cruza a linha média para fora.",
      },
      {
        term: "Diplopia Horizontal",
        description: "Visão dupla horizontal que piora no olhar lateral ipsilateral ao lado paralisado.",
      },
    ],
    professorTips: [
      "Falso sinal localizatório: longo trajeto sobre a crista petrosa torna o NC VI o mais sensível a aumentos difusos da PIC.",
      "Mnemônico: RL6, OS4, TO3.",
    ],
    jointGroup: 3,
    jointNote: "NC III (Oculomotor), NC IV (Troclear) e NC VI (Abducente)",
  },
  {
    id: 7,
    roman: "N.C. VII",
    name: "Nervo Facial",
    type: "Misto",
    shortSummary: "Mímica facial, gustação dos 2/3 anteriores da língua e secreções lacrimal/salivar.",
    functionDescription:
      "Motor somático para os músculos da expressão facial e estapédio. Sensorial para o paladar dos 2/3 anteriores da língua (nervo corda do tímpano). Parassimpático para glândulas submandibulares, sublinguais e lacrimais.",
    semiotecnica: [
      {
        title: "Avaliação dos 6 comandos da mímica",
        steps: [
          "Inspeção em repouso: simetria das rimas labiais, sulco nasolabial e abertura das fendas palpebrais.",
          "1. Enrugar a fronte e elevar as sobrancelhas.",
          "2. Fechar os olhos com muita força contra a tentativa do examinador de abri-los.",
          "3. Mostrar os dentes ou sorrir amplamente.",
          "4. Encher as bochechas de ar (examinador comprime para testar bucinador).",
          "5. Cerrar a mandíbula contraindo o platisma no pescoço.",
          "6. Teste fonético labial: peça para repetir repetidamente a sílaba 'Pa-pa-pa'.",
        ],
      },
    ],
    clinicalFindings: [
      {
        term: "Paralisia Facial Periférica (ex.: Bell)",
        description: "Acomete TODA a hemiface ipsilateral. Há apagamento das rugas da testa, lagoftalmo (incapacidade de fechar o olho), Sinal de Bell (olho sobe ao tentar fechar) e desvio da rima bucal para o lado são.",
      },
      {
        term: "Paralisia Facial Central (ex.: AVC)",
        description: "Acomete APENAS o terço inferior contralateral da face. A fronte e o fechamento ocular são poupados devido à dupla inervação cortical dos núcleos superiores.",
      },
    ],
    professorTips: [
      "Regra prática de emergência: se o paciente NÃO consegue franzir a testa e NÃO fecha o olho daquele lado, trata-se de paralisia periférica (geralmente Paralisia de Bell), e não AVC clássico.",
      "A paralisia do músculo estapédio pode gerar hiperacusia (sons comuns soam insuportavelmente altos no ouvido ipsilateral).",
    ],
  },
  {
    id: 8,
    roman: "N.C. VIII",
    name: "Nervo Vestibulococlear",
    type: "Sensitivo Especial",
    shortSummary: "Audição (ramo coclear) e equilíbrio/orientação espacial (ramo vestibular).",
    functionDescription:
      "Sensitiva especial dupla. Ramo coclear: transmite as vibrações sonoras transduzidas no órgão de Corti. Ramo vestibular: detecta acelerações lineares e angulares dos canais semicirculares, sáculo e utrículo.",
    semiotecnica: [
      {
        title: "1. Audiometria Clínica à Beira do Leito",
        steps: [
          "Fricção de dedos: atrito sutil das polpas digitais a 5-10 cm de cada orelha para triagem rápida.",
          "Teste de Weber: diapasão vibrando no centro do crânio (vértex). Normal: som no meio. Condução: lateraliza para o lado acometido. Neurossensorial: lateraliza para o lado saudável.",
          "Teste de Rinne: diapasão no processo mastoide até parar o som; em seguida posicionar ao lado do canal auditivo externo. Normal: Condução Aérea > Óssea (Rinne positivo). Condução: Óssea >= Aérea (Rinne negativo).",
        ],
      },
      {
        title: "2. Exame Vestibular",
        steps: [
          "Pesquisa de nistagmo espontâneo e induzido.",
          "Manobra de Dix-Hallpike: decúbito dorsal súbito com cabeça rodada a 45º e pendente da maca (diagnóstico de VPPB).",
          "Teste de Romberg: em pé, pés juntos, de olhos abertos e depois fechados (pesquisa desvio/queda ipsilateral).",
          "Reflexo Vestíbulo-Ocular (RVO): manobra dos 'olhos de boneca' rodando rapidamente a cabeça com olhar fixado.",
        ],
      },
    ],
    clinicalFindings: [
      {
        term: "Perda Condutiva vs. Neurossensorial",
        description: "Condutiva: afeta orelha externa/média (ex.: cerume, otite média; Rinne negativo). Neurossensorial: afeta cóclea ou NC VIII (Rinne positivo encurtado, Weber lateraliza para o lado são).",
      },
      {
        term: "VPPB",
        description: "Vertigem Posicional Paroxística Benigna: crises breves de tontura rotatória e nistagmo deflagradas por mudanças de posição da cabeça.",
      },
      {
        term: "Queda no Romberg Vestibular",
        description: "O paciente oscila e cai tipicamente em direção ao lado da lesão após breve latência de olhos fechados.",
      },
    ],
    professorTips: [
      "O reflexo vestíbulo-ocular (RVO) é crucial no protocolo de Morte Encefálica: ausência de desvio compensatório dos olhos ao girar a cabeça indica parada da função do tronco encefálico.",
    ],
  },
  {
    id: 9,
    roman: "N.C. IX",
    name: "Nervo Glossofaríngeo",
    type: "Misto",
    shortSummary: "Sensibilidade e gustação do 1/3 posterior da língua, deglutição e quimiorrecepção carotídea.",
    functionDescription:
      "Sensitivo e gustativo para o 1/3 posterior da língua e faringe. Motor somático para o estilofaríngeo (elevação da faringe na deglutição). Sensibilidade visceral do seio e corpo carotídeos (barorreflexo). Parassimpático para glândula parótida.",
    semiotecnica: [
      {
        title: "⚠️ Avaliação Conjunta — NC IX e NC X",
        steps: [
          "Os nervos Glossofaríngeo (IX) e Vago (X) são avaliados de forma integrada em um único exame, pois ambos inervam a faringe e o palato e compartilham o reflexo nauseoso.",
        ],
      },
      {
        title: "1. Inspeção do Palato e Úvula",
        steps: [
          "Solicite que o paciente abra a boca e emita um 'Ahhh' sustentado.",
          "Observe a elevação simétrica do véu palatino. Desvio da úvula para o lado saudável indica lesão unilateral do NC X (Sinal da Cortina).",
        ],
      },
      {
        title: "2. Reflexo Nauseoso (IX = aferência; X = eferência)",
        steps: [
          "Toque com espátula a parede posterior da faringe ou a base da língua. Resposta normal: contração faríngea e elevação do palato.",
          "⚠️ NUNCA realize em pacientes com rebaixamento do nível de consciência não intubados (risco de broncoaspiração).",
          "Pesquise assimetria: ausência de contração ipsilateral sugere lesão do NC IX. Ausência de elevação do palato sugere NC X.",
        ],
      },
      {
        title: "3. Fonação e Deglutição",
        steps: [
          "Pesquise rouquidão, voz bitonal ou soprosa (disfonia por paralisia de prega vocal — NC X).",
          "Ofereça pequenos goles d'água: engasgo ou tosse imediata sugere incompetência laríngea (NC X).",
          "Teste fonético: 'Ka-ka-ka' avalia o palato mole (NC X).",
        ],
      },
    ],
    clinicalFindings: [
      {
        term: "Abolição do Reflexo Nauseoso",
        description: "Ausência de contração faríngea reflexa ao toque ipsilateral na parede posterior da faringe (braço aferente: NC IX).",
      },
      {
        term: "Sinal da Cortina (NC X)",
        description: "Desvio da úvula para o lado saudável na lesão unilateral do NC X — o palato paralisado não sobe.",
      },
      {
        term: "Disfagia e Regurgitação Nasal (NC X)",
        description: "Incompetência do palato mole faz líquidos refluírem pela cavidade nasal durante a deglutição.",
      },
      {
        term: "Disfonia (NC X)",
        description: "Paralisia de prega vocal por lesão do nervo laríngeo recorrente (comum em cirurgias de tireoide ou tumores torácicos).",
      },
      {
        term: "Neuralgia do Glossofaríngeo (NC IX)",
        description: "Crises paroxísticas de dor lancinante na garganta ou ouvido disparadas pela deglutição.",
      },
    ],
    professorTips: [
      "O nervo timpânico de Jacobson (ramo do NC IX) forma o plexo timpânico e explica dores referidas no ouvido em afecções faríngeas.",
      "ALERTA: NUNCA force o reflexo nauseoso em pacientes com rebaixamento da consciência não intubados — risco de broncoaspiração.",
      "O NC X inerva todo o aparelho digestivo até a flexura esplênica do cólon — disfunção vagal severa pode causar íleo paralítico.",
    ],
    jointNote: "NC IX (Glossofaríngeo) e NC X (Vago)",
  },
  {
    id: 10,
    roman: "N.C. X",
    name: "Nervo Vago",
    type: "Misto / Viscerais",
    shortSummary: "Motilidade do palato, faringe e cordas vocais; ampla inervação parassimpática toracoabdominal.",
    functionDescription:
      "Motor somático para músculos intrínsecos da laringe (fonação via nervos laríngeos recorrentes) e do palato mole e faringe (deglutição). Parassimpático para coração, pulmões e trato gastrointestinal até a flexura esplênica.",
    semiotecnica: [
      {
        title: "Avaliação Conjunta — NC IX e NC X",
        steps: [
          "A avaliação do NC X é sempre realizada em conjunto com o Glossofaríngeo (NC IX). Consulte o detalhamento completo no NC IX.",
        ],
      },
    ],
    clinicalFindings: [
      {
        term: "Sinal da Cortina",
        description: "Desvio da úvula para o lado saudável — palato paralisado não sobe na lesão unilateral.",
      },
      {
        term: "Disfonia",
        description: "Voz rouca ou soprosa por paralisia de prega vocal (lesão do nervo laríngeo recorrente).",
      },
      {
        term: "Disfagia com Regurgitação Nasal",
        description: "Incompetência do palato mole faz líquidos refluírem pela cavidade nasal durante a deglutição.",
      },
    ],
    professorTips: [
      "ALERTA: NUNCA force o reflexo nauseoso em pacientes com rebaixamento da consciência não intubados — alto risco de broncoaspiração.",
    ],
    jointGroup: 9,
    jointNote: "NC IX (Glossofaríngeo) e NC X (Vago)",
  },
  {
    id: 11,
    roman: "N.C. XI",
    name: "Nervo Acessório",
    type: "Motor",
    shortSummary: "Inervação motora dos músculos trapézio e esternocleidomastoideo (SCM).",
    functionDescription:
      "Motor somático exclusivo para os músculos trapézio (elevação e retração da escápula) e esternocleidomastoideo (rotação contralateral e flexão da cabeça).",
    semiotecnica: [
      {
        title: "Exame do Trapézio e SCM",
        steps: [
          "Músculo Trapézio: posicione suas mãos sobre os ombros do paciente e aplique resistência para baixo enquanto ele tenta elevá-los com força ('dar de ombros').",
          "Músculo Esternocleidomastoideo (SCM): coloque a mão contra a bochecha/mandíbula do paciente e peça para ele virar o rosto contra a sua mão. Para testar o SCM DIREITO, o paciente deve rodar a cabeça para a ESQUERDA.",
          "Palpe simultaneamente o corpo muscular do SCM em contração vigorosa.",
        ],
      },
    ],
    clinicalFindings: [
      {
        term: "Ombro Caído e Fraqueza Escapular",
        description: "Atrofia do trapézio com depressão do contorno do ombro ipsilateral e fraqueza para elevar o braço acima de 90 graus.",
      },
      {
        term: "Dificuldade de Rotação Cervical Contralateral",
        description: "Fraqueza para girar a cabeça para o lado OPOSTO à lesão do nervo.",
      },
      {
        term: "Escápula Alada Leve",
        description: "Discreto afastamento da borda medial da escápula em relação à caixa torácica por paresia do trapézio.",
      },
    ],
    professorTips: [
      "Lembre-se da mecânica do SCM: a contração do músculo de um lado roda a face para o lado oposto.",
      "Lesões isoladas do XI par ocorrem comumente em biópsias ganglionares ou dissecções do trígono cervical posterior.",
    ],
  },
  {
    id: 12,
    roman: "N.C. XII",
    name: "Nervo Hipoglosso",
    type: "Motor",
    shortSummary: "Motilidade intrínseca e extrínseca da língua (protrusão, lateralização e fonação).",
    functionDescription:
      "Motor somático para todos os músculos intrínsecos e extrínsecos da língua (exceto palatoglosso, inervado pelo NC X). Responsável pela modelagem da língua na mastigação, deglutição e articulação lingual.",
    semiotecnica: [
      {
        title: "Exame da motricidade lingual",
        steps: [
          "Inspeção estática: inspecione a língua em repouso absoluto no assoalho da boca, pesquisando atrofia de bordas ou fasciculações involuntárias.",
          "Inspeção dinâmica: solicite que o paciente coloque a língua em protrusão máxima na linha média e mova rapidamente de um lado para o outro.",
          "Teste de força lingual: peça ao paciente para empurrar firmemente a bochecha por dentro com a ponta da língua, enquanto você oferece resistência com o dedo por fora.",
          "Teste fonético lingual: peça para repetir a sequência de fonemas 'Ta-ta-ta' ou 'La-la-la'.",
        ],
      },
    ],
    clinicalFindings: [
      {
        term: "Desvio da Língua em Protrusão",
        description: "Sinal patognomônico: ao protruir, a língua desvia-se PARA O MESMO LADO da lesão (ipsilateral), pois o músculo genioglosso contralateral saudável a empurra sem oposição do lado paralisado.",
      },
      {
        term: "Atrofia e Fasciculações da Língua",
        description: "Língua adelgaçada, com aspecto 'geográfico' e ondulações fibrilares contínuas, característica clássica de lesão de neurônio motor inferior (ex.: ELA).",
      },
      {
        term: "Disartria Lingual",
        description: "Dificuldade na pronúncia articulada de consoantes linguais (como T, D, L, N).",
      },
    ],
    professorTips: [
      "Regra prática: a língua sempre 'aponta para a lesão' na lesão periférica unilateral do hipoglosso.",
      "Lesões do primeiro neurônio motor (corticonucleares/centrais) desviam a língua para o lado contralateral sem causar atrofia nem fasciculações.",
    ],
  },
];
