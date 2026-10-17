import type { Question } from "./questions";

// Reviewed from motorgol.pdf in source order. Difficulty reflects content and reasoning.
export const motorQuestions: Question[] = [
  {
    "id": 351,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Na junção neuromuscular, qual evento desencadeia diretamente a liberação de acetilcolina pelo terminal motor?",
    "options": [
      "Degradação de acetilcolina pela acetilcolinesterase.",
      "Entrada de Ca²⁺ por canais voltagem-dependentes.",
      "Ativação de proteína G pelos receptores musculares.",
      "Saída de Ca²⁺ por receptores nicotínicos da placa motora.",
      "Entrada de Cl⁻ por canais da membrana pré-sináptica."
    ],
    "answer": 1,
    "explanation": "O potencial de ação abre canais de cálcio no terminal pré-sináptico. O influxo de Ca²⁺ desencadeia a exocitose de acetilcolina. Receptores nicotínicos musculares são ionotrópicos; a acetilcolinesterase degrada o transmissor na fenda."
  },
  {
    "id": 352,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Segundo o princípio do tamanho de Henneman, quais unidades motoras são recrutadas primeiro quando a força exigida é pequena?",
    "options": [
      "Unidades rápidas resistentes antes das unidades lentas.",
      "Unidades de maior diâmetro, independentemente da fadiga.",
      "Unidades rápidas, grandes e facilmente fatigáveis.",
      "Todas as unidades, simultaneamente e sem ordenação.",
      "Unidades lentas, pequenas e resistentes à fadiga."
    ],
    "answer": 4,
    "explanation": "Motoneurônios menores têm maior resistência de entrada e atingem o limiar com menor corrente sináptica. O recrutamento geralmente progride de unidades S para FR e FF conforme aumenta a exigência de força."
  },
  {
    "id": 353,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Durante a contração voluntária, qual é a função da coativação dos motoneurônios alfa e gama?",
    "options": [
      "Inibir a placa motora para impedir fadiga muscular.",
      "Transferir a força extrafusal para as fibras intrafusais.",
      "Manter a sensibilidade do fuso durante o encurtamento.",
      "Substituir o controle alfa pela contração dos tendões.",
      "Interromper aferências Ia durante a contração muscular."
    ],
    "answer": 2,
    "explanation": "Alfa inerva fibras extrafusais; gama contrai as extremidades das intrafusais. A coativação evita que o fuso fique frouxo quando o músculo encurta, preservando sua resposta ao estiramento."
  },
  {
    "id": 354,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Sobre as aferências do fuso neuromuscular, assinale a associação correta.",
    "options": [
      "Grupo C: resposta dinâmica rápida ao estiramento muscular.",
      "Grupo Ia: dor tendínea e velocidade de contração articular.",
      "Grupo II: tensão tendínea e reflexo miotático inverso.",
      "Grupo Ia: comprimento muscular e velocidade de estiramento.",
      "Grupo Ib: comprimento estático das fibras intrafusais."
    ],
    "answer": 3,
    "explanation": "Terminações primárias Ia respondem ao comprimento e à velocidade de estiramento; as secundárias do grupo II enfatizam o comprimento estático. O fuso fica em paralelo às fibras extrafusais."
  },
  {
    "id": 355,
    "subject": "motor",
    "difficulty": "facil",
    "statement": "Qual associação descreve corretamente o órgão tendinoso de Golgi?",
    "options": [
      "Disposição em série, aferência C e controle da placa motora.",
      "Disposição em série, eferência gama e produção de força.",
      "Disposição em paralelo, aferência Ia e detecção de comprimento.",
      "Disposição em paralelo, aferência II e detecção de temperatura.",
      "Disposição em série, aferência Ib e detecção de tensão."
    ],
    "answer": 4,
    "explanation": "O órgão tendinoso de Golgi está em série com as fibras musculares na região miotendínea e sinaliza tensão por aferências Ib. Seus efeitos reflexos dependem do contexto motor; não atua apenas como proteção contra sobrecarga."
  },
  {
    "id": 356,
    "subject": "motor",
    "difficulty": "media",
    "statement": "No componente excitatório do reflexo patelar, qual conexão torna a resposta monossináptica?",
    "options": [
      "Aferente C → córtex motor → motoneurônio alfa.",
      "Aferente Ia → motoneurônio alfa do quadríceps.",
      "Aferente II → tálamo → motoneurônio do quadríceps.",
      "Aferente Ia → interneurônio → motoneurônio gama.",
      "Aferente Ib → interneurônio → motoneurônio alfa."
    ],
    "answer": 1,
    "explanation": "A aferência Ia do fuso faz sinapse excitatória direta com o motoneurônio alfa do músculo estirado. A inibição dos isquiotibiais envolve um interneurônio e não pertence ao componente monossináptico. O arco patelar avalia principalmente L2–L4."
  },
  {
    "id": 357,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Ao pisar em um objeto pontiagudo, a retirada do pé e a sustentação pelo membro oposto dependem de qual padrão reflexo?",
    "options": [
      "Flexão ipsilateral e extensão contralateral.",
      "Flexão bilateral e inibição de todos os extensores.",
      "Extensão bilateral sem participação de interneurônios.",
      "Flexão ipsilateral após processamento cortical obrigatório.",
      "Extensão ipsilateral e flexão contralateral."
    ],
    "answer": 0,
    "explanation": "O circuito nociceptivo polissináptico excita flexores e inibe extensores do lado estimulado. Interneurônios cruzados promovem extensão do membro oposto para sustentar o peso, sem exigir processamento cortical prévio."
  },
  {
    "id": 358,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Sobre a origem do trato corticoespinal, qual afirmação é correta?",
    "options": [
      "Parte apenas do córtex pré-frontal e do cíngulo.",
      "Origina-se apenas de células de Betz da área 4.",
      "Parte exclusivamente de núcleos motores do tálamo.",
      "Origina-se no estriado e atravessa as pirâmides bulbares.",
      "Recebe fibras de áreas motoras e somatossensoriais."
    ],
    "answer": 4,
    "explanation": "O trato reúne projeções de M1, áreas pré-motoras e suplementares e regiões somatossensoriais. As proporções variam entre descrições; as células de Betz representam uma pequena parcela. As fibras passam pela perna posterior da cápsula interna."
  },
  {
    "id": 359,
    "subject": "motor",
    "difficulty": "facil",
    "statement": "Na transição bulbomedular, a maioria das fibras corticoespinais cruza e passa a integrar qual trato?",
    "options": [
      "Espinocerebelar posterior, no pedúnculo inferior.",
      "Vestibuloespinal medial, no funículo anterior.",
      "Corticoespinal lateral, no funículo lateral.",
      "Rubroespinal, no funículo lateral da medula.",
      "Corticoespinal anterior, no funículo posterior."
    ],
    "answer": 2,
    "explanation": "Aproximadamente 85–90% das fibras cruzam na decussação das pirâmides e formam o trato corticoespinal lateral. A parcela restante segue principalmente no trato anterior, com projeções segmentares frequentemente bilaterais."
  },
  {
    "id": 360,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Comparando os tratos corticoespinais anterior e lateral, qual associação funcional é mais adequada?",
    "options": [
      "Anterior: musculatura axial; lateral: movimentos distais finos.",
      "Anterior: reflexos auditivos; lateral: sensibilidade dos membros.",
      "Anterior: músculos da face; lateral: músculos extraoculares.",
      "Anterior: dedos da mão; lateral: musculatura axial do tronco.",
      "Anterior: músculos intrafusais; lateral: musculatura cardíaca."
    ],
    "answer": 0,
    "explanation": "O trato anterior participa do controle axial e proximal, com influência frequentemente bilateral e cruzamento de parte das fibras no nível segmentar. O lateral é especialmente importante para movimentos fracionados das extremidades."
  },
  {
    "id": 361,
    "subject": "motor",
    "difficulty": "media",
    "statement": "A maioria dos núcleos motores de nervos cranianos recebe projeções corticobulbares com qual padrão?",
    "options": [
      "Bilateral apenas nos núcleos motores oculares.",
      "Exclusivamente ipsilateral em todos os núcleos.",
      "Bilateral, com exceções de predomínio contralateral.",
      "Exclusivamente contralateral em todos os núcleos.",
      "Ipsilateral no facial inferior e bilateral nos demais."
    ],
    "answer": 2,
    "explanation": "A via corticonuclear parte da representação lateral da face e passa pelo joelho da cápsula interna. O padrão é predominantemente bilateral, mas a musculatura da metade inferior da face e o genioglosso recebem forte influência contralateral."
  },
  {
    "id": 362,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Por que uma lesão corticobulbar unilateral costuma poupar a testa na paralisia facial central?",
    "options": [
      "A musculatura da testa não depende do córtex motor.",
      "O núcleo facial inferior recebe somente comando bilateral.",
      "O frontal é inervado pelo trigêmeo, não pelo facial.",
      "A musculatura facial superior recebe comando bilateral.",
      "O nervo facial superior recebe apenas comando ipsilateral."
    ],
    "answer": 3,
    "explanation": "A inervação corticobulbar bilateral da face superior explica sua preservação relativa no padrão central clássico. A fraqueza predomina na face inferior contralateral. Lesão nuclear ou do nervo facial produz padrão periférico ipsilateral."
  },
  {
    "id": 363,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Qual via descendente facilita especialmente músculos extensores antigravitacionais para manter a postura?",
    "options": [
      "Trato rubroespinal magnocelular.",
      "Trato tectoespinal cervical.",
      "Trato corticoespinal lateral distal.",
      "Trato espinotalâmico anterior.",
      "Trato vestibuloespinal lateral."
    ],
    "answer": 4,
    "explanation": "O trato vestibuloespinal lateral origina-se no núcleo vestibular lateral e facilita o controle extensor postural. O medial participa sobretudo da estabilização da cabeça e do pescoço, não devendo ser equiparado ao lateral."
  },
  {
    "id": 364,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Na descrição clássica do trato rubroespinal, qual é sua origem e influência motora?",
    "options": [
      "Núcleo vestibular lateral; controle flexor da mão ipsilateral.",
      "Núcleo rubro; facilitação de flexores dos membros superiores.",
      "Córtex pré-motor; inibição bilateral da musculatura axial.",
      "Colículo superior; facilitação de extensores dos membros inferiores.",
      "Oliva inferior; comando direto das fibras extrafusais dos dedos."
    ],
    "answer": 1,
    "explanation": "As fibras originam-se na porção magnocelular do núcleo rubro, cruzam na decussação tegmental ventral e descem lateralmente. A facilitação flexora é uma descrição clássica; em humanos o trato é relativamente reduzido."
  },
  {
    "id": 365,
    "subject": "motor",
    "difficulty": "dificil",
    "statement": "No modelo clássico de posturas por lesão encefálica grave, o que favorece a postura de descerebração?",
    "options": [
      "Lesão acima do núcleo rubro, com preservação da flexão braquial.",
      "Lesão seletiva do estriado, com movimentos coreiformes.",
      "Lesão isolada de nervos periféricos, com arreflexia distal.",
      "Lesão limitada ao cerebelo lateral, com dismetria ipsilateral.",
      "Lesão abaixo do núcleo rubro, com predomínio extensor."
    ],
    "answer": 4,
    "explanation": "A descerebração apresenta extensão dos membros e é classicamente associada a lesões ao nível ou abaixo do núcleo rubro, com predomínio de influências extensoras. A decorticação costuma combinar flexão dos braços e extensão das pernas. Esses padrões não localizam a lesão com precisão absoluta."
  },
  {
    "id": 366,
    "subject": "motor",
    "difficulty": "facil",
    "statement": "Qual conjunto de achados favorece uma lesão do neurônio motor inferior?",
    "options": [
      "Rigidez plástica, bradicinesia e tremor de repouso.",
      "Espasticidade, clônus sustentado e sinal de Babinski.",
      "Apraxia, negligência espacial e reflexos preservados.",
      "Dismetria, nistagmo e tremor próximo ao alvo.",
      "Fasciculações, atrofia neurogênica e hiporreflexia."
    ],
    "answer": 4,
    "explanation": "A lesão da via motora final pode causar fraqueza flácida, hipotonia, redução dos reflexos, fasciculações e atrofia neurogênica. Flacidez isolada não é exclusiva de NMI: também pode ocorrer na fase aguda de lesões centrais."
  },
  {
    "id": 367,
    "subject": "motor",
    "difficulty": "facil",
    "statement": "No circuito motor dos núcleos da base, quais estruturas formam o estriado dorsal?",
    "options": [
      "Globo pálido interno e externo.",
      "Substância negra e núcleo subtalâmico.",
      "Núcleo dentado e núcleo fastigial.",
      "Núcleo caudado e putâmen.",
      "Núcleo rubro e colículo superior."
    ],
    "answer": 3,
    "explanation": "O estriado dorsal compreende caudado e putâmen. O estriado ventral inclui o núcleo accumbens. O termo anatômico histórico corpo estriado pode ter uso mais amplo, por isso a pergunta especifica estriado dorsal."
  },
  {
    "id": 368,
    "subject": "motor",
    "difficulty": "dificil",
    "statement": "No modelo clássico dos núcleos da base, qual sequência descreve a via direta? Considere + como excitação e − como inibição.",
    "options": [
      "Córtex (+) estriado (+) GPi/SNr (−) tálamo (+) córtex.",
      "Córtex (+) estriado (−) GPi/SNr (−) tálamo (+) córtex.",
      "Córtex (+) GPe (−) estriado (+) tálamo (−) córtex.",
      "Córtex (+) subtalâmico (−) GPi/SNr (+) tálamo (+) córtex.",
      "Córtex (−) estriado (−) GPi/SNr (+) tálamo (−) córtex."
    ],
    "answer": 1,
    "explanation": "O córtex excita o estriado por glutamato. O estriado inibe GPi/SNr por GABA, reduzindo a inibição tônica sobre o tálamo. Essa desinibição permite maior excitação talamocortical e favorece o movimento selecionado."
  },
  {
    "id": 369,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Ao comparar as vias direta e indireta clássicas, qual estrutura da via indireta envia projeção excitatória ao GPi/SNr?",
    "options": [
      "Substância negra compacta.",
      "Globo pálido externo.",
      "Núcleo caudado.",
      "Estriado dorsal.",
      "Núcleo subtalâmico."
    ],
    "answer": 4,
    "explanation": "O núcleo subtalâmico excita GPi/SNr por glutamato. Na via indireta, a inibição de GPe reduz sua inibição sobre o subtalâmico, aumentando a saída inibitória para o tálamo. O subtalâmico também integra a via hiperdireta; não é exclusivo da indireta."
  },
  {
    "id": 370,
    "subject": "motor",
    "difficulty": "dificil",
    "statement": "No modelo clássico estriatal, como a dopamina favorece o movimento por meio de D1 e D2?",
    "options": [
      "Bloqueia a via direta por D2 e excita o subtalâmico por D1.",
      "Facilita a via direta por D1 e reduz a indireta por D2.",
      "Reduz a via direta por D1 e facilita a indireta por D2.",
      "Inibe ambas as vias por D2 e ativa o GPi diretamente por D1.",
      "Facilita ambas as vias por D1 e bloqueia o tálamo por D2."
    ],
    "answer": 1,
    "explanation": "A dopamina da SNpc facilita neurônios da via direta com D1 e reduz a atividade dos neurônios da indireta com D2. No modelo clássico, o efeito líquido é facilitar a seleção e execução do movimento."
  },
  {
    "id": 371,
    "subject": "motor",
    "difficulty": "dificil",
    "statement": "Qual alteração do circuito motor é esperada com a perda dopaminérgica nigroestriatal na doença de Parkinson?",
    "options": [
      "Menor saída inibitória do GPi/SNr para o tálamo.",
      "Excitação do tálamo por neurônios GABAérgicos do GPi.",
      "Degeneração primária da oliva com perda de aferências cerebelares.",
      "Aumento da via direta e supressão da via indireta.",
      "Maior saída inibitória do GPi/SNr para o tálamo."
    ],
    "answer": 4,
    "explanation": "A degeneração de neurônios dopaminérgicos da SNpc reduz a facilitação da via direta e a supressão da indireta. No modelo clássico isso aumenta a inibição talâmica por GPi/SNr, contribuindo para a hipocinesia."
  },
  {
    "id": 372,
    "subject": "motor",
    "difficulty": "facil",
    "statement": "Lentidão de movimentos, rigidez plástica e tremor em repouso compõem qual apresentação típica?",
    "options": [
      "Síndrome cerebelar apendicular.",
      "Síndrome de neurônio motor inferior.",
      "Síndrome piramidal espástica.",
      "Síndrome coreica hipercinética.",
      "Síndrome parkinsoniana."
    ],
    "answer": 4,
    "explanation": "Bradicinesia é central na definição de parkinsonismo, associada a rigidez e/ou tremor de repouso. A rigidez pode ser uniforme ou em roda denteada. Nem todo paciente com Parkinson apresenta tremor."
  },
  {
    "id": 373,
    "subject": "motor",
    "difficulty": "dificil",
    "statement": "Na fase inicial da doença de Huntington, qual alteração ajuda a explicar a coreia no modelo clássico?",
    "options": [
      "Degeneração de motoneurônios alfa do corno anterior.",
      "Perda preferencial de neurônios estriatais da via indireta.",
      "Bloqueio da decussação das fibras corticoespinais bulbares.",
      "Perda preferencial de neurônios dopaminérgicos da SNpc.",
      "Aumento da inibição talâmica por hiperatividade do GPi."
    ],
    "answer": 1,
    "explanation": "A perda inicial preferencial de neurônios espinhosos médios da via indireta reduz a supressão do movimento, favorecendo coreia. A doença envolve progressivamente outros circuitos, além de alterações cognitivas e psiquiátricas."
  },
  {
    "id": 374,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Um paciente apresenta hemibalismo à direita. Qual lesão é a associação neuroanatômica clássica?",
    "options": [
      "Corno anterior medular esquerdo.",
      "Núcleo vestibular lateral direito.",
      "Núcleo subtalâmico esquerdo.",
      "Hemisfério cerebelar direito.",
      "Núcleo subtalâmico direito."
    ],
    "answer": 2,
    "explanation": "A lesão subtalâmica contralateral pode reduzir a excitação do GPi, desinibindo o tálamo e favorecendo movimentos de grande amplitude. Hemibalismo também pode ocorrer com lesões em outras regiões do circuito motor."
  },
  {
    "id": 375,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Qual associação descreve um circuito não motor dos núcleos da base?",
    "options": [
      "Globo pálido e córtex auditivo: transdução coclear.",
      "Caudado e pré-frontal dorsolateral: funções executivas.",
      "Putâmen e córtex visual primário: reflexo fotomotor.",
      "Substância negra e hipotálamo: síntese de hormônio tireoidiano.",
      "Subtalâmico e área de Broca: geração direta da fala."
    ],
    "answer": 1,
    "explanation": "Circuitos associativos ligam o caudado ao pré-frontal e participam de planejamento e memória operacional. Circuitos límbicos envolvem estriado ventral e motivação/recompensa, além dos circuitos motores e oculomotores."
  },
  {
    "id": 376,
    "subject": "motor",
    "difficulty": "facil",
    "statement": "Qual associação entre divisão funcional cerebelar e função está correta?",
    "options": [
      "Espinocerebelo: secreção de hormônios hipofisários.",
      "Vestibulocerebelo: execução de linguagem proposicional.",
      "Cerebrocerebelo: geração do reflexo patelar medular.",
      "Vestibulocerebelo: equilíbrio e movimentos oculares.",
      "Espinocerebelo: reconhecimento consciente de odores."
    ],
    "answer": 3,
    "explanation": "O vestibulocerebelo, relacionado ao lóbulo floculonodular, regula equilíbrio e controle ocular. O espinocerebelo participa da correção da execução; o cerebrocerebelo participa do planejamento e temporização de movimentos complexos."
  },
  {
    "id": 377,
    "subject": "motor",
    "difficulty": "dificil",
    "statement": "Qual sequência associa, respectivamente, verme, zona intermediária e hemisfério lateral aos principais núcleos de saída?",
    "options": [
      "Dentado → interpósitos → fastigial.",
      "Dentado → fastigial → interpósitos.",
      "Fastigial → dentado → interpósitos.",
      "Interpósitos → dentado → fastigial.",
      "Fastigial → interpósitos → dentado."
    ],
    "answer": 4,
    "explanation": "O verme projeta principalmente ao fastigial; a zona intermediária aos núcleos interpósitos (globoso e emboliforme); e a zona lateral ao dentado. Nem toda saída cortical passa pelos núcleos profundos: há projeções diretas para núcleos vestibulares."
  },
  {
    "id": 378,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Qual tipo celular constitui a única saída neuronal do córtex cerebelar, e qual transmissor utiliza?",
    "options": [
      "Célula em cesto; acetilcolina.",
      "Célula estrelada; dopamina.",
      "Célula de Golgi; glutamato.",
      "Célula granular; glicina.",
      "Célula de Purkinje; GABA."
    ],
    "answer": 4,
    "explanation": "As células de Purkinje são GABAérgicas e projetam aos núcleos profundos e vestibulares. Células granulares são excitatórias glutamatérgicas e seus axônios formam as fibras paralelas."
  },
  {
    "id": 379,
    "subject": "motor",
    "difficulty": "dificil",
    "statement": "Qual associação distingue corretamente as aferências cerebelares trepadeiras e musgosas?",
    "options": [
      "Trepadeiras: oliva inferior; musgosas: sinapse em células granulares.",
      "Trepadeiras: eferência dentada; musgosas: trato corticoespinal.",
      "Trepadeiras: fibras paralelas; musgosas: origem exclusiva olivar.",
      "Trepadeiras: estriado dorsal; musgosas: inibição por GABA.",
      "Trepadeiras: núcleos pontinos; musgosas: sinapse direta em Purkinje."
    ],
    "answer": 0,
    "explanation": "Trepadeiras vêm do complexo olivar inferior e geram potenciais complexos em Purkinje. Musgosas têm diversas origens e excitam células granulares, que alcançam Purkinje por fibras paralelas. Ambas também fornecem colaterais aos núcleos profundos."
  },
  {
    "id": 380,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Para corrigir um movimento em execução, o cerebelo utiliza principalmente qual comparação?",
    "options": [
      "Sinal doloroso periférico versus pressão arterial sistêmica.",
      "Comando motor previsto versus feedback do movimento realizado.",
      "Memória declarativa versus concentração de glicose sanguínea.",
      "Tônus visceral versus potencial da placa neuromuscular.",
      "Atividade visual consciente versus secreção hipofisária."
    ],
    "answer": 1,
    "explanation": "Informações sobre o comando motor e o estado real do corpo permitem detectar discrepâncias e ajustar a execução. A aprendizagem também modifica circuitos cerebelares para melhorar movimentos posteriores."
  },
  {
    "id": 381,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Uma lesão focal do hemisfério cerebelar direito tende a causar dismetria em qual lado?",
    "options": [
      "Bilateral, obrigatoriamente simétrica.",
      "Esquerdo, contralateral à lesão.",
      "Apenas no tronco, sem afetar membros.",
      "Apenas na face esquerda.",
      "Direito, ipsilateral à lesão."
    ],
    "answer": 4,
    "explanation": "Sinais apendiculares cerebelares são tipicamente ipsilaterais. Propriocepção predominantemente ipsilateral e a organização das saídas, incluindo a dupla decussação cerebelo–córtex–medula, contribuem para essa lateralidade."
  },
  {
    "id": 382,
    "subject": "motor",
    "difficulty": "facil",
    "statement": "Marcha de base alargada e ultrapassagem do alvo no teste índice-nariz correspondem, respectivamente, a:",
    "options": [
      "Apraxia e bradicinesia.",
      "Espasticidade e clônus.",
      "Ataxia e hipermetria.",
      "Coreia e hiporreflexia.",
      "Rigidez e fasciculação."
    ],
    "answer": 2,
    "explanation": "Ataxia é falta de coordenação. Dismetria é erro na amplitude do movimento: ultrapassar o alvo é hipermetria; ficar aquém é hipometria. Esses achados são comuns na síndrome cerebelar."
  },
  {
    "id": 383,
    "subject": "motor",
    "difficulty": "facil",
    "statement": "Dificuldade na pronação/supinação rápida e tremor que aumenta perto do alvo indicam quais sinais?",
    "options": [
      "Bradicinesia e tremor de repouso.",
      "Apraxia e reflexo cutâneo-plantar extensor.",
      "Clônus e rigidez em roda denteada.",
      "Disdiadococinesia e tremor de intenção.",
      "Fasciculações e sinal do canivete."
    ],
    "answer": 3,
    "explanation": "Disdiadococinesia é dificuldade para alternar rapidamente movimentos. O tremor de intenção aumenta na aproximação do alvo e é um subtipo de tremor de ação, não um sinônimo de todo tremor de ação."
  },
  {
    "id": 384,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Uma lesão do vestibulocerebelo costuma produzir qual combinação predominante?",
    "options": [
      "Apraxia ideomotora e dificuldade de compreensão verbal.",
      "Atrofia distal e fasciculações com arreflexia.",
      "Tremor de repouso e rigidez plástica assimétrica.",
      "Hemianopsia homônima e perda de visão de cores.",
      "Instabilidade axial e alterações dos movimentos oculares."
    ],
    "answer": 4,
    "explanation": "O vestibulocerebelo contribui para equilíbrio e controle ocular. Lesões podem causar instabilidade de tronco, marcha atáxica e nistagmo; a coordenação dos membros pode estar relativamente preservada quando o corpo está apoiado."
  },
  {
    "id": 385,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Sobre os pedúnculos cerebelares, assinale a associação correta.",
    "options": [
      "Médio: entrada de fibras pontocerebelares.",
      "Superior: apenas entrada de fibras vestibulares.",
      "Médio: saída principal do cerebelo para o núcleo rubro.",
      "Inferior: apenas saída do dentado para o tálamo.",
      "Superior: condução exclusiva de aferências olivocerebelares."
    ],
    "answer": 0,
    "explanation": "O pedúnculo médio conduz aferências originadas nos núcleos pontinos. O superior é predominantemente eferente, mas também leva aferências, como as espinocerebelares anteriores. O inferior é misto."
  },
  {
    "id": 386,
    "subject": "motor",
    "difficulty": "facil",
    "statement": "Qual associação entre área cortical e papel motor está correta?",
    "options": [
      "Pré-frontal: geração do reflexo patelar monossináptico.",
      "Pré-motor, área 6: secreção de acetilcolina muscular.",
      "M1, área 4: execução de movimentos voluntários.",
      "SMA, área 6: percepção primária da dor cutânea.",
      "Broca, áreas 44/45: controle do ritmo cardíaco."
    ],
    "answer": 2,
    "explanation": "M1, no giro pré-central, participa da execução e do controle motor. O córtex pré-motor e a SMA participam da preparação, seleção e sequenciamento, em redes com outras áreas."
  },
  {
    "id": 387,
    "subject": "motor",
    "difficulty": "facil",
    "statement": "Por que mãos e face ocupam grande extensão no homúnculo motor?",
    "options": [
      "Recebem comandos motores exclusivamente bilaterais.",
      "Exigem controle motor fino e diferenciado.",
      "Possuem os maiores músculos do corpo humano.",
      "Não apresentam plasticidade após aprendizagem.",
      "São representadas apenas na face medial cerebral."
    ],
    "answer": 1,
    "explanation": "A extensão cortical não acompanha o tamanho físico do segmento. Regiões que exigem controle fino e fracionado têm representação extensa; a somatotopia também pode mudar com experiência e lesões."
  },
  {
    "id": 388,
    "subject": "motor",
    "difficulty": "dificil",
    "statement": "Um infarto que acomete a região lateral de M1 no território da artéria cerebral média esquerda tende a produzir:",
    "options": [
      "Fraqueza crural esquerda isolada.",
      "Fraqueza faciobraquial direita.",
      "Paralisia facial periférica esquerda.",
      "Ataxia apendicular esquerda isolada.",
      "Paralisia bilateral apenas dos pés."
    ],
    "answer": 1,
    "explanation": "A ACM irriga a convexidade lateral, onde predominam as representações da face e do membro superior. A fraqueza é contralateral, portanto direita. A região medial do membro inferior é irrigada principalmente pela ACA."
  },
  {
    "id": 389,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Qual tarefa é particularmente associada à área motora suplementar?",
    "options": [
      "Gerar a resposta do fuso a um estiramento passivo.",
      "Retirar o pé por reflexo após um estímulo nociceptivo.",
      "Detectar a intensidade luminosa por fotorreceptores.",
      "Ensaiar mentalmente uma sequência de movimentos dos dedos.",
      "Liberar acetilcolina no terminal do motoneurônio alfa."
    ],
    "answer": 3,
    "explanation": "A SMA participa da preparação de sequências geradas internamente e da imaginação motora. Outras áreas também são recrutadas; não é correto afirmar que M1 fica necessariamente silencioso em toda imaginação motora."
  },
  {
    "id": 390,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Um paciente entende a ordem e conserva força e coordenação, mas não consegue demonstrar como escovar os dentes. O achado sugere:",
    "options": [
      "Perda de compreensão da linguagem.",
      "Apraxia ideomotora.",
      "Ataxia cerebelar apendicular.",
      "Paresia por lesão do nervo periférico.",
      "Bradicinesia parkinsoniana isolada."
    ],
    "answer": 1,
    "explanation": "Apraxia ideomotora compromete gestos aprendidos sob comando ou imitação, sem explicação por fraqueza, ataxia ou incompreensão. Pode resultar de lesões na rede parietofrontal, geralmente no hemisfério dominante."
  },
  {
    "id": 391,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Qual papel do córtex parietal posterior auxilia os movimentos de alcance e preensão?",
    "options": [
      "Gerar a decussação das fibras corticoespinais.",
      "Integrar visão e somestesia para orientar o movimento.",
      "Produzir acetilcolina para ativar a placa muscular.",
      "Inibir diretamente todas as aferências dos fusos.",
      "Substituir o cerebelo na detecção de tensão tendínea."
    ],
    "answer": 1,
    "explanation": "As áreas parietais posteriores integram posição corporal e informação visual, contribuindo para transformações sensório-motoras e guiando áreas pré-motoras em tarefas dirigidas a alvos."
  },
  {
    "id": 392,
    "subject": "motor",
    "difficulty": "facil",
    "statement": "No conceito clássico de neurônios-espelho, qual propriedade define essas células?",
    "options": [
      "Ativação apenas durante o sono profundo sem atividade motora.",
      "Resposta exclusiva ao estiramento passivo das fibras intrafusais.",
      "Ativação ao executar e ao observar uma ação dirigida a um fim.",
      "Atividade apenas quando uma ação é imaginada sem ser observada.",
      "Descarga apenas ao contrair músculos contra resistência máxima."
    ],
    "answer": 2,
    "explanation": "Neurônios-espelho foram descritos principalmente em regiões pré-motoras e parietais de primatas, com atividade na execução e observação de certas ações. Não se deve tratar empatia ou imitação como funções exclusivamente comprovadas dessas células."
  },
  {
    "id": 393,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Qual achado caracteriza a fase de choque espinal após uma lesão medular aguda grave?",
    "options": [
      "Rigidez em roda denteada restrita aos braços.",
      "Redução transitória dos reflexos abaixo da lesão.",
      "Marcha normal apesar da interrupção motora completa.",
      "Tremor de repouso sem alteração dos reflexos profundos.",
      "Hiperreflexia obrigatória desde o primeiro minuto."
    ],
    "answer": 1,
    "explanation": "O choque espinal é a depressão transitória da atividade reflexa abaixo da lesão, com flacidez e arreflexia iniciais. A recuperação dos reflexos não significa recuperação da condução motora ou sensitiva. Choque neurogênico é a síndrome hemodinâmica de perda do tônus simpático, distinta embora possa coexistir."
  },
  {
    "id": 394,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Como se reconhece clinicamente a espasticidade e o fenômeno do canivete?",
    "options": [
      "Resistência constante em qualquer velocidade, sem cessão.",
      "Contrações espontâneas de unidades motoras em repouso.",
      "Resistência maior ao estiramento rápido, com cessão súbita.",
      "Oscilações rítmicas que surgem apenas perto de um alvo.",
      "Ausência de resistência mesmo com estiramento rápido."
    ],
    "answer": 2,
    "explanation": "Espasticidade é aumento velocidade-dependente da resposta ao estiramento. O canivete é uma resistência inicial que cede abruptamente. A fisiologia envolve alterações reflexas e descendentes; atribuí-lo exclusivamente ao órgão de Golgi é uma simplificação."
  },
  {
    "id": 395,
    "subject": "motor",
    "difficulty": "facil",
    "statement": "Qual resposta à estimulação plantar corresponde ao sinal de Babinski em um adulto?",
    "options": [
      "Ausência de qualquer movimento em ambos os pés.",
      "Flexão plantar do hálux com fechamento dos outros dedos.",
      "Contração do quadríceps com extensão da perna.",
      "Flexão isolada do joelho sem movimento dos dedos.",
      "Extensão do hálux, podendo haver abertura dos outros dedos."
    ],
    "answer": 4,
    "explanation": "A resposta plantar extensora do hálux sugere disfunção da via corticoespinal em adultos; o lequeamento pode acompanhar, mas não é obrigatório. Em crianças pequenas pode ser fisiológica. Ausência de resposta não equivale a Babinski positivo."
  },
  {
    "id": 396,
    "subject": "motor",
    "difficulty": "media",
    "statement": "Qual combinação de sinais motores é característica da esclerose lateral amiotrófica?",
    "options": [
      "Coreia e lesão seletiva da via indireta estriatal.",
      "Rigidez extrapiramidal e hemianopsia homônima.",
      "Sinais cerebelares e perda sensitiva profunda.",
      "Paralisia sensitiva e perda de reflexos pupilares.",
      "Sinais de neurônio motor superior e inferior."
    ],
    "answer": 4,
    "explanation": "A ELA combina degeneração de NMS e NMI, com possíveis espasticidade, hiperreflexia, atrofia e fasciculações. A sensibilidade costuma estar relativamente preservada; pode haver comprometimento cognitivo/comportamental, portanto não é invariavelmente uma doença apenas motora."
  },
  {
    "id": 397,
    "subject": "motor",
    "difficulty": "facil",
    "statement": "Na poliomielite paralítica, qual estrutura medular é especialmente acometida?",
    "options": [
      "Axônios ascendentes das colunas dorsais.",
      "Neurônios sensitivos do corno posterior.",
      "Motoneurônios do corno anterior.",
      "Fibras do trato espinotalâmico lateral.",
      "Interneurônios da substância gelatinosa."
    ],
    "answer": 2,
    "explanation": "O poliovírus pode destruir motoneurônios do corno anterior e núcleos motores do tronco. O quadro típico é paralisia flácida assimétrica com reflexos reduzidos e sensibilidade relativamente preservada."
  },
  {
    "id": 398,
    "subject": "motor",
    "difficulty": "dificil",
    "statement": "Qual circuito descreve a inibição recorrente mediada pelas células de Renshaw?",
    "options": [
      "Aferente Ib → Renshaw → excitação do córtex visual primário.",
      "Córtex motor → Renshaw → síntese de acetilcolina na placa.",
      "Motoneurônio gama → Renshaw → liberação de dopamina estriatal.",
      "Aferente Ia → Renshaw → excitação direta da fibra muscular.",
      "Colateral do motoneurônio alfa → Renshaw → inibição motora."
    ],
    "answer": 4,
    "explanation": "Uma colateral recorrente do axônio alfa excita a célula de Renshaw, que devolve inibição principalmente glicinérgica a motoneurônios e outros alvos. Esse feedback ajuda a regular e estabilizar a atividade do circuito motor."
  },
  {
    "id": 399,
    "subject": "motor",
    "difficulty": "media",
    "statement": "No modelo clássico do controle reticuloespinal da postura, qual tendência funcional é descrita?",
    "options": [
      "Pontino age apenas nos olhos; bulbar apenas nos músculos da face.",
      "Pontino inibe extensores; bulbar só ativa movimentos dos dedos.",
      "Pontino facilita extensores; bulbar pode reduzir seu tônus.",
      "Ambos geram paralisia ao receber comandos corticais.",
      "Pontino leva tato fino; bulbar conduz sensibilidade dolorosa."
    ],
    "answer": 2,
    "explanation": "A descrição clássica atribui facilitação extensora ao sistema pontino e influência inibitória ao bulbar. Na realidade, as projeções reticuloespinais têm efeitos variados conforme o grupo muscular e a tarefa, sob modulação cortical e cerebelar."
  },
  {
    "id": 400,
    "subject": "motor",
    "difficulty": "dificil",
    "statement": "Após a fase aguda, uma hemissecção medular direita em T10 tende a produzir qual déficit motor abaixo da lesão?",
    "options": [
      "Preservação da força com perda motora apenas facial.",
      "Paralisia espástica exclusiva dos membros superiores.",
      "Fraqueza flácida permanente apenas no membro inferior esquerdo.",
      "Fraqueza espástica no membro inferior direito.",
      "Fraqueza simétrica dos quatro membros sem sinais piramidais."
    ],
    "answer": 3,
    "explanation": "O trato corticoespinal lateral já cruzou no bulbo; sua interrupção à direita causa déficit de NMS ipsilateral abaixo de T10. Na fase aguda pode haver flacidez por choque espinal. O padrão sensitivo clássico combina perda proprioceptiva ipsilateral e dor/temperatura contralateral, geralmente começando alguns segmentos abaixo."
  }
];
