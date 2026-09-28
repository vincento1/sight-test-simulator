import type { Question } from "./questions";

export const auditivoQuestions: Question[] = [
  {
    id: 101,
    subject: "auditivo",
    statement:
      "A cavidade timpânica da orelha média é anatomicamente subdividida em regiões com base em sua relação com a membrana timpânica. Sobre essas divisões, assinale a alternativa correta:",
    options: [
      "O recesso epitimpânico situa-se inferiormente à membrana timpânica e abriga a tuba auditiva.",
      "A cavidade timpânica propriamente dita situa-se medial e diretamente oposta à membrana timpânica.",
      "O recesso epitimpânico acolhe exclusivamente a platina do estribo e o nervo estapédio.",
      "A cavidade timpânica comunica-se livremente com a orelha interna através do óstio da tuba auditiva.",
      "O recesso hipotimpânico é a porção superior que aloja a cabeça do martelo e o corpo da bigorna.",
    ],
    answer: 1,
    explanation:
      "A cavidade timpânica propriamente dita situa-se diretamente oposta à membrana timpânica, enquanto o recesso epitimpânico (ou ático) situa-se superiormente à membrana, abrigando a cabeça do martelo e o corpo da bigorna.",
    difficulty: "dificil",
  },
  {
    id: 102,
    subject: "auditivo",
    statement:
      "A cadeia de ossículos da orelha média realiza a transmissão mecânica das vibrações da membrana timpânica até a orelha interna. A sequência anatômica correta da condução e a sua conexão de saída são:",
    options: [
      "Estribo → Bigorna → Martelo → Janela Redonda.",
      "Martelo → Bigorna → Estribo → Janela Oval.",
      "Bigorna → Martelo → Estribo → Janela Oval.",
      "Martelo → Estribo → Bigorna → Janela Redonda.",
      "Estribo → Martelo → Bigorna → Helicotrema.",
    ],
    answer: 1,
    explanation:
      "O cabo do martelo fixa-se à membrana timpânica e articula-se com a bigorna, que por sua vez articula-se com a cabeça do estribo; a platina do estribo encaixa-se na janela oval.",
    difficulty: "media",
  },
  {
    id: 103,
    subject: "auditivo",
    statement:
      "A tuba auditiva (trompa de Eustáquio) conecta a cavidade timpânica à nasofaringe. Sua principal função fisiológica no sistema auditivo consiste em:",
    options: [
      "Secretar endolinfa para preencher a câmara do recesso epitimpânico.",
      "Amplificar a frequência dos sons agudos recebidos do meato acústico externo.",
      "Igualar a pressão do ar contido na orelha média com a pressão atmosférica do ambiente.",
      "Impedir que o reflexo estapédico seja ativado durante a deglutição.",
      "Conduzir os impulsos nervosos do plexo timpânico até o tronco encefálico.",
    ],
    answer: 2,
    explanation:
      "A tuba auditiva permite a equalização da pressão do ar entre a cavidade da orelha média e a atmosfera, abrindo-se ativamente durante a deglutição ou o bocejo.",
    difficulty: "media",
  },
  {
    id: 104,
    subject: "auditivo",
    statement:
      "A inervação sensitiva e autônoma da mucosa da cavidade timpânica e a formação do plexo timpânico dependem do ramo de um nervo craniano específico. Trata-se do:",
    options: [
      "Nervo timpânico, ramo do nervo glossofaríngeo (NC IX).",
      "Nervo petroso maior, ramo do nervo facial (NC VII).",
      "Nervo nasociliar, ramo do nervo oftálmico (NC V1).",
      "Nervo corda do tímpano, ramo do nervo vago (NC X).",
      "Nervo vestibulococlear (NC VIII).",
    ],
    answer: 0,
    explanation:
      "O nervo timpânico (nervo de Jacobson) é um ramo do nervo glossofaríngeo (NC IX) que entra na orelha média e forma o plexo timpânico, responsável pela inervação sensitiva da mucosa timpânica.",
    difficulty: "media",
  },
  {
    id: 105,
    subject: "auditivo",
    statement:
      "Ao conduzir o som do meio aéreo para o meio líquido da cóclea, ocorre uma tendência natural de perda de energia por incompatibilidade de impedância. A orelha média supera essa resistência principalmente por:",
    options: [
      "Absorção de ressonância pelas células mastóideas.",
      "Diferença de área tímpano-estribo e efeito de alavanca dos ossículos.",
      "Contração tônica contínua do músculo estapédio.",
      "Aumento na frequência de vibração do fluido endolinfático.",
      "Despressurização do ar através da abertura da janela redonda.",
    ],
    answer: 1,
    explanation:
      "A grande área da membrana timpânica comparada à pequena área da janela oval (proporção ~17:1), aliada à alavanca mecânica dos ossículos, multiplica a pressão exercida na janela oval, superando a impedância do fluido coclear.",
    difficulty: "dificil",
  },
  {
    id: 106,
    subject: "auditivo",
    statement:
      "O músculo tensor do tímpano atua na regulação da rigidez da cadeia ossicular. Assinale a alternativa correta sobre sua fixação e inervação:",
    options: [
      "Fixa-se na bigorna e é inervado pelo nervo facial (NC VII).",
      "Fixa-se no cabo do martelo e é inervado pelo nervo mandibular (NC V3).",
      "Fixa-se no estribo e é inervado pelo nervo glossofaríngeo (NC IX).",
      "Fixa-se na membrana da janela oval e é inervado pelo nervo abducente (NC VI).",
      "Fixa-se na tuba auditiva e é inervado pelo nervo vago (NC X).",
    ],
    answer: 1,
    explanation:
      "O músculo tensor do tímpano insere-se no cabo do martelo e recebe inervação motora do ramo mandibular do nervo trigêmeo (NC V3).",
    difficulty: "facil",
  },
  {
    id: 107,
    subject: "auditivo",
    statement:
      "O músculo estapédio é o menor músculo esquelético do corpo humano. Sua função e inervação motora correspondem a:",
    options: [
      "Tracionar a bigorna medialmente; inervado pelo NC V3.",
      "Tracionar o estribo posteriormente, atenuando a vibração; inervado pelo NC VII.",
      "Elevar a cavidade do recesso epitimpânico; inervado pelo NC IX.",
      "Relaxar a membrana timpânica durante a fala; inervado pelo NC VIII.",
      "Dilatar o óstio da tuba auditiva; inervado pelo NC X.",
    ],
    answer: 1,
    explanation:
      "O músculo estapédio fixa-se no estribo e é inervado pelo nervo facial (NC VII). Sua contração traciona o estribo e enrijece a cadeia ossicular.",
    difficulty: "facil",
  },
  {
    id: 108,
    subject: "auditivo",
    statement:
      "O reflexo de atenuação (ou reflexo estapédico) é uma resposta motora involuntária desencadeada por sons de elevada intensidade. A principal consequência fisiológica desse reflexo é:",
    options: [
      "Amplificar os sons de frequência agudíssima acima de 15.000 Hz.",
      "Enrijecer a cadeia ossicular por contração muscular, protegendo a cóclea.",
      "Bloquear completamente a passagem de ar pela tuba auditiva.",
      "Induzir a secreção rápida de perilinfa pela estria vascular.",
      "Promover a rápida hiperpolarização dos fotorreceptores da mácula.",
    ],
    answer: 1,
    explanation:
      "O reflexo de atenuação envolve a contração dos músculos estapédio e tensor do tímpano, enrijecendo a cadeia ossicular para proteger o ouvido interno contra lesões por sons fortes de baixa frequência.",
    difficulty: "dificil",
  },
  {
    id: 109,
    subject: "auditivo",
    statement:
      "A parede medial (labiríntica) da cavidade timpânica separa a orelha média da orelha interna e apresenta acidentes anatômicos marcantes. Dentre eles, destaca-se:",
    options: [
      "O óstio da tuba auditiva e o meato acústico externo.",
      "O promontório, a janela oval e a janela redonda.",
      "A fossa jugular e o sulco do seio sigmoide.",
      "O processo mastoide e o buraco estilomastóideo.",
      "A crista gali e a lâmina cribrosa.",
    ],
    answer: 1,
    explanation:
      "A parede medial abriga o promontório (saliência da espira basal da cóclea), a janela do vestíbulo (oval) e a janela da cóclea (redonda).",
    difficulty: "dificil",
  },
  {
    id: 110,
    subject: "auditivo",
    statement:
      "Infecções da via aérea superior podem se alastrar para a orelha média resultando em otite média aguda. Esse alastramento ocorre anatomicamente através de qual estrutura?",
    options: [
      "Meato acústico interno.",
      "Tuba auditiva.",
      "Adito do antro mastóideo.",
      "Aqueduto do vestíbulo.",
      "Fissura petrotimpânica.",
    ],
    answer: 1,
    explanation:
      "A tuba auditiva estabelece comunicação direta entre a nasofaringe e a cavidade timpânica, sendo a principal via de acesso para patógenos causadores de otite média.",
    difficulty: "media",
  },
  {
    id: 111,
    subject: "auditivo",
    statement:
      "A cóclea é um tubo espiralado do labirinto ósseo dividido em três compartimentos ( rampas ou escalas ). A ordem e delimitação correta dessas rampas é:",
    options: [
      "Escala vestibular (superior), Ducto coclear (médio) e Escala timpânica (inferior).",
      "Escala timpânica (superior), Escala vestibular (intermediária) e Ducto coclear (inferior).",
      "Ducto coclear (superior), Escala vestibular (intermediária) e Escala timpânica (inferior).",
      "Escala média (superior), Escala timpânica (intermediária) e Escala vestibular (inferior).",
      "Escala vestibular (superior), Escala timpânica (intermediária) e Ducto coclear (inferior).",
    ],
    answer: 0,
    explanation:
      "A cóclea divide-se em escala vestibular (em contato com a janela oval), ducto coclear ou escala média (contendo o órgão de Corti) e escala timpânica (em contato com a janela redonda).",
    difficulty: "media",
  },
  {
    id: 112,
    subject: "auditivo",
    statement:
      "No ápice da cóclea, a escala vestibular comunica-se diretamente com a escala timpânica através de uma abertura denominada:",
    options: [
      "Modíolo.",
      "Helicotrema.",
      "Ampola membranácea.",
      "Porus acústico interno.",
      "Aqueduto coclear.",
    ],
    answer: 1,
    explanation:
      "O helicotrema é a orifício situado no ápice da cóclea que estabelece a continuidade fluídica entre a escala vestibular e a escala timpânica.",
    difficulty: "facil",
  },
  {
    id: 113,
    subject: "auditivo",
    statement:
      "Sendo o tecido coclear delimitado por paredes ósseas rígidas e preenchido por fluido incompressível, o movimento para dentro da platina do estribo na janela oval exige:",
    options: [
      "O colapso imediato da membrana de Reissner.",
      "O abaulamento compensatório para fora da membrana da janela redonda.",
      "A drenagem instantânea de endolinfa pelo ducto endolinfático.",
      "O fechamento mecânico da tuba auditiva.",
      "A constrição das células ciliares externas.",
    ],
    answer: 1,
    explanation:
      "Como o líquido é incompressível, a pressão exercida na janela oval desloca a coluna fluídica e faz a membrana da janela redonda projetar-se para fora na cavidade timpânica.",
    difficulty: "media",
  },
  {
    id: 114,
    subject: "auditivo",
    statement:
      "A perilinfa é o fluido que preenche a escala vestibular e a escala timpânica. Sua composição iônica característica e semelhança biológica são:",
    options: [
      "Rica em K+ e pobre em Na+; similar ao meio intracelular.",
      "Rica em Na+ e pobre em K+; similar ao meio extracelular e líquor.",
      "Isenta de íons Na+ e Ca2+; similar ao plasma purificado.",
      "Composta exclusivamente por mucopolissacarídeos e alta concentração de Mg2+.",
      "Rica em íons H+ produzindo pH extremamente ácido.",
    ],
    answer: 1,
    explanation:
      "A perilinfa possui alta concentração de sódio (~140 mM) e baixa de potássio (~7 mM), apresentando composição semelhante ao líquido cerebrospinal e líquido extracelular típico.",
    difficulty: "media",
  },
  {
    id: 115,
    subject: "auditivo",
    statement:
      "O ducto coclear (escala média) contém endolinfa. A principal particularidade iônica da endolinfa, incomum para um líquido extracelular, é:",
    options: [
      "Alta concentração de Na+ (150 mM) e ausência de K+.",
      "Alta concentração de K+ (~150 mM) e baixa concentração de Na+ (~1 mM).",
      "Concentração idêntica à perilinfa porém sem íons cloreto.",
      "Elevado teor de proteínas plasmáticas e baixa osmolalidade.",
      "Composição rica em cálcio e magnésio com ausência de potássio.",
    ],
    answer: 1,
    explanation:
      "A endolinfa é um fluido extracelular atípico caracterizado por elevadíssima concentração de K+ (~150 mM) e baixíssima de Na+ (~1 mM).",
    difficulty: "facil",
  },
  {
    id: 116,
    subject: "auditivo",
    statement:
      "A manutenção das diferenças iônicas da endolinfa e a geração do potencial endococlear positivo (+80 mV) dependem do transporte ativo realizado por qual estrutura?",
    options: [
      "Órgão de Corti.",
      "Estria vascular.",
      "Membrana tectorial.",
      "Limbo espiral.",
      "Modíolo.",
    ],
    answer: 1,
    explanation:
      "A estria vascular, um epitélio vascularizado na parede lateral do ducto coclear, reabsorve Na+ e secreta K+ ativamente, gerando o potencial endococlear de +80 mV.",
    difficulty: "media",
  },
  {
    id: 117,
    subject: "auditivo",
    statement: "O modíolo é uma estrutura anatômica central da cóclea. Ele consiste em:",
    options: [
      "Um canal tubular membranoso responsável por sintetizar perilinfa.",
      "Eixo ósseo cônico central da cóclea que abriga o gânglio espiral.",
      "A membrana que separa a escala média da escala vestibular.",
      "O ligamento fibroso que prende o estribo à janela oval.",
      "A projeção cartilaginosa do meato acústico externo.",
    ],
    answer: 1,
    explanation:
      "O modíolo é o pilar ósseo central cônico da cóclea, por onde passam os axônios e onde se localizam os corpos celulares do gânglio espiral de Corti.",
    difficulty: "facil",
  },
  {
    id: 118,
    subject: "auditivo",
    statement:
      "A escala vestibular está separada do ducto coclear (escala média) por uma fina camada tecidual denominada:",
    options: [
      "Membrana basilar.",
      "Membrana de Reissner.",
      "Membrana tectorial.",
      "Lâmina reticular.",
      "Membrana timpânica secundária.",
    ],
    answer: 1,
    explanation:
      "A membrana de Reissner (ou vestibular) forma o limite superior do ducto coclear, separando-o da escala vestibular.",
    difficulty: "facil",
  },
  {
    id: 119,
    subject: "auditivo",
    statement:
      "A estrutura membranosa que separa a escala média da escala timpânica e serve de base de sustentação para o Órgão de Corti é:",
    options: [
      "Membrana de Reissner.",
      "Membrana basilar.",
      "Estria vascular.",
      "Lâmina espiral óssea superior.",
      "Lâmina reticular.",
    ],
    answer: 1,
    explanation:
      "A membrana basilar forma o assoalho do ducto coclear, separando-o da escala timpânica e suportando o órgão receptor da audição (órgão de Corti).",
    difficulty: "dificil",
  },
  {
    id: 120,
    subject: "auditivo",
    statement:
      "Anatomicamente, o labirinto membranáceo compreende o sistema de sacos e ductos contendo endolinfa. No sistema auditivo, o componente membranáceo é representado pelo:",
    options: [
      "Canal espiral da cóclea.",
      "Ducto coclear.",
      "Helicotrema.",
      "Meato acústico interno.",
      "Recesso epitimpânico.",
    ],
    answer: 1,
    explanation:
      "O ducto coclear é a porção auditiva do labirinto membranáceo, preenchido por endolinfa e alojado no canal espiral ósseo da cóclea.",
    difficulty: "facil",
  },
  {
    id: 121,
    subject: "auditivo",
    statement:
      "O órgão receptor responsável pela transdução mecanoelétrica do som na cóclea é o Órgão de Corti. Sobre sua localização e estrutura, é correto afirmar:",
    options: [
      "Flutua livremente na escala vestibular imerso em perilinfa.",
      "Repousa sobre a membrana basilar e é recoberto pela membrana tectorial.",
      "Situa-se no interior do modíolo diretamente sobre o gânglio espiral.",
      "Está localizado na parede da escala timpânica fixado à estria vascular.",
      "Recobre a superfície interna do tímpano na orelha média.",
    ],
    answer: 1,
    explanation:
      "O órgão de Corti apoia-se sobre a membrana basilar na escala média e contém as células ciliadas recobertas pela membrana tectorial gelatinosa.",
    difficulty: "facil",
  },
  {
    id: 122,
    subject: "auditivo",
    statement:
      "As células ciliadas internas (CCI) e externas (CCE) desempenham papeis distintos na audição. As células ciliadas internas caracterizam-se por:",
    options: [
      "Atuar como os principais transdutores auditivos (95% das aferências espirais).",
      "Mudar de comprimento ativamente para ampliar o som.",
      "Ser inervadas exclusivamente por fibras motoras do nervo facial.",
      "Tocar diretamente a estria vascular para absorver potássio.",
      "Existir em número quatro vezes maior do que as células ciliadas externas.",
    ],
    answer: 0,
    explanation:
      "Embora menos numerosas que as CCE, as células ciliadas internas (CCI) são os receptores sensoriais primários que transmitem quase toda a informação auditiva aferente ao gânglio espiral.",
    difficulty: "media",
  },
  {
    id: 123,
    subject: "auditivo",
    statement:
      "As células ciliadas externas (CCE) atuam como o 'amplificador coclear'. Esse mecanismo de amplificação deve-se à:",
    options: [
      "Secreção rápida de neurotransmissores inibitórios no helicotrema.",
      "Eletromotilidade somática via prestina, amplificando a vibração basilar.",
      "Capacidade de gerar potenciais de ação de alta voltagem que viajam direto ao córtex.",
      "Fagocitose de dejetos protéicos da perilinfa.",
      "Rigidez inflexível dos seus estereocílios ancorados no modíolo.",
    ],
    answer: 1,
    explanation:
      "As CCE possuem a proteína motora prestina na sua membrana; ao despolarizarem, alteram ativamente seu comprimento, amplificando o movimento da membrana basilar para sons fracos.",
    difficulty: "facil",
  },
  {
    id: 124,
    subject: "auditivo",
    statement:
      "Durante a transdução mecânica, a deflexão dos estereocílios no topo das células ciliadas desencadeia alterações no potencial de membrana. O evento inicial do estímulo excitatório ocorre quando:",
    options: [
      "Inclinação dos estereocílios em direção ao maior cílio, tensionando os tip links.",
      "Os estereocílios são inclinados para longe do cílio maior, afrouxando as pontes apicais.",
      "A membrana de Reissner colide contra o modíolo.",
      "O canal elétrico da estria vascular é bloqueado por sódio.",
      "A perilinfa entra massivamente pelo ápice da célula ciliada.",
    ],
    answer: 0,
    explanation:
      "A inclinação dos estereocílios em direção ao membro mais alto da fileira estica as ligações apicais (tip links), abrindo mecanicamente os canais de cátions.",
    difficulty: "media",
  },
  {
    id: 125,
    subject: "auditivo",
    statement:
      "A abertura dos canais iônicos no topo dos estereocílios das células ciliadas depende de filamentos protéicos moleculares chamados 'pontes apicais' (tip links). O íon que entra maciçamente e despolariza a célula é o:",
    options: [
      "Sódio (Na+).",
      "Potássio (K+).",
      "Cloreto (Cl-).",
      "Bicarbonato (HCO3-).",
      "Magnésio (Mg2+).",
    ],
    answer: 1,
    explanation:
      "Como os estereocílios estão imersos na endolinfa (rica em K+ e com potencial +80 mV), a abertura dos canais faz o K+ entrar a favor do gradiente elétrico e químico, despolarizando a célula.",
    difficulty: "dificil",
  },
  {
    id: 126,
    subject: "auditivo",
    statement:
      "A despolarização da célula ciliada decorrente da entrada de K+ resulta na abertura de canais iônicos dependentes de voltagem na membrana basolateral. Esses canais permitem a entrada de:",
    options: [
      "Aníons orgânicos para hiperpolarizar a célula.",
      "Íons cálcio (Ca2+), induzindo exocitose de neurotransmissores.",
      "Grandes quantidades de água para expandir a lâmina reticular.",
      "Potássio extra para bloquear a repolarização.",
      "Sódio para despolarizar o gânglio vestibular.",
    ],
    answer: 1,
    explanation:
      "A despolarização abre canais de Ca2+ voltagem-dependentes na base da célula; o influxo de Ca2+ estimula a liberação do neurotransmissor para os axônios do gânglio espiral.",
    difficulty: "media",
  },
  {
    id: 127,
    subject: "auditivo",
    statement:
      "O principal neurotransmissor excitatório liberado pelas células ciliadas internas nas sinapses com os neurônios do gânglio espiral da cóclea é o:",
    options: ["Acetilcolina.", "Glutamato.", "GABA.", "Glicina.", "Serotonina."],
    answer: 1,
    explanation:
      "As células ciliadas internas utilizam o glutamato como neurotransmissor excitatório para ativar os receptores pós-sinápticos nos dendritos das células do gânglio espiral.",
    difficulty: "media",
  },
  {
    id: 128,
    subject: "auditivo",
    statement:
      "A membrana tectorial é uma estrutura acelular rígida e gelatinosa que se projeta sobre o Órgão de Corti. Sua relevância funcional reside em:",
    options: [
      "Filtrar os íons sódio provenientes da escala timpânica.",
      "Ponto de apoio mecânico para cisalhamento ciliar com o movimento basilar.",
      "Sintetizar a proteína motora prestina.",
      "Isolar eletricamente o modíolo do líquido cerebrospinal.",
      "Conduzir axônios eferentes do nervo facial.",
    ],
    answer: 1,
    explanation:
      "A membrana tectorial permanece fixa enquanto a membrana basilar vibra; esse movimento relativo provoca a inclinação mecânica dos estereocílios das células ciliadas.",
    difficulty: "media",
  },
  {
    id: 129,
    subject: "auditivo",
    statement:
      "O uso de fármacos ototóxicos (como o diurético de alça furosemida) pode causar perda auditiva temporária ou definitiva. O mecanismo desse efeito colateral na orelha interna é:",
    options: [
      "Paralisia dos músculos ossiculares por bloqueio neuromuscular.",
      "Inibição iônica na estria vascular, abolindo o potencial endococlear (+80 mV).",
      "Destruição seletiva do nervo glossofaríngeo na cavidade timpânica.",
      "Calcificação súbita da janela redonda.",
      "Ruptura mecânica do tímpano.",
    ],
    answer: 1,
    explanation:
      "A furosemida inibe o cotransportador Na+/K+/2Cl- na estria vascular, abolindo o potencial endococlear positivo de +80 mV e comprometendo a transdução auditiva.",
    difficulty: "dificil",
  },
  {
    id: 130,
    subject: "auditivo",
    statement:
      "As 'emissões otoacústicas' são sons de baixa intensidade gerados na cóclea e detectáveis no meato acústico externo. Esse fenômeno é utilizado na triagem auditiva neonatal (teste do pezinho auditivo/da orelhinha) e decorre diretamente da atividade das:",
    options: [
      "Células de sustentação de Deiters.",
      "Células ciliadas externas (amplificador coclear).",
      "Fibras eferentes do nervo trigêmeo.",
      "Células epiteliais da membrana de Reissner.",
      "Células do gânglio vestibular.",
    ],
    answer: 1,
    explanation:
      "As emissões otoacústicas resultam das vibrações mecânicas ativas geradas pela eletromotilidade das células ciliadas externas (amplificador coclear).",
    difficulty: "dificil",
  },
  {
    id: 131,
    subject: "auditivo",
    statement:
      "A membrana basilar possui propriedades físicas gradativas ao longo do seu comprimento, da base ao ápice da cóclea. A organização física correta é:",
    options: [
      "Base larga e flexível; Ápice estreito e rígido.",
      "Base estreita e rígida; Ápice largo e flexível.",
      "Espessura e rigidez homogêneas em toda a extensão.",
      "Base elástica e fluida; Ápice ósseo e calcificado.",
      "Base larga e rígida; Ápice estreito e rígido.",
    ],
    answer: 1,
    explanation:
      "A membrana basilar é estreita e rígida na base da cóclea (sensível a frequências altas/agudas) e larga e flexível no ápice (sensível a frequências baixas/graves).",
    difficulty: "media",
  },
  {
    id: 132,
    subject: "auditivo",
    statement:
      "A 'tonotopia' é um princípio fundamental de organização do sistema auditivo. Ela pode ser definida como:",
    options: [
      "A variação na intensidade do som de acordo com o diâmetro do pavilhão auditivo.",
      "Organização espacial sistemática das frequências ao longo da via auditiva.",
      "A capacidade da tuba auditiva de alterar o tom da voz humana.",
      "O tempo de atraso do som entre a orelha direita e a esquerda.",
      "O reflexo de contração dos músculos da orelha média diante do silêncio.",
    ],
    answer: 1,
    explanation:
      "Tonotopia refere-se ao mapeamento topográfico ordenado onde diferentes frequências de som ativam locais específicos ao longo da via auditiva.",
    difficulty: "facil",
  },
  {
    id: 133,
    subject: "auditivo",
    statement:
      "Segundo a teoria da onda viajante (proposta por Georg von Békésy), a vibração transmitida pelo estribo gera uma onda que percorre a membrana basilar. O local onde a onda atinge amplitude máxima depende da:",
    options: [
      "Frequência do som (agudos na base e graves no ápice da cóclea).",
      "Pressão atmosférica na nasofaringe.",
      "Quantidade de cera presente no meato acústico externo.",
      "Velocidade de condução do nervo trigêmeo.",
      "Tensão exclusiva do músculo estapédio.",
    ],
    answer: 0,
    explanation:
      "Sons de alta frequência geram ondas que atingem pico máximo próximo à base rígida; sons de baixa frequência propagam-se até encontrar pico próximo ao ápice flexível.",
    difficulty: "media",
  },
  {
    id: 134,
    subject: "auditivo",
    statement:
      "A intensidade (volume) de um som é codificada no sistema nervoso periférico através de dois mecanismos principais:",
    options: [
      "Inversão da polaridade do potencial endococlear e contração do tímpano.",
      "Maior frequência de disparos e recrutamento de mais neurônios ativos.",
      "Redução do fluxo de potássio na estria vascular e desativação das CCE.",
      "Mudança no tipo de neurotransmissor de glutamato para glicina.",
      "Bloqueio imediato do sinal na oliva superior.",
    ],
    answer: 1,
    explanation:
      "Sons mais intensos provocam maior vibração da membrana basilar, fazendo os neurônios dispararem potenciais de ação com maior frequência e recrutando fibras com limiares mais altos.",
    difficulty: "facil",
  },
  {
    id: 135,
    subject: "auditivo",
    statement:
      "Para sons de baixa e média frequência (até ~4 kHz), o sistema auditivo utiliza o mecanismo de 'sincronia de fase' (phase locking). Esse fenômeno consiste em:",
    options: [
      "Bloquear todas as frequências que chegam pelo ouvido contralateral.",
      "Disparo de potenciais de ação em fase consistente da onda sonora.",
      "Sincronizar o batimento cardíaco com a frequência do som ambiente.",
      "Alternar a transmissão entre o nervo facial e o nervo trigêmeo.",
      "Deslocar a membrana tectorial em direção à janela redonda.",
    ],
    answer: 1,
    explanation:
      "A sincronia de fase ocorre quando o disparo do potencial de ação coincide com a mesma fase (ex: pico de despolarização) da onda sonora repetida.",
    difficulty: "facil",
  },
  {
    id: 136,
    subject: "auditivo",
    statement:
      "O nervo vestibulococlear (NC VIII) é o nervo sensorial responsável pela audição e equilíbrio. Sua origem aparente no tronco encefálico situa-se no:",
    options: [
      "Sulco basilar da ponte.",
      "Sulco bulbopontino, lateral ao NC VII.",
      "Fissura mediana anterior do bulbo.",
      "Pedúnculo cerebral do mesencéfalo.",
      "Sulco pós-olivar do bulbo.",
    ],
    answer: 1,
    explanation:
      "O NC VIII emerge na superfície do tronco encefálico no sulco bulbopontino, em uma região lateral conhecida como ângulo pontocerebelar, adjacente ao NC VII.",
    difficulty: "facil",
  },
  {
    id: 137,
    subject: "auditivo",
    statement:
      "No seu trajeto periférico da orelha interna em direção ao tronco encefálico, o nervo vestibulococlear (NC VIII) transita por qual acodamento ósseo e acompanhado por quais estruturas?",
    options: [
      "Canal do carótida; acompanhado pela artéria carótida interna.",
      "Meato acústico interno, junto ao NC VII e à artéria labiríntica.",
      "Forame jugular; acompanhado pelo NC IX e NC X.",
      "Forame espinhoso; acompanhado pela artéria meningéia média.",
      "Canal condilar; acompanhado pelo nervo hipoglosso.",
    ],
    answer: 1,
    explanation:
      "O NC VIII percorre o meato acústico interno (MAI) no osso temporal juntamente com o nervo facial (NC VII) e a artéria labiríntica.",
    difficulty: "media",
  },
  {
    id: 138,
    subject: "auditivo",
    statement:
      "O nervo trigêmeo (NC V) participa funcionalmente do aparelho auditivo através da inervação motora de qual músculo da orelha média?",
    options: [
      "Músculo estapédio.",
      "Músculo tensor do tímpano (ramo NC V3).",
      "Músculo elevador do véu palatino.",
      "Músculo estilofaringeo.",
      "Músculo aurículo-anterior.",
    ],
    answer: 1,
    explanation:
      "O ramo mandibular do nervo trigêmeo (NC V3) fornece inervação motora para o músculo tensor do tímpano.",
    difficulty: "facil",
  },
  {
    id: 139,
    subject: "auditivo",
    statement:
      "Qual nervo craniano fornece a inervação parassimpática pré-ganglionar para a glândula parótida enviando seu ramo timpânico (nervo de Jacobson) para formar o plexo timpânico na orelha média?",
    options: [
      "Nervo Facial (NC VII).",
      "Nervo Glossofaríngeo (NC IX).",
      "Nervo Vago (NC X).",
      "Nervo Acessório (NC XI).",
      "Nervo Hipoglosso (NC XII).",
    ],
    answer: 1,
    explanation:
      "O nervo glossofaríngeo (NC IX) emite o nervo timpânico para a cavidade timpânica, participando da sensibilidade da orelha média e conduzindo fibras parassimpáticas.",
    difficulty: "dificil",
  },
  {
    id: 140,
    subject: "auditivo",
    statement:
      "Um tumor benigno derivado das células de Schwann do nervo vestibular no meato acústico interno é conhecido como neurinoma do acústico (schwannoma vestibular). Os sintomas iniciais típicos envolvem:",
    options: [
      "Perda neurossensorial ipsilateral, zumbido e paralisia facial periférica.",
      "Cegueira bitemporal e anestesia do lábio superior.",
      "Surdez de condução pura sem afecção do equilíbrio.",
      "Perda da gustação nos dois terços anteriores da língua sem alteração auditiva.",
      "Estrabismo convergente por paralisia do NC VI.",
    ],
    answer: 0,
    explanation:
      "Devido ao trajeto conjunto no meato acústico interno, a expansão do schwannoma comprime a divisão coclear do NC VIII (causando zumbido e hipoacusia neurossensorial) e o NC VII (causando paresia facial).",
    difficulty: "dificil",
  },
  {
    id: 141,
    subject: "auditivo",
    statement:
      "Ao entrarem no tronco encefálico na junção bulbopontina, os axônios das células do gânglio espiral (nervo coclear) fazem a primeira sinapse em quais núcleos?",
    options: [
      "Núcleos grácil e cuneiforme.",
      "Núcleos cocleares ventral e dorsal ipsilaterais.",
      "Núcleos da oliva superior contralateral.",
      "Colículos inferiores do mesencéfalo.",
      "Núcleo geniculado lateral do tálamo.",
    ],
    answer: 1,
    explanation:
      "Todos os axônios do nervo coclear fazem sua primeira sinapse obrigatória nos núcleos cocleares (ventral e dorsal) localizados no bulbo rostral ipsilateral.",
    difficulty: "media",
  },
  {
    id: 142,
    subject: "auditivo",
    statement:
      "A partir dos núcleos cocleares, a informação auditiva ascende na via central. A primeira estrutura da via auditiva central a receber aferências binauricionais (de ambos os ouvidos) é:",
    options: [
      "Núcleo coclear dorsal.",
      "Complexo olivar superior.",
      "Núcleo geniculado medial.",
      "Córtex auditivo primário.",
      "Núcleo do trato solitário.",
    ],
    answer: 1,
    explanation:
      "Os neurônios do complexo olivar superior recebem sinais de ambos os núcleos cocleares (ipsi e contralateral), sendo a primeira estação de processamento binauricular da via.",
    difficulty: "media",
  },
  {
    id: 143,
    subject: "auditivo",
    statement:
      "A localização espacial do som no plano horizontal depende da comparação binauricular realizada no tronco encefálico. Os dois principais mecanismos utilizados são:",
    options: [
      "Retardo temporal interaural e diferença de intensidade interaural.",
      "Reflexo fotomotor e acomodação visual.",
      "Sincronia de fase vertical e amplitude de Doppler.",
      "Pressão do ar na tuba auditiva e vibração do estribo.",
      "Tonotopia do modíolo e mobilidade da membrana de Reissner.",
    ],
    answer: 0,
    explanation:
      "A Teoria Duplex de localização do som estabelece que o atraso de tempo interauricular (ITD) atua em frequências baixas (<2 kHz) e a diferença de intensidade (ILD) atua em frequências altas (>2 kHz, por sombra da cabeça).",
    difficulty: "dificil",
  },
  {
    id: 144,
    subject: "auditivo",
    statement:
      "O conjunto de axônios ascendentes que conduz os impulsos auditivos da oliva superior e dos núcleos cocleares em direção ao mesencéfalo denomina-se:",
    options: [
      "Lemnisco Medial.",
      "Lemnisco Lateral.",
      "Trato Espinotalâmico.",
      "Radiação Óptica.",
      "Trato Corticobulbar.",
    ],
    answer: 1,
    explanation:
      "O lemnisco lateral é o principal trato auditivo ascendente do tronco encefálico, conectando os núcleos pontinos (oliva superior/núcleos cocleares) ao colículo inferior.",
    difficulty: "media",
  },
  {
    id: 145,
    subject: "auditivo",
    statement:
      "Todas as vias auditivas ascendentes do tronco encefálico convergem obrigatoriamente para qual centro integrador localizado no tecto do mesencéfalo?",
    options: [
      "Colículo Superior.",
      "Colículo Inferior.",
      "Substância Cinzenta Periaquedutal.",
      "Núcleo Vermelho.",
      "Oliva Inferior.",
    ],
    answer: 1,
    explanation:
      "O colículo inferior, localizado no mesencéfalo, é o ponto de convergência obrigatório de todas as vias auditivas ascendentes antes da projeção talâmica.",
    difficulty: "facil",
  },
  {
    id: 146,
    subject: "auditivo",
    statement:
      "A estação de retransmissão talâmica responsável por receber as fibras do colículo inferior (via braço do colículo inferior) e projetá-las ao córtex auditivo é o:",
    options: [
      "Núcleo Geniculado Lateral (NGL).",
      "Núcleo Geniculado Medial (NGM).",
      "Núcleo Ventral Posterolateral (VPL).",
      "Núcleo Ventral Posteromedial (VPM).",
      "Núcleo Pulvinar.",
    ],
    answer: 1,
    explanation:
      "O Núcleo Geniculado Medial (NGM) do tálamo recebe e processa os sinais do colículo inferior, enviando as radiações auditivas para o córtex auditivo primário.",
    difficulty: "media",
  },
  {
    id: 147,
    subject: "auditivo",
    statement:
      "O Córtex Auditivo Primário (A1) está localizado em qual região do lobo temporal e quais são suas áreas de Brodmann correspondentes?",
    options: [
      "Giro pós-central; Áreas 1, 2 e 3.",
      "Giros transversos de Heschl (áreas 41 e 42 de Brodmann).",
      "Polo occipital; Área 17 de Brodmann.",
      "Giro frontal inferior; Áreas 44 e 45 (Área de Broca).",
      "Giro giromarginal; Área 39.",
    ],
    answer: 1,
    explanation:
      "O córtex auditivo primário (A1) situa-se na face superior do giro temporal superior, nos giros transversos de Heschl, correspondendo às áreas 41 e 42 de Brodmann.",
    difficulty: "facil",
  },
  {
    id: 148,
    subject: "auditivo",
    statement:
      "A organização tonotópica mantida no Córtex Auditivo Primário (A1) dispõe as frequências sonoras da seguinte forma:",
    options: [
      "Frequências graves anterolaterais e frequências agudas posteromediais.",
      "Frequências agudas no lobo frontal e graves no lobo occipital.",
      "Disposição totalmente aleatória sem mapa definido.",
      "Apenas frequências de voz humana na área posterior.",
      "Somente frequências ultra-sônicas na porção anterior.",
    ],
    answer: 0,
    explanation:
      "Em A1, há um mapa tonotópico preciso onde os sons de baixa frequência (graves) ativam a região anterolateral e os de alta frequência (agudos) ativam a região posteromedial.",
    difficulty: "facil",
  },
  {
    id: 149,
    subject: "auditivo",
    statement:
      "A Área de Wernicke (área 22 de Brodmann) localiza-se no terço posterior do giro temporal superior do hemisfério dominante. Sua lesão resulta em:",
    options: [
      "Anopsia de campo visual temporal.",
      "Afasia de compreensão (afasia fluente de Wernicke).",
      "Surdez total de ambos os ouvidos.",
      "Perda da sensibilidade dolorosa na face.",
      "Paralisia dos músculos da mastigação.",
    ],
    answer: 1,
    explanation:
      "A área de Wernicke é o córtex auditivo de associação responsável pela interpretação e compreensão da linguagem falada. Sua lesão causa afasia de Wernicke (compreensão comprometida com fala fluente porém sem nexo).",
    difficulty: "dificil",
  },
  {
    id: 150,
    subject: "auditivo",
    statement:
      "As perdas auditivas são clinicamente classificadas em de condução (de transmissão) e neurossensoriais. A diferença fisiopatológica fundamental entre elas é:",
    options: [
      "Condução afeta orelha externa/média (ex: cerume/otite); neurossensorial afeta cóclea ou NC VIII.",
      "A perda de condução afeta apenas o córtex auditivo; a neurossensorial afeta o tímpano.",
      "A perda neurossensorial é reversível com lavagem do meato externo; a de condução exige implante do tronco encefálico.",
      "A perda de condução só afeta sons graves; a neurossensorial só afeta a visão.",
      "Não há diferença; ambas referem-se à paralisia do músculo tensor do tímpano.",
    ],
    answer: 0,
    explanation:
      "A surdez de condução decorre de impedimentos mecânicos na passagem do som até a janela oval (orelha externa/média); a surdez neurossensorial decorre de danos aos elementos neurais/sensoriais da orelha interna (cóclea/NC VIII).",
    difficulty: "dificil",
  },
  {"id": 151, "subject": "auditivo", "statement": "A cavidade timpânica (orelha média) é dividida funcionalmente em duas regiões principais. Como são denominadas essa cavidade propriamente dita e a sua extensão superior?", "options": ["Antro mastóideo e ducto coclear.", "Meato acústico externo e recesso utricular.", "Vestíbulo ósseo e recesso ampolado.", "Cavidade timpânica propriamente dita e ático.", "Canal espiral da cóclea e escala timpânica."], "answer": 3, "explanation": "A orelha média é constituída pela cavidade timpânica propriamente dita (localizada diretamente medialmente à membrana timpânica) e pelo recesso epitimpânico (ou ático), situado superiormente, onde se aloja a cabeça do martelo e o corpo da bigorna.", "difficulty": "media"},
  {"id": 152, "subject": "auditivo", "statement": "Os três ossículos da orelha média formam uma cadeia articulada contínua. Qual é a sequência correta de fixação e transmissão vibratória do som da membrana timpânica até a orelha interna?", "options": ["Martelo (fixo ao tímpano) → Bigorna → Estribo (base na janela oval).", "Martelo (fixo ao tímpano) → Estribo → Bigorna (na janela redonda).", "Bigorna (no tímpano) → Martelo → Estribo (no modíolo).", "Estribo (no tímpano) → Martelo → Bigorna (no vestíbulo).", "Estribo (no tímpano) → Bigorna → Martelo (na janela redonda)."], "answer": 0, "explanation": "O cabo do martelo está fixado diretamente à membrana timpânica. O martelo articula-se com a bigorna, e esta se liga ao estribo. A base (platina) do estribo fixa-se à janela oval para transmitir as vibrações mecânicas aos fluidos cocleares.", "difficulty": "dificil"},
  {"id": 153, "subject": "auditivo", "statement": "A orelha média contém dois pequenos músculos associados à cadeia ossicular. Quais são esses músculos e quais nervos cranianos fornecem sua inervação motora?", "options": ["Músculo tensor do véu palatino (NC VII - Facial) e Músculo estapédio (NC IX - Glossofaríngeo).", "Músculo estapédio (NC V - Trigêmeo) e Músculo ciliar (NC III - Oculomotor).", "Músculo tensor do tímpano (NC V - Trigêmeo) e Músculo estapédio (NC VII - Facial).", "Músculo tensor do tímpano (NC IX - Glossofaríngeo) e Músculo estapédio (NC VIII - Vestibulococlear).", "Músculo tensor do tímpano (NC VIII - Vestibulococlear) e Músculo estapédio (NC V - Trigêmeo)."], "answer": 2, "explanation": "O músculo tensor do tímpano insere-se no martelo e é inervado pelo nervo trigêmeo (NC V, ramo mandibular V3). O músculo estapédio insere-se no estribo e é inervado pelo nervo facial (NC VII). Ambos atuam no reflexo de atenuação.", "difficulty": "dificil"},
  {"id": 154, "subject": "auditivo", "statement": "A inervação sensitiva da mucosa da cavidade timpânica e a formação do plexo timpânico dependem de qual ramo de qual nervo craniano?", "options": ["Nervo timpânico, ramo do nervo glossofaríngeo (NC IX).", "Ramos vestibulares do nervo vestibulococlear (NC VIII).", "Ramos temporais do nervo facial (NC VII).", "Nervo vago (NC X), através do ramo auricular.", "Nervo nasociliar, ramo do nervo oftálmico (NC V1)."], "answer": 0, "explanation": "O nervo timpânico (nervo de Jacobson) é um ramo do nervo glossofaríngeo (NC IX) que adentra a orelha média e se ramifica sobre o promontório para formar o plexo timpânico, responsável pela sensibilidade da mucosa timpânica.", "difficulty": "facil"},
  {"id": 155, "subject": "auditivo", "statement": "Qual é a principal função fisiológica da Tuba Auditiva (antigamente chamada de Tuba de Eustáquio) no sistema auditivo?", "options": ["Igualar a pressão do ar na cavidade timpânica com a pressão atmosférica ambiental.", "Transmitir as vibrações mecânicas da bigorna diretamente para a janela redonda.", "Amplificar os sons de alta frequência captados pelo meato acústico externo.", "Conduzir o potencial de ação gerado nas células ciliadas até o tronco encefálico.", "Secretar endolinfa rica em potássio para a escala média da cóclea."], "answer": 0, "explanation": "A tuba auditiva conecta a orelha média à nasofaringe. Sua abertura (durante deglutição ou bocejo) permite igualar a pressão de ar da cavidade timpânica com a pressão atmosférica, permitindo a livre vibração do tímpano.", "difficulty": "media"},
  {"id": 156, "subject": "auditivo", "statement": "Durante a exposição a sons de forte intensidade, os músculos da orelha média se contraem reflexamente. Esse fenômeno é conhecido como reflexo de atenuação e sua função é:", "options": ["Estimular a estria vascular a aumentar a secreção de potássio na endolinfa.", "Inibir os núcleos cocleares no tronco encefálico para bloquear a percepção cortical.", "Fechar a tuba auditiva para impedir a entrada de bactérias na orelha média.", "Aumentar a mobilidade da membrana timpânica para captar sons mais fracos.", "Rigidificar a cadeia de ossículos, reduzindo a transmissão de som e protegendo a orelha interna."], "answer": 4, "explanation": "O reflexo de atenuação envolve a contração do tensor do tímpano e do estapédio, tornando a cadeia ossicular mais rígida. Isso diminui a condução mecânica de sons graves de alta intensidade, protegendo a cóclea contra danos.", "difficulty": "dificil"},
  {"id": 157, "subject": "auditivo", "statement": "O sistema ossicular da orelha média atua como um 'ajustador de impedância' entre o ar da orelha externa e os fluidos da orelha interna. O principal mecanismo de amplificação da pressão mecânica é:", "options": ["A ressonância produzida pelos canais semicirculares do labirinto ósseo.", "A passagem do som através do ar contido no recesso epitimpânico.", "O transporte ativo de íons realizado pela membrana tectorial.", "A contração ativa do músculo estapédio em resposta a frequências agudas.", "A razão entre a área do tímpano e a da base do estribo."], "answer": 4, "explanation": "A grande diferença de área de superfície entre a membrana timpânica (~55 mm²) e a base do estribo/janela oval (~3.2 mm²) concentra a força mecânica em uma área reduzida, elevando a pressão em cerca de 20 vezes para vencer a resistência (impedância) do fluido coclear.", "difficulty": "dificil"},
  {"id": 158, "subject": "auditivo", "statement": "Um paciente apresenta otite média e refere dor profunda na orelha e sensação de pressão. A inervação sensitiva dolorosa da mucosa da orelha média é conduzida primariamente por:", "options": ["Nervo timpânico, ramo do glossofaríngeo (NC IX).", "Nervo hipoglosso (NC XII).", "Fibras sensitivas do nervo vestibulococlear (NC VIII).", "Ramos oftálmicos do nervo trigêmeo (NC V1).", "Ramos motores do nervo facial (NC VII)."], "answer": 0, "explanation": "A sensibilidade geral e dolorosa da mucosa da cavidade timpânica é mediada pelo plexo timpânico, formado pelo nervo timpânico (ramo do NC IX).", "difficulty": "media"},
  {"id": 159, "subject": "auditivo", "statement": "O cabo do martelo e a base do estribo estão conectados, respectivamente, a quais estruturas anatômicas da orelha?", "options": ["Membrana timpânica e Janela oval.", "Córtex auditivo e meato acústico interno.", "Tuba auditiva e Recesso utricular.", "Janela redonda e Canais semicirculares.", "Membrana de Reissner e Estria vascular."], "answer": 0, "explanation": "Conforme descrito no Roteiro 3, o cabo do martelo está preso à membrana timpânica, enquanto a base do estribo se conecta à janela oval do labirinto ósseo.", "difficulty": "facil"},
  {"id": 160, "subject": "auditivo", "statement": "Se o músculo estapédio for paralisado por uma lesão no nervo facial (NC VII), o paciente apresentará qual sintoma clínico em relação à audição?", "options": ["Perda seletiva de percepção de frequências agudas.", "Tontura rotatória paroxística.", "Impossibilidade de igualar a pressão atmosférica.", "Hiperacusia (desconforto a sons intensos).", "Anacusia (surdez total) no lado afetado."], "answer": 3, "explanation": "Sem a função do músculo estapédio (inervado pelo NC VII), perde-se a atenuação reflexa da cadeia ossicular contra ruídos fortes, fazendo com que sons normais ou fortes sejam percebidos como dolorosos/excessivamente altos (hiperacusia).", "difficulty": "media"},
  {"id": 161, "subject": "auditivo", "statement": "A orelha interna é constituída pelo labirinto ósseo e pelo labirinto membranáceo. O labirinto ósseo é subdividido em três partes principais, que são:", "options": ["Cóclea, Vestíbulo e Canais Semicirculares.", "Membrana basilar, lâmina reticular e modíolo.", "Tuba auditiva, recesso epitimpânico e estria vascular.", "Córtex auditivo, meato interno e pavilhão.", "Órgão de Corti, gânglio espiral e meato externo."], "answer": 0, "explanation": "O labirinto ósseo é escavado na parte petrosa do osso temporal e compreende três regiões: a cóclea (anterior, auditiva), o vestíbulo (central) e os três canais semicirculares (posteriores, vestibulares).", "difficulty": "media"},
  {"id": 162, "subject": "auditivo", "statement": "No interior da cóclea óssea, qual é a estrutura descrita como o eixo ósseo central cônico ao redor do qual o canal espiral da cóclea dá suas voltas?", "options": ["Helicotrema.", "Promontório.", "Estria vascular.", "Modíolo.", "Lâmina reticular."], "answer": 3, "explanation": "O modíolo é o eixo central de osso esponjoso da cóclea, através do qual passam os vasos sanguíneos e os axônios/corpos celulares do gânglio espiral da cóclea (nervo coclear).", "difficulty": "facil"},
  {"id": 163, "subject": "auditivo", "statement": "O vestíbulo do labirinto ósseo abriga duas estruturas saculiformes do labirinto membranáceo responsáveis pela detecção do equilíbrio. Quais são elas?", "options": ["Ducto coclear e helicotrema.", "Utrículo e Sáculo.", "Órgão de Corti e gânglio espiral.", "Escala vestibular e escala timpânica.", "Ampola anterior e ampola posterior."], "answer": 1, "explanation": "Dentro do vestíbulo do labirinto ósseo encontram-se as duas dilatações do labirinto membranáceo vestibular: o utrículo e o sáculo, que contêm as máculas para propriocepção e aceleração linear.", "difficulty": "facil"},
  {"id": 164, "subject": "auditivo", "statement": "Os canais semicirculares do labirinto ósseo estão dispostos em três planos do espaço e apresentam uma dilatação em uma de suas extremidades. Como são chamados esses planos e essa dilatação?", "options": ["Canais anterior, posterior e lateral; dilatação chamada Ampola.", "Canais ciliar, facial e trigeminal; dilatação chamada Utriculada.", "Canais superior, médio e inferior; dilatação do modíolo.", "Canais petroso, escamoso e mastóideo; dilatação chamada Fóvea.", "Canais coclear, vestibular e timpânico; dilatação chamada Helicotrema."], "answer": 0, "explanation": "Os canais semicirculares são três: anterior (ou superior), posterior e lateral. Cada um possui uma extremidade dilatada denominada ampola, onde se localizam as cristas ampolares para detectar rotações da cabeça.", "difficulty": "dificil"},
  {"id": 165, "subject": "auditivo", "statement": "O labirinto membranáceo é preenchido por endolinfa, enquanto o espaço entre o labirinto ósseo e o membranáceo contém perilinfa. Qual é a principal diferença na composição iônica entre esses dois fluidos?", "options": ["A perilinfa é produzida pela estria vascular e possui concentração nula de eletrólitos.", "Ambos os fluidos possuem concentrações idênticas de K+ e Na+, diferindo apenas na glicose.", "A endolinfa tem composição idêntica ao líquido cefalorraquidiano (LCR) com alto Na+.", "A perilinfa é rica em Potássio (K+) e a endolinfa é rica em Proteínas.", "A endolinfa é rica em Potássio (K+) e pobre em Sódio (Na+), enquanto a perilinfa é rica em Sódio (Na+)."], "answer": 4, "explanation": "Como destacado no Roteiro 3, a endolinfa (no labirinto membranáceo/ducto coclear) assemelha-se ao fluido intracelular, sendo rica em K+ (~150 mM) e pobre em Na+. A perilinfa (nas escalas vestibular e timpânica) assemelha-se ao LCR/fluido extracelular, rica em Na+ (~140 mM).", "difficulty": "dificil"},
  {"id": 166, "subject": "auditivo", "statement": "A cóclea é dividida longitudinalmente em três compartimentos (escalas). Qual dessas escalas corresponde ao labirinto membranáceo coclear e contém endolinfa?", "options": ["Escala vestibular.", "Ducto coclear (Escala média).", "Escala timpânica.", "Canal semicircular lateral.", "Recesso epitimpânico."], "answer": 1, "explanation": "O ducto coclear (escala média) é o compartimento membranoso central da cóclea. Ele contém endolinfa e abriga o Órgão de Corti, estando situado entre a escala vestibular (superior) e a escala timpânica (inferior).", "difficulty": "facil"},
  {"id": 167, "subject": "auditivo", "statement": "No ápice da cóclea, a escala vestibular e a escala timpânica se comunicam através de uma pequena abertura membranosa denominada:", "options": ["Estria vascular.", "Janela redonda.", "Modíolo.", "Janela oval.", "Helicotrema."], "answer": 4, "explanation": "O helicotrema é o orifício localizado no ápice da cóclea que estabelece a continuidade física entre a escala vestibular e a escala timpânica, permitindo a passagem da perilinfa.", "difficulty": "facil"},
  {"id": 168, "subject": "auditivo", "statement": "Qual é a função da Janela Redonda (fechada pela membrana timpânica secundária) na dinâmica hidráulica do som na cóclea?", "options": ["Conectar o ducto coclear ao nervo vestibulococlear.", "Absorver as ondas de frequência grave antes que atinjam o órgão de Corti.", "Receber a base do estribo e transmitir a vibração mecânica inicial.", "Secretar a perilinfa diretamente para o interior do modíolo.", "Abaular-se para fora, aliviando a pressão do fluido coclear."], "answer": 4, "explanation": "Como o líquido coclear é incompressível e a cóclea é envolvida por osso rígido, a entrada do estribo na janela oval só é possível porque a membrana da janela redonda se deforma reflexamente para fora, aliviando a pressão.", "difficulty": "media"},
  {"id": 169, "subject": "auditivo", "statement": "A estrutura vascularizada presente na parede lateral do ducto coclear responsável por secretar íons potássio (K+) e gerar o potencial endococlear positivo (+80 mV) é a:", "options": ["Membrana de Reissner.", "Ampola membranosa.", "Estria vascular.", "Membrana tectorial.", "Lâmina reticular."], "answer": 2, "explanation": "A estria vascular é um tecido epitelial altamente vascularizado na parede externa do ducto coclear que transporta ativamente K+ para a endolinfa, mantendo o potencial elétrico positivo (+80 mV) essencial para a transdução.", "difficulty": "media"},
  {"id": 170, "subject": "auditivo", "statement": "O labirinto membranáceo é anatomicamente dividido em duas porções funcionais principais. Como são denominadas essas duas divisões?", "options": ["Labirinto temporal e labirinto petroso.", "Labirinto anterior motor e labirinto posterior sensitivo.", "Labirinto vestibular e labirinto coclear.", "Labirinto ósseo e labirinto cartilaginoso.", "Labirinto timpânico e labirinto mastóideo."], "answer": 2, "explanation": "Conforme disposto no Roteiro 3, o labirinto membranáceo compreende o labirinto vestibular (órgãos do equilíbrio: utrículo, sáculo e ductos semicirculares) e o labirinto coclear (órgão da audição: ducto coclear).", "difficulty": "facil"},
  {"id": 171, "subject": "auditivo", "statement": "O Roteiro de Estudo de Audição destaca três pares de nervos cranianos diretamente relacionados ao aparelho auditivo. Quais são esses três nervos?", "options": ["NC I (Olfatório), NC II (Óptico) e NC III (Oculomotor).", "NC V, NC VIII e NC IX.", "NC VII (Facial), NC X (Vago) e NC XII (Hipoglosso).", "NC IV (Troclear), NC VI (Abducente) e NC XI (Acessório).", "NC V (Trigêmeo), NC VI (Abducente) e NC VII (Facial)."], "answer": 1, "explanation": "O Roteiro 3 orienta explicitamente a identificação de três pares de nervos cranianos: NC VIII (transmissão auditiva/vestibular), NC V (inervação motora do M. tensor do tímpano via V3) e NC IX (inervação sensitiva/nervo timpânico).", "difficulty": "media"},
  {"id": 172, "subject": "auditivo", "statement": "Qual é a função do Nervo Vestibulococlear (NC VIII) na fisiologia do sistema auditivo?", "options": ["Fornecer inervação parassimpática para a glândula parótida.", "Promover a elevação do pálato mole durante a equalização da tuba auditiva.", "Levar ao SNC os impulsos da cóclea e do labirinto.", "Transmitir a sensibilidade dolorosa geral do meato acústico externo.", "Inervar o músculo estapédio para controlar o reflexo acústico."], "answer": 2, "explanation": "O NC VIII é um nervo estritamente sensitivo especial. Seu ramo coclear carrega as informações auditivas geradas no Órgão de Corti e seu ramo vestibular carrega informações de equilíbrio do labirinto vestibular.", "difficulty": "facil"},
  {"id": 173, "subject": "auditivo", "statement": "Qual é o papel específico do Nervo Trigêmeo (NC V) relacionado ao aparelho auditivo de acordo com o roteiro?", "options": ["Conduzir as informações de frequência sonora para o colículo inferior.", "Formar o gânglio espiral da cóclea.", "Inervar as células ciliadas externas da membrana basilar.", "Controlar a estria vascular na secreção de endolinfa.", "Inervar o músculo tensor do tímpano (via V3)."], "answer": 4, "explanation": "O ramo mandibular do nervo trigêmeo (NC V3) emite o nervo para o músculo tensor do tímpano, fornecendo eferência motora para esse músculo da orelha média.", "difficulty": "facil"},
  {"id": 174, "subject": "auditivo", "statement": "Como o Nervo Glossofaríngeo (NC IX) participa funcionalmente da anatomia da orelha média?", "options": ["Pela inervação motora direta do músculo estapédio.", "Conduzindo a via eferente do reflexo vestíbulo-ocular.", "Pelo ramo timpânico (nervo de Jacobson), formando o plexo timpânico.", "Através da inervação dos giros temporais transversos de Heschl.", "Promovendo a vasoconstrição da artéria labiríntica."], "answer": 2, "explanation": "O NC IX origina o nervo timpânico, que entra na cavidade timpânica e constitui o plexo timpânico, garantindo a inervação sensitiva geral da mucosa da orelha média e tuba auditiva.", "difficulty": "facil"},
  {"id": 175, "subject": "auditivo", "statement": "Além do NC V, NC VIII e NC IX, qual outro nervo craniano atravessa o meato acústico interno juntamente com o NC VIII e emite ramo para a orelha média (músculo estapédio)?", "options": ["Nervo Acessório (NC XI).", "Nervo Oculomotor (NC III).", "Nervo Facial (NC VII).", "Nervo Hipoglosso (NC XII).", "Nervo Vago (NC X)."], "answer": 2, "explanation": "O nervo facial (NC VII) trafega pelo meato acústico interno com o NC VIII, passa pelo canal facial no osso temporal e emite o nervo para o músculo estapédio na orelha média.", "difficulty": "media"},
  {"id": 176, "subject": "auditivo", "statement": "A origem aparente do Nervo Vestibulococlear (NC VIII) no tronco encefálico situa-se em qual região anatômica?", "options": ["Sulco bulbopontino.", "Pedúnculo cerebral do mesencéfalo.", "Fossa interpeduncular.", "Sulco basilar da ponte.", "Sulco lateral posterior do bulbo."], "answer": 0, "explanation": "O NC VIII emerge do tronco encefálico no sulco bulbopontino, na altura do ângulo pontocerebelar, lateralmente à emergência do nervo facial (NC VII).", "difficulty": "facil"},
  {"id": 177, "subject": "auditivo", "statement": "O Roteiro 3 divide a formação e processamento do som em três vias físicas sequenciais. Quais são essas três vias?", "options": ["Via perilinfática, via endolinfática e via vascular.", "Via do martelo, via da cóclea e via do córtex.", "Via central, via periférica e via autônoma.", "Via de frequência, via de amplitude e via de timbre.", "Via de condução, via de transdução e via nervosa."], "answer": 4, "explanation": "Conforme o item 5 do Roteiro 3, o processo de audição é descrito através de: 1) Via de condução (mecânica), 2) Via de transdução (mecanoelétrica na cóclea) e 3) Via nervosa (transmissão de potenciais de ação até o SNC).", "difficulty": "facil"},
  {"id": 178, "subject": "auditivo", "statement": "Quais estruturas anatômicas compõem a Via de Condução da onda sonora até a orelha interna?", "options": ["Estria vascular, membrana de Reissner e helicotrema.", "Células ciliadas, gânglio espiral e córtex auditivo.", "Pavilhão, meato externo, tímpano e ossículos.", "Utrículo, sáculo e canais semicirculares.", "Núcleos cocleares, oliva superior e colículo inferior."], "answer": 2, "explanation": "A via de condução abrange as estruturas que captam, direcionam e amplificam mecanicamente a onda sonora do ar até a janela oval: orelha externa (pavilhão e meato) e orelha média (tímpano e ossículos).", "difficulty": "facil"},
  {"id": 179, "subject": "auditivo", "statement": "Onde ocorre a Via de Transdução e qual é o evento biológico fundamental que define esse processo?", "options": ["No meato acústico externo; vibração do ar em frequência sonora.", "Nos núcleos cocleares do bulbo; decussação das fibras nervosas.", "No córtex cerebral; interpretação do significado das palavras.", "Na tuba auditiva; equalização da pressão de ar com o ambiente.", "Órgão de Corti; energia mecânica vira potencial elétrico."], "answer": 4, "explanation": "A transdução ocorre no Órgão de Corti (sobre a membrana basilar no ducto coclear). O movimento fluido promove a deflexão dos estereocílios das células ciliadas, transformando energia mecânica em sinal elétrico (potencial receptor).", "difficulty": "facil"},
  {"id": 180, "subject": "auditivo", "statement": "Durante a transdução mecânica no Órgão de Corti, a deflexão dos estereocílios em direção ao cílio maior provoca a abertura de canais iônicos operados mecanicamente. Qual íon entra massivamente na célula desencadeando a despolarização?", "options": ["Sódio (Na+), vindo da perilinfa.", "Bicarbonato (HCO3-), vindo da escala timpânica.", "Cloro (Cl-), vindo do líquido cefalorraquidiano.", "Magnésio (Mg2+), vindo do plasma da estria vascular.", "Potássio (K+), vindo da endolinfa rica nesse íon."], "answer": 4, "explanation": "Como a endolinfa no ducto coclear é muito rica em Potássio (K+) e tem potencial positivo (+80 mV), a abertura dos canais nos estereocílios gera um forte gradiente eletroquímico que faz o K+ entrar na célula ciliada, despolarizando-a.", "difficulty": "dificil"},
  {"id": 181, "subject": "auditivo", "statement": "No Órgão de Corti, existem células ciliadas internas (CCI) e células ciliadas externas (CCE). Qual é a principal diferença funcional entre elas na via de transdução?", "options": ["As CCE são os receptores sensoriais primários (95% das fibras aferentes), enquanto as CCI secretam perilinfa.", "As CCI são os receptores sensoriais primários, enquanto as CCE atuam como 'amplificador coclear' por eletromotilidade.", "Não há diferença funcional; ambas possuem exatamente as mesmas conexões e funções.", "As CCI detectam rotação da cabeça e as CCE detectam gravidade.", "As CCE formam o gânglio espiral e as CCI formam o nervo vestibular."], "answer": 1, "explanation": "As células ciliadas internas (CCI) realizam a transdução sensorial primária para o nervo coclear (~95% dos axônios). As células ciliadas externas (CCE) mudam de comprimento em resposta ao som (eletromotilidade), amplificando a vibração da membrana basilar.", "difficulty": "dificil"},
  {"id": 182, "subject": "auditivo", "statement": "A membrana basilar possui propriedades mecânicas variáveis ao longo da cóclea (da base ao ápice). Como essa variação determina a codificação de frequências sonoras (tonotopia coclear)?", "options": ["A membrana basilar tem espessura uniforme; a frequência é separada pelos ossículos.", "A base responde apenas ao ultrassom e o ápice responde apenas ao infrassom.", "A base é larga e flexível (frequências graves); o ápice é estreito e rígido (frequências agudas).", "A base vibra somente na visão e o ápice vibra somente na audição.", "A base é estreita e rígida (frequências agudas/altas); o ápice é largo e flexível (frequências graves/baixas)."], "answer": 4, "explanation": "A base da membrana basilar (próxima à janela oval) é estreita e rígida, ressonando com sons de alta frequência (agudos). O ápice (próximo ao helicotrema) é largo e flexível, ressonando com sons de baixa frequência (graves).", "difficulty": "dificil"},
  {"id": 183, "subject": "auditivo", "statement": "Após a entrada de Potássio (K+) e despolarização da célula ciliada, ocorre a abertura de canais de Cálcio dependentes de voltagem na base da célula. Isso resulta na liberação de qual neurotransmissor para os neurônios do gânglio espiral?", "options": ["Glicina.", "Acetilcolina.", "GABA.", "Dopamina.", "Glutamato."], "answer": 4, "explanation": "A despolarização da célula ciliada promove o influxo de Ca2+ na região basal, induzindo a exocitose de Glutamato na fenda sináptica com os dendritos dos neurônios do gânglio espiral da cóclea.", "difficulty": "dificil"},
  {"id": 184, "subject": "auditivo", "statement": "A Via Nervosa do som inicia-se a partir dos corpos celulares localizados no interior do modíolo coclear. Onde estão localizados esses primeiros neurônios sensoriais da audição?", "options": ["No gânglio ciliar.", "No núcleo olivar superior.", "No gânglio espiral da cóclea.", "No gânglio geniculado.", "No gânglio da raiz dorsal cervical."], "answer": 2, "explanation": "Os corpos celulares dos primeiros neurônios da via auditiva ficam agrupados no gânglio espiral da cóclea, localizado no modíolo. Seus prolongamentos periféricos contatam as células ciliadas e os centrais formam o nervo coclear.", "difficulty": "media"},
  {"id": 185, "subject": "auditivo", "statement": "Após emergir da cóclea, os axônios do nervo coclear (NC VIII) fazem sua primeira sinapse no sistema nervoso central em qual estrutura do tronco encefálico?", "options": ["Núcleos cocleares ventral e dorsal.", "Núcleo Edinger-Westphal.", "Núcleo geniculado lateral do tálamo.", "Giro temporal médio.", "Colículo superior do mesencéfalo."], "answer": 0, "explanation": "Os axônios do nervo coclear entram no tronco encefálico e fazem a primeira sinapse obrigatória nos Núcleos Cocleares (ventral e dorsal), localizados na junção bulbopontina. Cada núcleo coclear recebe informação exclusivamente do ouvido ipsilateral.", "difficulty": "media"},
  {"id": 186, "subject": "auditivo", "statement": "Qual é a primeira estrutura da via auditiva central que recebe aferências de AMBOS os ouvidos (integração binaural) e atua na localização espacial do som?", "options": ["Núcleo coclear ventral.", "Complexo olivar superior.", "Meato acústico interno.", "Gânglio espiral.", "Corpo geniculado lateral."], "answer": 1, "explanation": "As fibras dos núcleos cocleares cruzam parcialmente a linha média (corpo trapezóide) e projetam-se para o Complexo Olivar Superior na ponte. Este é o primeiro nível da via que recebe informação binaural, comparando diferenças de tempo e intensidade para localizar o som no espaço.", "difficulty": "facil"},
  {"id": 187, "subject": "auditivo", "statement": "O feixe ascendente de fibras nervosas que conduz a informação auditiva do complexo olivar superior até o mesencéfalo é denominado:", "options": ["Radiação Óptica.", "Lemnisco Lateral.", "Trato Corticoespinal.", "Lemnisco Medial.", "Trato Espinotalâmico Lateral."], "answer": 1, "explanation": "O Lemnisco Lateral é o trato ascendente do tronco encefálico formado por fibras que sobem da oliva superior e núcleos cocleares em direção ao colículo inferior no mesencéfalo.", "difficulty": "facil"},
  {"id": 188, "subject": "auditivo", "statement": "No mesencéfalo, todas as vias auditivas ascendentes convergem para uma estrutura tectal fundamental no processamento de reflexos e integração auditiva. Essa estrutura é o:", "options": ["Núcleo Vermelho.", "Colículo Superior.", "Colículo Inferior.", "Núcleo Grácil.", "Substância Negra."], "answer": 2, "explanation": "O Colículo Inferior, situado no tecto do mesencéfalo, é o centro integrador obrigatório da via auditiva ascendente. (O colículo superior é integrado à via visual).", "difficulty": "media"},
  {"id": 189, "subject": "auditivo", "statement": "Do colículo inferior no mesencéfalo, os axônios projetam-se para o núcleo de retransmissão auditiva do tálamo. Qual é esse núcleo talâmico?", "options": ["Núcleo Ventral Posteromedial (VPM).", "Corpo Geniculado Medial (NGM).", "Núcleo Ventral Posterolateral (VPL).", "Núcleo Anterior do Tálamo.", "Corpo Geniculado Lateral (NGL)."], "answer": 1, "explanation": "O Núcleo Geniculado Medial (NGM) do tálamo é a estação de retransmissão talamocortical do sistema auditivo. (O corpo geniculado lateral - NGL pertence ao sistema visual).", "difficulty": "facil"},
  {"id": 190, "subject": "auditivo", "statement": "Qual é a sequência linear exata e ordenada da Via Auditiva Central, do receptor até o córtex cerebral, descrita na literatura de suporte do roteiro?", "options": ["Tímpano → Gânglio ciliar → Nervo trigêmeo → Núcleo VPM → Córtex somestésico.", "Gânglio espiral → Colículo inferior → Oliva superior → Núcleo coclear → Córtex de Heschl.", "Órgão de Corti → Lemnisco medial → Núcleo VPL → Colículo inferior → Córtex occipital.", "Células ciliadas → Oliva superior → NC VIII → Colículo superior → Corpo geniculado lateral → Córtex motor.", "Cél. ciliadas → gânglio espiral → NC VIII → núcleos cocleares → oliva superior → lemnisco lateral → colículo inferior → CGM → córtex."], "answer": 4, "explanation": "Conforme o trajeto a ser memorizado disposto no Roteiro 3 e apresentações: Células ciliadas → Gânglio espiral → Nervo coclear (NC VIII) → Núcleos cocleares → Oliva superior → Lemnisco lateral → Colículo inferior → Corpo geniculado medial → Radiações auditivas → Córtex auditivo primário.", "difficulty": "dificil"},
  {"id": 191, "subject": "auditivo", "statement": "Do ponto de vista clínico, por que uma lesão unilateral do nervo vestibulococlear (NC VIII) causa surdez completa naquele ouvido, enquanto uma lesão unilateral no colículo inferior ou no córtex auditivo NÃO causa surdez unilateral total?", "options": ["Porque a via se torna bilateral já no tronco encefálico.", "Porque o nervo coclear cruza 100% de suas fibras no meato acústico interno.", "Porque o córtex auditivo primário fica localizado no cerebelo.", "Porque o colículo inferior só processa informações visuais.", "Porque o NC VIII irriga diretamente o cérebro."], "answer": 0, "explanation": "Apenas os núcleos cocleares e o nervo coclear recebem informação exclusivamente ipsilateral. A partir do complexo olivar superior, as vias auditivas sobem bilateralmente por ambos os lados do tronco. Assim, lesões centrais acima do núcleo coclear afetam a localização do som, mas não causam surdez unilateral total.", "difficulty": "dificil"},
  {"id": 192, "subject": "auditivo", "statement": "O cruzamento parcial das fibras auditivas na ponte, responsável por conectar os núcleos cocleares ao complexo olivar superior contralateral, forma uma estrutura anatômica transversal visível na ponte ventral denominada:", "options": ["Corpo Trapezóide.", "Decussação das pirâmides.", "Comissura branca anterior.", "Forame de Monro.", "Quiasma óptico."], "answer": 0, "explanation": "O corpo trapezóide é o feixe transversal de fibras de decussação na ponte ventral formado pelos axônios emergentes dos núcleos cocleares a caminho do complexo olivar superior contralateral.", "difficulty": "dificil"},
  {"id": 193, "subject": "auditivo", "statement": "A localização do som no plano horizontal depende de duas pistas binauriculadas processadas na oliva superior. Quais são essas duas pistas?", "options": ["Rotação da ampola e inclinação do utrículo.", "Pressão do tímpano e vibração do modíolo.", "Diferença de luz e diferença de sombra.", "Diferença de tempo e de intensidade interauricular.", "Tensão do tensor do tímpano e rigidez do estapédio."], "answer": 3, "explanation": "Para sons de baixa frequência (graves, < 2000 Hz), o cérebro mede a diferença de tempo interauricular (ITD). Para sons de alta frequência (agudos, > 2000 Hz), a cabeça cria uma sombra sonora, permitindo medir a diferença de intensidade interauricular (ILD).", "difficulty": "media"},
  {"id": 194, "subject": "auditivo", "statement": "As radiações acústicas (ou auditivas) conectam o núcleo geniculado medial do tálamo ao córtex auditivo primário. Por qual parte da cápsula interna essas fibras trafegam?", "options": ["Fornecimento vascular da artéria basilar.", "Ramos anteriores do corpo caloso.", "Porção sublenticular da cápsula interna.", "Joelho da cápsula interna.", "Perna anterior."], "answer": 2, "explanation": "As radiações auditivas emergem do NGM no tálamo e passam pela porção sublenticular (abaixo do núcleo lentiforme) da cápsula interna até atingirem os giros de Heschl no lobo temporal.", "difficulty": "media"},
  {"id": 195, "subject": "auditivo", "statement": "Onde está localizado o Córtex Auditivo Primário (A1) e quais são suas correspondentes áreas de Brodmann e acidentes anatômicos conforme o roteiro?", "options": ["Giro pós-central do lobo parietal; Áreas 1, 2 e 3 de Brodmann.", "Giro pré-central do lobo frontal; Área 4 de Brodmann.", "Úncus do lobo temporal; Área 28 de Brodmann.", "Sulco calcarino do lobo occipital; Área 17 de Brodmann.", "Giros de Heschl; áreas 41 e 42 de Brodmann."], "answer": 4, "explanation": "Como explicitado no Roteiro 3 e livros de neuroanatomia, o córtex auditivo primário (A1) situa-se na superfície superior do giro temporal superior, especificamente nos giros temporais transversos de Heschl (áreas 41 e 42 de Brodmann).", "difficulty": "media"},
  {"id": 196, "subject": "auditivo", "statement": "O córtex auditivo primário (A1) mantém uma organização espacial na qual neurônios vizinhos respondem a frequências sonoras vizinhas originadas na cóclea. Esse mapa organizacional é chamado de:", "options": ["Tonotopia.", "Retinotopia.", "Quimiotopia.", "Somatotopia (Homúnculo).", "Angiotopia."], "answer": 0, "explanation": "A tonotopia é a organização espacial da frequência sonora mantida desde a membrana basilar na cóclea, passando pelos núcleos do tronco e tálamo, até o córtex auditivo primário.", "difficulty": "media"},
  {"id": 197, "subject": "auditivo", "statement": "Qual é a diferença fundamental entre perda auditiva de condução (condutiva) e perda auditiva neurossensorial?", "options": ["A condutiva afeta o córtex auditivo e a neurossensorial afeta o pavilhão.", "A condutiva causa surdez bilateral imediata e a neurossensorial afeta apenas os canais semicirculares.", "Condutiva: orelha externa/média; neurossensorial: cóclea ou NC VIII.", "Não há diferença; ambos os termos são sinônimos para lesão no colículo inferior.", "A condutiva é tratada exclusivamente com neurocirurgia e a neurossensorial desaparece espontaneamente."], "answer": 2, "explanation": "Perda condutiva envolve impedimento mecânico na passagem do som pela orelha externa ou média. Perda neurossensorial envolve lesão das estruturas receptoras da orelha interna (células ciliadas) ou do nervo vestibulococlear (NC VIII).", "difficulty": "media"},
  {"id": 198, "subject": "auditivo", "statement": "Uma lesão na área auditiva secundária/associação no lobo temporal dominante (Área de Wernicke, área 22 de Brodmann) resulta em qual déficit funcional característico?", "options": ["Afasia de Wernicke (compreensão), com fala fluente.", "Cegueira para a metade do campo visual (Hemianopsia).", "Perda da capacidade de contrair o músculo tensor do tímpano.", "Perda da sensibilidade vibratória no membro superior.", "Incapacidade motora de articular as palavras (Afasia de Broca)."], "answer": 0, "explanation": "A área de Wernicke (área 22), adjacente ao córtex auditivo primário no lobo temporal dominante, é responsável pela interpretação e compreensão da linguagem falada. Sua lesão causa afasia sensitiva/de compreensão.", "difficulty": "media"},
  {"id": 199, "subject": "auditivo", "statement": "O exame de Emissões Otoacústicas (EOA), utilizado na triagem auditiva neonatal ('teste do pezinho do ouvidinho'), avalia a integridade funcional de qual estrutura da orelha interna?", "options": ["Células ciliadas externas.", "Canais semicirculares.", "Colículo inferior do mesencéfalo.", "Nervo glossofaríngeo (NC IX).", "Tuba auditiva."], "answer": 0, "explanation": "As EOA captam a energia sonora de baixíssima intensidade gerada pela movimentação ativa (eletromotilidade) das células ciliadas externas da cóclea, sendo o teste padrão ouro para avaliar a função coclear em recém-nascidos.", "difficulty": "media"},
  {"id": 200, "subject": "auditivo", "statement": "Em idosos, a perda progressiva e simétrica da audição para frequências altas (agudas), associada à degeneração fisiológica das células ciliadas da base da cóclea, é denominada clinicamente de:", "options": ["Presbiacusia.", "Otite média serosa.", "Neurinoma do acústico.", "Otosclerose.", "Astereognosia."], "answer": 0, "explanation": "A presbiacusia é o envelhecimento natural do sistema auditivo, caracterizado pela perda neurossensorial bilateral de frequências agudas devido ao desgaste acumulado das células ciliadas na base da cóclea.", "difficulty": "media"},
];
