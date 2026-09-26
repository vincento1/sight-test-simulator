import type { Question } from "./questions";

export const somatoQuestions: Question[] = [
  {
    "id": 51,
    "subject": "somato",
    "difficulty": "media",
    "statement": "Os mecanorreceptores da pele diferem quanto à profundidade em que se encontram no tecido cutâneo e sua morfologia. Sobre a localização e classificação histológica dos receptores cutâneos, assinale a alternativa correta:",
    "options": [
      "O corpúsculo de Pacini situa-se na epiderme superficial e é classificado como uma terminação nervosa livre.",
      "Os discos de Merkel estão localizados na epiderme (camada basal) e são formados por uma célula epitelial especializada em contato com uma terminação nervosa.",
      "Os corpúsculos de Meissner encontram-se na hipoderme profunda, revestidos por cápsulas espessas de tecido conjuntivo.",
      "As terminações de Ruffini localizam-se exclusivamente na superfície epitelial da pele glabra e detectam vibrações de alta frequência.",
      "As terminações nervosas livres ocorrem apenas no tecido muscular estriado esquelético para sinalizar o estiramento."
    ],
    "answer": 1,
    "explanation": "Os discos de Merkel localizam-se na camada basal da epiderme e consistem em células epiteliais mecanossensíveis (que expressam canais Piezo2) em contato sináptico com terminações nervosas Aβ. Os corpúsculos de Pacini ficam na derme profunda/hipoderme, Meissner nas papilas dérmicas superficiais e Ruffini na derme profunda."
  },
  {
    "id": 52,
    "subject": "somato",
    "difficulty": "facil",
    "statement": "A dinâmica de resposta dos mecanorreceptores a um estímulo contínuo permite classificá-los em receptores de adaptação rápida ou de adaptação lenta. Assinale a opção que relaciona corretamente o receptor ao seu padrão de adaptação:",
    "options": [
      "Corpúsculo de Pacini e Corpúsculo de Meissner — Adaptação Lenta.",
      "Disco de Merkel e Terminação de Ruffini — Adaptação Rápida.",
      "Corpúsculo de Pacini e Corpúsculo de Meissner — Adaptação Rápida.",
      "Disco de Merkel e Corpúsculo de Pacini — Adaptação Rápida.",
      "Terminação de Ruffini e Corpúsculo de Meissner — Adaptação Lenta."
    ],
    "answer": 2,
    "explanation": "Corpúsculos de Meissner e Pacini são receptores de adaptação rápida (respondem ao início e ao cessar do estímulo, detectando movimento e vibração). Discos de Merkel e terminações de Ruffini são de adaptação lenta (mantêm disparos durante a pressão sustentada e estiramento)."
  },
  {
    "id": 53,
    "subject": "somato",
    "difficulty": "facil",
    "statement": "O corpúsculo de Pacini possui uma estrutura laminar concêntrica característica ('em camada de cebola'). Essa organização estrutural é responsável por sua seletividade a:",
    "options": [
      "Pressão estática e mantida sobre a pele com frequência de 0,5 Hz.",
      "Vibrações mecânicas de alta frequência (entre 200 e 300 Hz).",
      "Variações térmicas nocivas acima de 45°C.",
      "Estiramento das fibras de colágeno dérmico durante a preensão de objetos.",
      "Sensações puramente dolorosas e de prurido superficial."
    ],
    "answer": 1,
    "explanation": "As lâminas conectivas fluidas do corpúsculo de Pacini filtram pressões lentas/constantes (fazendo a energia deslizar), mas transmitem variações rápidas de pressão, tornando o receptor altamente sensível a vibrações de alta frequência (200-300 Hz)."
  },
  {
    "id": 54,
    "subject": "somato",
    "difficulty": "dificil",
    "statement": "Estudos recentes sobre a fisiologia dos discos de Merkel demonstraram que a conversão da força mecânica em sinal elétrico envolve mecanismos moleculares específicos. Assinale a afirmativa correta sobre essa transdução:",
    "options": [
      "A célula de Merkel expressa o canal mecanossensível Piezo2, que se abre com a pressão e despolariza a célula, estimulando o axônio sensorial.",
      "O canal Piezo2 é ativado exclusivamente por calor intenso, promovendo a hiperpolarização da terminação nervosa.",
      "As células de Merkel não possuem canais mecanossensíveis, atuando apenas como isolantes térmicos na epiderme.",
      "A abertura do canal Piezo2 provoca efluxo massivo de potássio, bloqueando a transmissão de potenciais de ação.",
      "O axônio associado ao disco de Merkel é do tipo C amielínico de condução ultra-lenta."
    ],
    "answer": 0,
    "explanation": "As células de Merkel possuem o canal iônico mecanossensível Piezo2, cuja deformação mecânica gera influxo catiônico despolarizante e liberação de neurotransmissor para excitar a terminação nervosa Aβ associada."
  },
  {
    "id": 55,
    "subject": "somato",
    "difficulty": "facil",
    "statement": "A percepção da posição dos membros e do estado de estiramento muscular (propriocepção consciente e inconsciente) depende de receptores especializados situados no tecido muscular. O fuso neuromuscular monitora primariamente:",
    "options": [
      "A tensão gerada no tendão durante a contração muscular isométrica.",
      "As variações no comprimento do músculo e a velocidade desse estiramento.",
      "O acúmulo de ácido láctico e metabólitos nocivos no sarcolema.",
      "A temperatura intracelular nas fibras musculares extrarafusais.",
      "A vibração de alta frequência transmitida pelos ossos longos."
    ],
    "answer": 1,
    "explanation": "Os fusos musculares estão dispostos em paralelo com as fibras extrafusais e detectam o comprimento (estiramento) e a taxa de variação de comprimento do músculo. Já os Órgãos Tendinosos de Golgi (OTG) monitoram a tensão muscular."
  },
  {
    "id": 56,
    "subject": "somato",
    "difficulty": "facil",
    "statement": "Diferente do fuso neuromuscular, o Órgão Tendinoso de Golgi situa-se em série nas junções miotendíneas. Sua função fisiológica principal consiste em:",
    "options": [
      "Detectar o estiramento passivo rápido do ventre muscular.",
      "Sinalizar a tensão muscular desenvolvida durante a contração e proteger contra força excessiva.",
      "Inervar motoramente as fibras intrafusais via motoneurônios gama.",
      "Transmitir sinais sensoriais térmicos de dor aguda por fibras amielínicas C.",
      "Atuar como mecanorreceptor superficial de tato leve e discriminação de textura."
    ],
    "answer": 1,
    "explanation": "O OTG é disposto em série com as fibras musculares no tendão e é estimulado quando o músculo se contrai e puxa o tendão, aferindo a força/tensão muscular e desencadeando o reflexo miotático inverso."
  },
  {
    "id": 57,
    "subject": "somato",
    "difficulty": "media",
    "statement": "Os axônios aferentes primários condutores da informação sensorial do corpo até a medula espinhal apresentam diâmetros e graus de mielinização variados. Assinale a alternativa correta em relação à velocidade de condução:",
    "options": [
      "As fibras do grupo C são calibrosas e mielinizadas, apresentando as maiores velocidades de condução (120 m/s).",
      "As fibras Aβ (grupo II) conduzem informações de mecanorreceptores cutâneos com velocidade intermediária (36 a 75 m/s).",
      "As fibras Aδ são amielínicas e responsáveis pela condução da propriocepção dos fusos musculares.",
      "As fibras Aα (grupo I) possuem o menor diâmetro e conduzem apenas sensações térmicas de frio.",
      "Todas as fibras sensoriais da raiz dorsal possuem a mesma velocidade de condução independente da mielina."
    ],
    "answer": 1,
    "explanation": "As fibras Aα (Ia e Ib) são as mais calibrosas/rápidas (propriocepção, 80-120 m/s); as fibras Aβ conduzem tato tátil epicrítico/mecanocetores (36-75 m/s); Aδ são finamente mielinizadas (dor rápida e frio, 5-30 m/s); e C são amielínicas (dor lenta e calor, 0,5-2 m/s)."
  },
  {
    "id": 58,
    "subject": "somato",
    "difficulty": "facil",
    "statement": "Ao examinar histologicamente um corte transversal de um nervo periférico, identificam-se camadas organizadas de tecido conjuntivo. A bainha que envolve um fascículo individual de fibras nervosas é o:",
    "options": [
      "Epineuro.",
      "Perineuro.",
      "Endoneuro.",
      "Neurilema.",
      "Axolema."
    ],
    "answer": 1,
    "explanation": "O endoneuro envolve cada axônio individualmente; o perineuro envolve cada fascículo de axônios (formando uma barreira hemato-nervosa); e o epineuro envolve todo o nervo periférico externamente."
  },
  {
    "id": 59,
    "subject": "somato",
    "difficulty": "facil",
    "statement": "Os corpos celulares dos neurônios sensoriais primários que inervam o tronco e os membros estão situados nos gânglios da raiz dorsal (GRD). A morfologia típica desses neurônios é descrita como:",
    "options": [
      "Neurônios multipolares com extensos dendritos corticais.",
      "Neurônios pseudounipolares com um único prolongamento que se divide em ramo periférico e ramo central.",
      "Neurônios bipolares idênticos às células fotorreceptoras da retina.",
      "Interneurônios anaxônicos inibitórios GABAérgicos.",
      "Células piramidais motoras de grande porte."
    ],
    "answer": 1,
    "explanation": "Os neurônios dos gânglios sensitivos da raiz dorsal são pseudounipolares: possuem um corpo celular sem dendritos verdadeiros e um único neurito que se bifurca em um ramo periférico (indo ao receptor) e um ramo central (entrando na medula espinhal)."
  },
  {
    "id": 60,
    "subject": "somato",
    "difficulty": "facil",
    "statement": "Um dermátomo é definido do ponto de vista neuroanatômico como:",
    "options": [
      "O conjunto de músculos inervados por uma única raiz ventral espinhal.",
      "Uma faixa ou área de pele inervada pelas fibras sensitivas de um único nervo/segmento espinhal.",
      "A região cortical do giro pós-central responsável pelo processamento da dor visceral.",
      "O trajeto percorrido por uma fibra motora do trato corticoespinal lateral.",
      "A área de pele suprida exclusivamente por um único ramo arterial da aorta."
    ],
    "answer": 1,
    "explanation": "Um dermátomo é a área unilateral de pele inervada pelos axônios sensitivos de um determinado segmento/raiz dorsal de nervo espinhal (ex: T10 no umbigo, C6 no polegar, L5 no hálux)."
  },
  {
    "id": 61,
    "subject": "somato",
    "difficulty": "media",
    "statement": "A reativação do vírus Varicella-Zoster (causador do cobreiro) nos gânglios sensitivos provoca dor intensa e lesões vesiculares cutâneas. A distribuição característica dessas lesões na pele é explicada por:",
    "options": [
      "Disseminação hematogênica difusa sem padrão anatômico definido.",
      "Acometimento restrito ao território cutâneo de um dermátomo específico correspondente ao gânglio afetado.",
      "Necrose seletiva dos motoneurônios do corno anterior da medula.",
      "Bloqueio irreversível da decussação das fibras do lemnisco medial.",
      "Degeneração exclusiva das fibras de grande calibre Aα dos fusos musculares."
    ],
    "answer": 1,
    "explanation": "O vírus Varicella-Zoster permanece latente nos corpos celulares do gânglio da raiz dorsal. Ao se reativar, os vírus caminham de forma retrógrada pelos axônios sensitivos e causam erupções dermatológicas estritamente delimitadas ao dermátomo daquele gânglio."
  },
  {
    "id": 62,
    "subject": "somato",
    "difficulty": "media",
    "statement": "No funículo posterior (coluna dorsal) da medula espinhal ascendem as fibras da via tátil epicrítica e proprioceptiva. Esse funículo é subdividido em dois fascículos principais, cuja organização medial-lateral é:",
    "options": [
      "Fascículo Cuneiforme posicionado medialmente e Fascículo Grácil posicionado lateralmente.",
      "Fascículo Grácil posicionado medialmente e Fascículo Cuneiforme posicionado lateralmente.",
      "Trato Espinotalâmico Lateral medialmente e Trato Espinocerebelar lateralmente.",
      "Fascículo Septomarginal lateralmente e Fascículo Interfascicular medialmente.",
      "Ambos os fascículos estão fundidos sem qualquer separação anatômica em todos os níveis medulares."
    ],
    "answer": 1,
    "explanation": "O Fascículo Grácil ocupa a posição medial no funículo posterior e conduz impulsos dos membros inferiores e tronco inferior (abaixo de T6). O Fascículo Cuneiforme situa-se lateralmente e conduz impulsos do tronco superior e membros superiores (C1 a T6)."
  },
  {
    "id": 63,
    "subject": "somato",
    "difficulty": "media",
    "statement": "Ao examinar cortes transversais da medula espinhal nos níveis lombar e cervical, observa-se que o Fascículo Cuneiforme só está presente:",
    "options": [
      "Em todos os segmentos sacrais e lombares inferiores.",
      "Do nível T6 para cima (segmentos torácicos superiores e cervicais).",
      "Exclusivamente no filamento terminal e cone medular.",
      "Apenas no bulbo rostral e ponte média.",
      "Nos segmentos lombares L1 a L5 para inervação da coxa."
    ],
    "answer": 1,
    "explanation": "Abaixo de T6 (regiões lombar e sacral), o funículo posterior é composto apenas pelo Fascículo Grácil. Do nível T6 para cima, os axônios que entram das raízes cervicais e torácicas superiores adicionam-se lateralmente, formando o Fascículo Cuneiforme."
  },
  {
    "id": 64,
    "subject": "somato",
    "difficulty": "media",
    "statement": "Na via Coluna Dorsal-Lemnisco Medial, o corpo celular do neurônio sensorial primário (1ª ordem) está localizado no:",
    "options": [
      "Corno posterior da substância cinzenta da medula espinhal.",
      "Gânglio da raiz dorsal (GRD).",
      "Núcleo grácil ou cuneiforme do bulbo.",
      "Núcleo Ventral Posterolateral (VPL) do tálamo.",
      "Camada IV do córtex somatossensorial primário."
    ],
    "answer": 1,
    "explanation": "O neurônio de 1ª ordem da via da coluna dorsal é o neurônio pseudounipolar do gânglio da raiz dorsal. Seu axônio entra na medula e ascende ipsilateralmente pelo funículo posterior até o bulbo sem fazer sinapse na medula."
  },
  {
    "id": 65,
    "subject": "somato",
    "difficulty": "media",
    "statement": "Os axônios dos aferentes primários da via da coluna dorsal fazem sua primeira sinapse com os neurônios de 2ª ordem localizados nos:",
    "options": [
      "Cornos anteriores da medula espinhal lombar.",
      "Núcleos da coluna dorsal (Núcleo Grácil e Núcleo Cuneiforme) no bulbo caudal.",
      "Núcleos intralaminares do tálamo rostral.",
      "Núcleos pontinos do tronco encefálico médio.",
      "Colículos superiores do mesencéfalo."
    ],
    "answer": 1,
    "explanation": "Os axônios ascendentes do fascículo grácil e cuneiforme terminam no bulbo caudal, onde fazem sinapse com os corpos celulares dos neurônios de 2ª ordem situados no Núcleo Grácil e Núcleo Cuneiforme."
  },
  {
    "id": 66,
    "subject": "somato",
    "difficulty": "media",
    "statement": "Os axônios emergentes dos núcleos grácil e cuneiforme no bulbo curvam-se e cruzam o plano mediano. Essas fibras em cruzamento e a estrutura resultante ascendente são denominadas, respectivamente:",
    "options": [
      "Fibras corticospinais e Pirâmides bulbares.",
      "Fibras arqueadas internas e Lemnisco Medial.",
      "Comissura branca anterior e Trato Espinotalâmico.",
      "Pedúnculos cerebelares e Fascículo Longitudianl Medial.",
      "Fibras mossas e Estrias medulares."
    ],
    "answer": 1,
    "explanation": "Os axônios dos neurônios de 2ª ordem dos núcleos grácil e cuneiforme formam as fibras arqueadas internas, que decussam no bulbo (decussação somestésica/sensitiva) e ascende no lado contralateral como um feixe achatado chamado Lemnisco Medial."
  },
  {
    "id": 67,
    "subject": "somato",
    "difficulty": "media",
    "statement": "À medida que ascende pelo tronco encefálico (bulbo, ponte e mesencéfalo), o Lemnisco Medial conduz informações de:",
    "options": [
      "Dor em queimação e temperatura do lado ipsilateral do corpo.",
      "Tato discriminativo, vibração e propriocepção consciente do lado contralateral do corpo.",
      "Motilidade voluntária para os músculos flexores do tronco.",
      "Visão e audição integradas para os reflexos tectospinais.",
      "Apenas sensações gustativas do terço posterior da língua."
    ],
    "answer": 1,
    "explanation": "Como a decussação ocorreu no bulbo caudal, o lemnisco medial ascende conduzindo informações de tato refinado (epicrítico), vibração e propriocepção consciente provenientes do lado CONTRALATERAL do corpo."
  },
  {
    "id": 68,
    "subject": "somato",
    "difficulty": "facil",
    "statement": "As fibras do lemnisco medial ascendem pelo tronco encefálico e fazem sinapse com os neurônios de 3ª ordem situados no seguinte núcleo talâmico:",
    "options": [
      "Núcleo Geniculado Lateral (NGL).",
      "Núcleo Geniculado Medial (NGM).",
      "Núcleo Ventral Posterolateral (VPL).",
      "Núcleo Anterior do Tálamo.",
      "Núcleo Ventral Anterior (VA)."
    ],
    "answer": 2,
    "explanation": "As informações somatossensoriais vindas do tronco e membros via lemnisco medial e trato espinotalâmico fazem sinapse no Núcleo Ventral Posterolateral (VPL) do tálamo. (O VPM recebe a sensibilidade da face via nervo trigêmeo)."
  },
  {
    "id": 69,
    "subject": "somato",
    "difficulty": "media",
    "statement": "Os axônios dos neurônios de 3ª ordem localizados no núcleo VPL do tálamo projetam-se em direção ao córtex cerebral atravessando qual estrutura neuroanatômica?",
    "options": [
      "Braço anterior da cápsula interna.",
      "Perna (braço) posterior da cápsula interna.",
      "Corpo caloso (esplênio).",
      "Comissura anterior.",
      "Fornecedor posterior do fórnix."
    ],
    "answer": 1,
    "explanation": "As radiações somatossensoriais talamocorticais emergem do núcleo VPL/VPM do tálamo e passam pela perna (braço) posterior da cápsula interna para atingir o giro pós-central do córtex parietal."
  },
  {
    "id": 70,
    "subject": "somato",
    "difficulty": "facil",
    "statement": "O Córtex Somatossensorial Primário (S1) está anatomicamente localizado no giro pós-central do lobo parietal e compreende as seguintes áreas de Brodmann:",
    "options": [
      "Áreas 4 e 6.",
      "Áreas 3a, 3b, 1 e 2.",
      "Áreas 17, 18 e 19.",
      "Áreas 41 e 42.",
      "Áreas 9, 10 e 11."
    ],
    "answer": 1,
    "explanation": "O córtex somatossensorial primário (S1) situa-se no giro pós-central (imediatamente posterior ao sulco central) e é composto pelas áreas de Brodmann 3a, 3b, 1 e 2."
  },
  {
    "id": 71,
    "subject": "somato",
    "difficulty": "dificil",
    "statement": "Estudos fisiológicos revelaram que as subáreas de S1 processam aspectos distintos da informação somática. A área de Brodmann considerada o 'córtex somatossensorial primário propriamente dito' por receber a maior densidade de projeções do VPL e responder fortemente a estímulos táteis é a:",
    "options": [
      "Área 3a.",
      "Área 3b.",
      "Área 1.",
      "Área 2.",
      "Área 5."
    ],
    "answer": 1,
    "explanation": "A área 3b é o núcleo de recepção primária do tato em S1. Ela projeta para a área 1 (que processa informação sobre textura) e área 2 (que enfatiza forma e tamanho / estereognosia). A área 3a recebe aferências do fuso muscular (propriocepção)."
  },
  {
    "id": 72,
    "subject": "somato",
    "difficulty": "facil",
    "statement": "O mapeamento somatotópico do corpo no córtex somatossensorial primário (Homúnculo de Penfield) revela uma representação desproporcional das superfícies corporais. Essa distorção reflete:",
    "options": [
      "O tamanho físico real do membro no corpo humano.",
      "A densidade de inervação e o número de receptores sensoriais naquela região cutânea.",
      "A quantidade de tecido adiposo subcutâneo na região.",
      "A espessura da camada de queratina na epiderme.",
      "O número de articulações sinoviais presentes na extremidade."
    ],
    "answer": 1,
    "explanation": "As áreas com maior densidade de receptores e menores campos receptivos (como a ponta dos dedos, lábios e língua) possuem uma área desproporcionalmente grande de representação cortical no homúnculo de Penfield."
  },
  {
    "id": 73,
    "subject": "somato",
    "difficulty": "dificil",
    "statement": "A organização funcional do córtex somatossensorial primário é caracterizada por colunas verticais de neurônios que se estendem através das camadas corticais. Essa descoberta fundamental é atribuída a:",
    "options": [
      "Wilder Penfield.",
      "Vernon Mountcastle.",
      "Korbinian Brodmann.",
      "Santiago Ramón y Cajal.",
      "Camillo Golgi."
    ],
    "answer": 1,
    "explanation": "Vernon Mountcastle (Universidade Johns Hopkins) foi o primeiro a demonstrar a organização colunar funcional do neocórtex ao estudar o córtex somatossensorial, mostrando que neurônios em uma mesma coluna vertical respondem à mesma modalidade e campo receptivo."
  },
  {
    "id": 74,
    "subject": "somato",
    "difficulty": "media",
    "statement": "As áreas 5 e 7 de Brodmann, localizadas no córtex parietal posterior, desempenham papel essencial no processamento somatossensorial complexo. Sua função principal inclui:",
    "options": [
      "Recepção direta primária das fibras de dor da via espinotalâmica sem passar pelo tálamo.",
      "Integração de informações somatossensoriais com pistas visuais e motoras para representação do esquema corporal e espaço percebido.",
      "Controle autonômico da frequência cardíaca durante o estímulo doloroso.",
      "Produção de secreções hormonais tróficas pela glândula pineal.",
      "Modulação direta dos motoneurônios alfa da medula sacral."
    ],
    "answer": 1,
    "explanation": "O córtex parietal posterior (áreas 5 e 7) é um córtex de associação que integra sinais somatossensoriais de S1 com informações visuais e motoras, permitindo o planejamento de movimentos no espaço e a percepção do esquema corporal."
  },
  {
    "id": 75,
    "subject": "somato",
    "difficulty": "dificil",
    "statement": "Um paciente sofreu uma lesão vascular circunscrita no córtex parietal de associação. Ele consegue sentir o toque em sua mão direita, mas é completamente incapaz de reconhecer um objeto (como uma chave ou moeda) colocado nessa mão com os olhos fechados. Essa condição clínica é chamada de:",
    "options": [
      "Anopsia.",
      "Astereognosia (ou Agnosia Tátil).",
      "Analgesia Congênita.",
      "Apraxia Ideomotora.",
      "Aritmometria."
    ],
    "answer": 1,
    "explanation": "Astereognosia é a incapacidade de reconhecer objetos pelo tato na ausência de déficits na sensibilidade tátil elementar, decorrente de lesões no córtex parietal de associação (área 2 de S1 e córtex parietal posterior)."
  },
  {
    "id": 76,
    "subject": "somato",
    "difficulty": "facil",
    "statement": "A informação somatossensorial tátil e proprioceptiva da face e da parte anterior da cabeça não entra pelos nervos espinhais, mas é conduzida primariamente pelo:",
    "options": [
      "Nervo Facial (NC VII).",
      "Nervo Trigêmeo (NC V).",
      "Nervo Glossofaríngeo (NC IX).",
      "Nervo Vago (NC X).",
      "Nervo Hipoglosso (NC XII)."
    ],
    "answer": 1,
    "explanation": "O Nervo Trigêmeo (V par craniano) é o principal responsável pela inervação somatossensorial da face, cavidade oral, dentes e 2/3 anteriores da língua."
  },
  {
    "id": 77,
    "subject": "somato",
    "difficulty": "media",
    "statement": "Os axônios dos mecanorreceptores da face fazem sinapse no Núcleo Sensorial Principal do Trigêmeo na ponte. Os axônios secundários decussam e ascendem pelo lemnisco trigeminal até qual núcleo do tálamo?",
    "options": [
      "Núcleo Ventral Posterolateral (VPL).",
      "Núcleo Ventral Posteromedial (VPM).",
      "Núcleo Pulvinar.",
      "Corpo Geniculado Medial (CGM).",
      "Núcleo Dorsomedial."
    ],
    "answer": 1,
    "explanation": "As vias somatosensoriais da face (trigeminais) projetam-se especificamente para o Núcleo Ventral Posteromedial (VPM) do tálamo, enquanto as do resto do corpo projetam-se para o VPL."
  },
  {
    "id": 78,
    "subject": "somato",
    "difficulty": "facil",
    "statement": "A transdução dos estímulos dolorosos (nocicepção) ocorre nas terminações nervosas livres. Os dois tipos principais de fibras periféricas que conduzem sinais nociceptivos são:",
    "options": [
      "Fibras Aα e Fibras Aβ.",
      "Fibras Aδ (pobremente mielinizadas) e Fibras C (amielínicas).",
      "Fibras Ia e Fibras Ib.",
      "Fibras B simpáticas pré-ganglionares e Fibras Aα.",
      "Fibras ópticas e Fibras acústicas C."
    ],
    "answer": 1,
    "explanation": "A nocicepção é conduzida por fibras Aδ (finamente mielinizadas, condução moderada, 5-30 m/s) e fibras C (amielínicas, condução lenta, 0,5-2 m/s)."
  },
  {
    "id": 79,
    "subject": "somato",
    "difficulty": "facil",
    "statement": "Após uma picada ou queimadura na pele, a pessoa percebe primeiro uma dor aguda e bem localizada (dor primária), seguida de uma dor em queimação mais difusa e duradoura (dor secundária). Essas duas fases da dor são mediadas, respectivamente, por:",
    "options": [
      "Fibras C (dor primária) e Fibras Aα (dor secundária).",
      "Fibras Aδ (dor primária) e Fibras C (dor secundária).",
      "Fibras Aβ (dor primária) e Fibras Aδ (dor secundária).",
      "Fibras Ia (dor primária) e Fibras Ib (dor secundária).",
      "Fibras corticospinais (dor primária) e Fibras rubroespinais (dor secundária)."
    ],
    "answer": 1,
    "explanation": "A dor primária (rápida, aguda) é transmitida pelas fibras Aδ mais rápidas. A dor secundária (lenta, persistente, em queimação) é mediada pelas fibras C amielínicas lentas."
  },
  {
    "id": 80,
    "subject": "somato",
    "difficulty": "media",
    "statement": "As fibras nociceptivas primárias entram na medula pelo trato de Lissauer e fazem sinapse na substância gelatinosa (lâmina II de Rexed). Além do glutamato, salvas de potenciais de alta frequência liberam qual neuropeptídeo envolvido na dor intensa?",
    "options": [
      "Acetilcolina.",
      "Dopamina.",
      "Substância P.",
      "GABA.",
      "Glicina."
    ],
    "answer": 2,
    "explanation": "O glutamato é o neurotransmissor rápido dos nociceptores, enquanto a Substância P é um neuropeptídeo armazenado em grânulos de secreção, liberado durante estímulos dolorosos intensos/repetitivos, potencializando a transmissão nociceptiva."
  },
  {
    "id": 81,
    "subject": "somato",
    "difficulty": "media",
    "statement": "Diferente da via da coluna dorsal-lemnisco medial, os axônios dos neurônios de 2ª ordem da via espinotalâmica lateral (que conduz dor e temperatura) decussam:",
    "options": [
      "Apenas no bulbo rostral junto com a decussação das pirâmides.",
      "Imediatamente no mesmo nível medular (ou 1-2 segmentos acima) através da comissura branca anterior.",
      "No ponte média ao nível do núcleo motor do trigêmeo.",
      "No mesencéfalo junto à substância cinzenta periaquedutal.",
      "Não decussam, ascendendo 100% ipsilateralmente até o córtex."
    ],
    "answer": 1,
    "explanation": "A via espinotalâmica decussa logo na medula espinhal: os axônios dos neurônios do corno dorsal cruzam a linha média pela comissura branca anterior próximo ao nível de entrada e ascendem no funículo anterolateral oposto."
  },
  {
    "id": 82,
    "subject": "somato",
    "difficulty": "media",
    "statement": "Os corpos celulares dos neurônios de 2ª ordem cujos axônios formam os tratos espinotalâmicos anterior e lateral estão localizados no corno dorsal da medula, principalmente nas lâminas de Rexed:",
    "options": [
      "Lâminas VII e IX.",
      "Lâminas I, IV, V e VI.",
      "Lâmina X exclusivamente.",
      "Núcleo motor do corno anterior.",
      "Gânglio da raiz ventral."
    ],
    "answer": 1,
    "explanation": "Os axônios sensoriais de dor/temperatura/tato grosseiro fazem sinapse com neurônios localizados nas lâminas I, IV, V e VI do corno posterior/dorsal da medula espinhal."
  },
  {
    "id": 83,
    "subject": "somato",
    "difficulty": "media",
    "statement": "O sistema anterolateral é composto pelo trato espinotalâmico lateral e pelo trato espinotalâmico anterior. A principal modalidade sensorial conduzida pelo Trato Espinotalâmico Anterior é:",
    "options": [
      "Propriocepção consciente dos dedos do pé.",
      "Sensibilidade vibratória de alta frequência.",
      "Tato protopático (grosseiro) e pressão de localização não discriminativa.",
      "Discriminação de dois pontos com paquímetro.",
      "Reconhecimento tridimensional de objetos."
    ],
    "answer": 2,
    "explanation": "O trato espinotalâmico lateral é especializado em dor e temperatura, enquanto o trato espinotalâmico anterior conduz estímulos de tato protopático (grosseiro, não discriminativo) e pressão leve."
  },
  {
    "id": 84,
    "subject": "somato",
    "difficulty": "dificil",
    "statement": "A dor referida é o fenômeno pelo qual a ativação de nociceptores viscerais é percebida como se originasse na superfície cutânea. Esse fenômeno ocorre devido a:",
    "options": [
      "Ausência total de axônios sensoriais nas vísceras abdominais.",
      "Convergência de axônios nociceptivos viscerais e cutâneos nos mesmos neurônios de projeção do corno dorsal da medula.",
      "Cruzamento anormal de axônios visuais no quiasma óptico.",
      "Lesão destrutiva congênita dos receptores de Pacini.",
      "Produção de anticorpos contra os canais Piezo2 da epiderme."
    ],
    "answer": 1,
    "explanation": "Axônios aferentes viscerais entram na medula pelos mesmos segmentos que aferentes cutâneos e fazem sinapse nos mesmos neurônios de 2ª ordem do corno dorsal. O cérebro, acostumado a receber sinais nociceptivos da pele, interpreta o sinal visceral como vindo do dermátomo cutâneo correspondente."
  },
  {
    "id": 85,
    "subject": "somato",
    "difficulty": "dificil",
    "statement": "Um paciente com isquemia miocárdica (angina de peito) refere dor na região retroesternal que se irradia para a face interna do membro superior esquerdo. Essa localização da dor no braço esquerdo corresponde aos dermátomos:",
    "options": [
      "C2 a C4.",
      "T1 a T4.",
      "L2 a L4.",
      "S1 a S3.",
      "C1 a C2."
    ],
    "answer": 1,
    "explanation": "A inervação sensitiva visceral do coração entra na medula espinhal nos segmentos torácicos T1 a T4/T5, coincidindo com os dermátomos cutâneos do tórax superior e face medial do membro superior esquerdo (T1-T2)."
  },
  {
    "id": 86,
    "subject": "somato",
    "difficulty": "dificil",
    "statement": "Na via espinotalâmica, os axônios projetam-se para o tálamo. Enquanto as fibras que terminam no núcleo VPL fornecem localização precisa e intensidade da dor, as fibras que terminam nos Núcleos Intralaminares estão relacionadas a:",
    "options": [
      "Discriminação de frequência de vibração.",
      "Aspectos afetivos, emocionais e de alerta/sofrimento da dor e ativação cortical difusa.",
      "Ajustes finos do ângulo da articulação do cotovelo.",
      "Acomodação visual do cristalino.",
      "Percepção de cores no campo visual oposto."
    ],
    "answer": 1,
    "explanation": "O núcleo VPL transmite a dimensão sensorial-discriminativa da dor (onde dói e a intensidade). Os núcleos intralaminares e reticulares transmitem a dimensão afetivo-motivacional (sofrimento, angústia, alerta cortical difuso)."
  },
  {
    "id": 87,
    "subject": "somato",
    "difficulty": "dificil",
    "statement": "A Teoria das Comportas (Gate Control Theory) propõe que a sensação de dor pode ser reduzida pela ativação simultânea de mecanorreceptores não nociceptivos. O mecanismo fisiológico por trás desse fenômeno (como friccionar a pele após uma pancada) envolve:",
    "options": [
      "Estimulação de fibras Aβ que ativam interneurônios inibitórios no corno dorsal, bloqueando os sinais nociceptivos das fibras C.",
      "Destruição imediata da Substância P no gânglio da raiz dorsal.",
      "Hiperpolarização irreversível do córtex somatossensorial primário.",
      "Bloqueio dos canais mecânicos nos fusos musculares do membro contralateral.",
      "Liberação massiva de histamina pelos mastócitos cutâneos."
    ],
    "answer": 0,
    "explanation": "Axônios Aβ de grande calibre (tato) emitem colaterais no corno dorsal da medula que excitam interneurônios inibitórios. Esses interneurônios pré ou pós-sinapticamente inibem os neurônios de projeção da dor estimulados pelas fibras C."
  },
  {
    "id": 88,
    "subject": "somato",
    "difficulty": "dificil",
    "statement": "O sistema nervoso central possui um circuito descendente capaz de suprimir a transmissão do sinal doloroso na medula. Uma estrutura mesencefálica chave nesse controle analgésico é a:",
    "options": [
      "Substância Cinzenta Periaquedutal (PAG).",
      "Área Tectal Ventral.",
      "Oliva Inferior.",
      "Amígdala Basolateral.",
      "Substância Negra parte reticulada."
    ],
    "answer": 0,
    "explanation": "A Substância Cinzenta Periaquedutal (PAG), situada ao redor do aqueduto cerebral no mesencéfalo, é o centro coordenador do sistema descendente de analgesia, recebendo projeções do hipotálamo e sistema límbico."
  },
  {
    "id": 89,
    "subject": "somato",
    "difficulty": "dificil",
    "statement": "A Substância Cinzenta Periaquedutal (PAG) envia axônios descendentes para os Núcleos da Rafe localizados no bulbo. Os neurônios dos núcleos da rafe projetam para o corno dorsal da medula espinhal utilizando o neurotransmissor:",
    "options": [
      "Dopamina.",
      "Serotonina (5-HT).",
      "Acetilcolina.",
      "Histamina.",
      "Aspartato."
    ],
    "answer": 1,
    "explanation": "A PAG ativa os Núcleos da Rafe no bulbo rostral, cujos neurônios serotoninérgicos projetam pelo funículo dorsolateral até o corno posterior da medula, inibindo a transmissão dos sinais de dor nas lâminas I, II e V."
  },
  {
    "id": 90,
    "subject": "somato",
    "difficulty": "dificil",
    "statement": "O sistema analgésico endógeno produz neuropeptídeos (endorfinas, encefalinas e dinorfinas) que se ligam a receptores opioides na medula e tronco encefálico. A ação primária das encefalinas nos interneurônios do corno dorsal da medula consiste em:",
    "options": [
      "Aumentar a liberação de Substância P das terminações nociceptivas.",
      "Inibir a liberação de neurotransmissores nociceptivos (como Substância P e glutamato) e hiperpolarizar os neurônios secundários.",
      "Estimular a atividade dos canais de sódio voltagem-dependente NaV1.7.",
      "Bloqueio dos canais de potássio na membrana pós-sináptica.",
      "Provocar dor neuropática crônica generalizada."
    ],
    "answer": 1,
    "explanation": "As encefalinas ativam receptores opioides pré-sinápticos (bloqueando canais de Ca2+ e impedindo a liberação de glutamato/substância P) e pós-sinápticos (abrindo canais de K+ e hiperpolarizando o neurônio de projeção), produzindo analgesia."
  },
  {
    "id": 91,
    "subject": "somato",
    "difficulty": "facil",
    "statement": "A sensação de frio e calor é detectada por terminações nervosas livres portadoras de canais iônicos da família TRP (Transient Receptor Potential). Sobre a termorrecepção, é correto afirmar que:",
    "options": [
      "Os receptores de frio são mediados por fibras amielínicas calibrosas e ativam-se apenas acima de 50°C.",
      "O mentol ativa o canal TRPM8 gerando sensação de frio, enquanto a capsaicina (da pimenta) ativa o canal TRPV1 gerando sensação de calor nocivo.",
      "A sensação térmica é conduzida exclusivamente pelo fascículo grácil até o córtex occipital.",
      "Não existem receptores específicos para o calor; o calor é apenas a ausência de disparos dos receptores de frio.",
      "Os termorreceptores são de adaptação extremamente lenta e nunca alteram sua taxa de disparo com a mudança de temperatura."
    ],
    "answer": 1,
    "explanation": "O canal TRPM8 é ativado por temperaturas baixas e pelo mentol (sensação de frescor). O canal TRPV1 é ativado por temperaturas nocivas (>43°C), íons H+ e capsaicina (provocando sensação de queimor/calor)."
  },
  {
    "id": 92,
    "subject": "somato",
    "difficulty": "facil",
    "statement": "A sensação de prurido (coceira) é distinta da dor, embora compartilhe vias periféricas e medulares semelhantes. O prurido é provocado na pele pela liberação de mediadores como a histamina, que ativam seletivamente:",
    "options": [
      "Corpúsculos de Pacini profundos.",
      "Subpopulação de terminações nervosas livres com fibras C amielínicas de adaptação lenta.",
      "Fusos musculares intrafusais.",
      "Discos de Merkel da pele glabra.",
      "Axônios motor eferentes gama."
    ],
    "answer": 1,
    "explanation": "O prurido é desencadeado na epiderme por uma subpopulação específica de terminações nervosas livres conectadas a fibras C amielínicas sensíveis a histamina, bradicinina e outros pruritógenos."
  },
  {
    "id": 93,
    "subject": "somato",
    "difficulty": "dificil",
    "statement": "Um paciente sofreu uma ferida por arma branca que resultou na hemissecção direita da medula espinhal no nível T10 (Síndrome de Brown-Séquard). Espera-se encontrar no exame físico abaixo do nível da lesão:",
    "options": [
      "Perda de dor e temperatura no lado direito e perda de tato discriminativo no lado esquerdo.",
      "Perda de tato discriminativo, vibração e propriocepção no lado direito (ipsilateral) e perda de dor e temperatura no lado esquerdo (contralateral).",
      "Perda bilateral completa de todas as modalidades sensoriais.",
      "Preservação total de todas as sensibilidades em ambos os lados.",
      "Perda de dor e temperatura no lado direito e preservação motora ipsilateral."
    ],
    "answer": 1,
    "explanation": "Na hemissecção medular (Brown-Séquard): a via da coluna dorsal ascende ipsilateralmente (logo, perda de tato fino/propriocepção no mesmo lado da lesão - ipsilateral); a via espinotalâmica cruza na medula (logo, perda de dor/temperatura no lado oposto à lesão - contralateral)."
  },
  {
    "id": 94,
    "subject": "somato",
    "difficulty": "dificil",
    "statement": "Um tumor intramedular comprimiu seletivamente o Fascículo Cuneiforme esquerdo no segmento cervical C5. Qual déficit funcional o paciente apresentará?",
    "options": [
      "Perda de dor e temperatura no membro inferior direito.",
      "Perda de tato discriminativo, vibração e propriocepção no membro superior esquerdo.",
      "Perda de propriocepção no membro inferior esquerdo.",
      "Paralisia motora flácida da face direita.",
      "Anestesia dolorosa em ambos os membros inferiores."
    ],
    "answer": 1,
    "explanation": "O Fascículo Cuneiforme esquerdo conduz tato refinado e propriocepção do membro superior e tronco superior esquerdos. Como a lesão é medular (antes da decussação no bulbo), o déficit é ipsilateral (membro superior esquerdo)."
  },
  {
    "id": 95,
    "subject": "somato",
    "difficulty": "dificil",
    "statement": "Um acidente vascular acometeu o funículo lateral esquerdo da medula espinhal no segmento T8, destruindo o Trato Espinotalâmico Lateral esquerdo. O achado clínico esperado é:",
    "options": [
      "Perda da sensibilidade térmica e dolorosa no membro inferior direito e metade inferior do tronco direito.",
      "Perda de vibração e tato epicrítico no membro inferior esquerdo.",
      "Perda de propriocepção consciente no membro superior esquerdo.",
      "Perda da sensibilidade tátil da face esquerda.",
      "Perda de dor e temperatura no membro inferior esquerdo."
    ],
    "answer": 0,
    "explanation": "As fibras do trato espinotalâmico lateral esquerdo vieram de neurônios do corno dorsal do lado direito que decussaram na comissura branca anterior. Portanto, a lesão do trato espinotalâmico esquerdo resulta em perda de dor e temperatura no lado CONTRALATERAL (lado direito), abaixo do nível da lesão."
  },
  {
    "id": 96,
    "subject": "somato",
    "difficulty": "dificil",
    "statement": "Um infarto ponteiro focado destruiu o Lemnisco Medial Direito no terço médio da ponte. Quais os achados somatossensoriais esperados?",
    "options": [
      "Perda de tato epicrítico, propriocepção e vibração em todo o lado esquerdo do corpo (tronco e membros).",
      "Perda de propriocepção no lado direito do corpo exclusivamente.",
      "Perda da dor e temperatura na face direita.",
      "Ausência total de déficits sensoriais no tronco e membros.",
      "Perda bilateral da audição e visão periférica."
    ],
    "answer": 0,
    "explanation": "O Lemnisco Medial situa-se acima da decussação sensitiva bulbar. Uma lesão no Lemnisco Medial DIREITO na ponte interrompe as fibras que já cruzaram vindas do lado ESQUERDO do corpo, provocando perda de tato fino e propriocepção contralateral (lado esquerdo)."
  },
  {
    "id": 97,
    "subject": "somato",
    "difficulty": "dificil",
    "statement": "Um paciente apresenta um acidente vascular cerebral isquêmico (AVC) no Núcleo VPL do tálamo esquerdo. A consequência somatossensorial direta será:",
    "options": [
      "Anestesia e analgesia completas (perda de tato, propriocepção, dor e temperatura) no lado direito do corpo (membros e tronco).",
      "Perda de sensibilidade restrita à face esquerda.",
      "Perda de propriocepção e tato no lado esquerdo do corpo com preservação da dor.",
      "Perda isolada da visão no olho direito.",
      "Hiperacusia dolorosa na orelha esquerda."
    ],
    "answer": 0,
    "explanation": "O núcleo VPL do tálamo e o ponto de convergência de TODAS as vias somatossensoriais (coluna dorsal e espinotalâmica) provenientes do tronco e membros contralaterais. Uma lesão no VPL esquerdo causa perda de todas as modalidades sensoriais no lado direito do corpo."
  },
  {
    "id": 98,
    "subject": "somato",
    "difficulty": "media",
    "statement": "A propriocepção inconsciente é essencial para o controle postural e coordenação motora fina em tempo real. As informações proprioceptivas inconscientes dos membros inferiores são levadas ao cerebelo pelos:",
    "options": [
      "Tratos Espinocerebelares Dorsal e Ventral.",
      "Lemnisco Medial e Lemnisco Lateral.",
      "Tratos Corticospinais Lateral e Anterior.",
      "Fascículo Cuneiforme e Núcleo VPM.",
      "Trato Rubroespinal e Trato Tectospinal."
    ],
    "answer": 0,
    "explanation": "A propriocepção inconsciente dos fusos e OTGs não vai ao córtex parietal, mas ascende pelos Tratos Espinocerebelares Dorsal e Ventral até o arqui/paleocerebelo (espinocerebelo) para ajuste do tônus e movimento."
  },
  {
    "id": 99,
    "subject": "somato",
    "difficulty": "media",
    "statement": "O teste da discriminação de dois pontos avalia a capacidade de perceber dois estímulos táteis simultâneos e próximos como distintos. A distância mínima limiar para discriminar dois pontos é extremamente pequena na ponta dos dedos (~2 mm) e muito maior no dorso ou na coxa (~40 mm). Esse menor limiar na ponta dos dedos deve-se a:",
    "options": [
      "Alta densidade de mecanorreceptores com pequenos campos receptivos (Meissner e Merkel) e grande representação cortical.",
      "Maior espessura do tecido adiposo na ponta dos dedos.",
      "Presença exclusiva de corpúsculos de Pacini na epiderme superficial dos dedos.",
      "Menor número de neurônios corticais dedicados à mão no giro pós-central.",
      "Condução por fibras amielínicas C de baixa velocidade."
    ],
    "answer": 0,
    "explanation": "A alta resolução espacial da ponta dos dedos resulta da enorme densidade de mecanorreceptores de pequenos campos receptivos (Meissner e Merkel), associada a pequenos campos receptivos corticais e forte inibição lateral."
  },
  {
    "id": 100,
    "subject": "somato",
    "difficulty": "dificil",
    "statement": "Após uma lesão tecidual ou queimadura de sol, a área lesada torna-se extremamente sensível, e estímulos normalmente indolores passam a ser percebidos como dolorosos (alodinia) ou estímulos leves geram dor intensa (hiperalgesia). Esse fenômeno de sensibilização periférica é deflagrado por uma 'sopa inflamatória' contendo:",
    "options": [
      "Bradicinina, Prostaglandinas, Histamina, Substância P e Prótons (H+).",
      "Insulina, Glucagon e Hormônio do Crescimento.",
      "Apenas Mielina e Fibras de Colágeno tipo I.",
      "Acetilcolinesterase e Dopamina vesicular.",
      "Surfactante pulmonar e Bilirrubina."
    ],
    "answer": 0,
    "explanation": "A lesão tecidual libera substâncias químicas (bradicinina, prostaglandinas, serotonina, histamina, substância P, prótons H+, ATP) que formam a 'sopa inflamatória'. Essas substâncias reduzem o limiar de disparo dos nociceptores, causando sensibilização periférica e hiperalgesia."
  }
];
