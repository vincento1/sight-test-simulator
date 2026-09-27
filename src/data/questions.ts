import { somatoQuestions } from "./questions-somato";
import { auditivoQuestions } from "./questions-auditivo";
export type Difficulty = "facil" | "media" | "dificil";

export type Question = {
  id: number;
  subject: "visual" | "somato" | "auditivo";
  difficulty: Difficulty;
  statement: string;
  options: string[];
  answer: number; // index in options
  explanation: string;
};

export const SUBJECTS = [
  { id: "todos", label: "Todos os assuntos" },
  { id: "visual", label: "Sistema Visual (Roteiro 2 - Visão)" },
  { id: "somato", label: "Sistema Somatossensorial" },
  { id: "auditivo", label: "Sistema Auditivo" },
] as const;

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  facil: "Fácil",
  media: "Média",
  dificil: "Difícil",
};

const visualQuestions: Question[] = [
  {
    id: 1,
    subject: "visual",
    difficulty: "facil",
    statement:
      "O bulbo ocular é revestido por três túnicas concêntricas. A túnica fibrosa, constituída pela camada mais externa e protetora do olho, é formada anatomicamente por:",
    options: [
      "Coroide nos 5/6 posteriores e retina no 1/6 anterior.",
      "Esclera nos 5/6 posteriores e córnea no 1/6 anterior.",
      "Corpo ciliar, íris e processo ciliar na porção anterior.",
      "Retina óptica posteriormente e ora serrata na transição anterior.",
      "Túnica úvea posteriormente e cristalino na porção central.",
    ],
    answer: 1,
    explanation:
      "A túnica fibrosa é a camada externa do olho, dividida na esclera (5/6 posteriores, opaca e protetora) e na córnea (1/6 anterior, transparente e refrativa).",
  },
  {
    id: 2,
    subject: "visual",
    difficulty: "facil",
    statement:
      "A túnica vascular do bulbo ocular (úvea) desempenha importante papel nutricional e de regulação luminosa. Suas três divisões anatômicas no sentido posterior para o anterior são:",
    options: [
      "Córnea, esclera e corpo ciliar.",
      "Coroide, corpo ciliar e íris.",
      "Retina, fovea central e disco óptico.",
      "Processo ciliar, zônula ciliar e cristalino.",
      "Esclera, coroide e retina.",
    ],
    answer: 1,
    explanation:
      "A úvea é composta de trás para frente pela coroide (nutritiva e pigmentada), corpo ciliar (produção de humor aquoso e acomodação) e íris (diafragma pupilar).",
  },
  {
    id: 3,
    subject: "visual",
    difficulty: "media",
    statement:
      "A retina constitui a túnica interna do bulbo ocular e é subdividida em duas porções principais separadas pela ora serrata. Assinale a afirmativa correta sobre essa divisão:",
    options: [
      "A parte cega da retina é revestida internamente por fotorreceptores sensíveis à luz fraca.",
      "A parte óptica da retina estende-se posteriormente a partir da ora serrata e contém os fotorreceptores.",
      "A ora serrata localiza-se na porção central da foveola, marcando a transição entre cones e bastonetes.",
      "A parte ciliar e irídica da retina formam a região de maior acuidade visual do olho.",
      "A túnica interna é inteiramente vascularizada pela artéria oftálmica sem relação com o epitélio pigmentado.",
    ],
    answer: 1,
    explanation:
      "A retina é dividida pela ora serrata em parte óptica (posterior, fotossensível com cones e bastonetes) e parte cega (anterior, sem fotorreceptores, cobrindo corpo ciliar e íris).",
  },
  {
    id: 4,
    subject: "visual",
    difficulty: "media",
    statement:
      "Entre os meios de refração do bulbo ocular, a córnea destaca-se pelo seu poder dióptrico. Sobre as características anatômicas e funcionais da córnea, é correto afirmar:",
    options: [
      "Apresenta alto grau de vascularização promovida pelos ramos da artéria central da retina.",
      "Constitui o principal meio de refração estático do olho, contribuindo com cerca de +40 a +44 dioptrias.",
      "É inervada por fibras motoras do nervo oculomotor (NC III) para modificar dinamicamente sua curvatura.",
      "É recoberta posteriormente pela cápsula do cristalino e recebe nutrição direta do humor vítreo.",
      "Sofre alteração de formato coordenada pelo músculo ciliar para a focalização de objetos próximos.",
    ],
    answer: 1,
    explanation:
      "A córnea é avascular, inervada pelo nervo nasociliar (NC V1) e representa o maior poder refrativo do olho (~40-44 dioptrias), com curvatura fixa.",
  },
  {
    id: 5,
    subject: "visual",
    difficulty: "facil",
    statement:
      "O cristalino (lente) é uma estrutura biconvexa, transparente e elástica. Ele é mantido em sua posição por meio de:",
    options: [
      "Ligamento suspensor da pálpebra e tarso superior.",
      "Fibras da zônula ciliar conectadas ao corpo ciliar.",
      "Trabéculas esclerais e canal de Schlemm.",
      "Bainha dural do nervo óptico.",
      "Ramos ciliares da artéria oftálmica.",
    ],
    answer: 1,
    explanation:
      "O cristalino é suspenso por fibras microfibrilares que formam a zônula ciliar (ligamento suspensor do cristalino), fixadas aos processos ciliares.",
  },
  {
    id: 6,
    subject: "visual",
    difficulty: "dificil",
    statement:
      "Durante o mecanismo de acomodação para a visão de perto, o sistema nervoso parassimpático (via NC III) promove:",
    options: [
      "Relaxamento do músculo ciliar, aumento da tensão na zônula ciliar e aplanamento do cristalino.",
      "Contração do músculo ciliar, afrouxamento da zônula e maior convexidade do cristalino.",
      "Contração do músculo dilatador da pupila para aumentar a entrada de luz focalizada.",
      "Paralisia da zônula ciliar, provocando o deslocamento do cristalino para a câmara anterior.",
      "Aumento do diâmetro corneano para ampliação do campo visual periférico.",
    ],
    answer: 1,
    explanation:
      "Na visão de perto, a contração do músculo ciliar reduz a tensão nas fibras zonulares e o cristalino adquire forma mais esférica (maior poder dióptrico).",
  },
  {
    id: 7,
    subject: "visual",
    difficulty: "media",
    statement:
      "O humor aquoso preenche as câmaras anterior e posterior do olho. Quanto à sua produção, circulação e drenagem, assinale a opção correta:",
    options: [
      "É secretado pelas células da córnea e drena diretamente para as veias da coroide.",
      "É produzido nos processos ciliares, passa pela pupila e drena no canal de Schlemm.",
      "É sintetizado no corpo vítreo e absorvido exclusivamente pelo disco do nervo óptico.",
      "Drena pela fissura orbital superior diretamente para o seio cavernoso.",
      "É reabsorvido pelas glândulas lacrimais no ângulo iridocorneano.",
    ],
    answer: 1,
    explanation:
      "É produzido no corpo ciliar (câmara posterior), passa pelo orifício pupilar para a câmara anterior e drena no ângulo iridocorneano via trabéculo até o canal de Schlemm.",
  },
  {
    id: 8,
    subject: "visual",
    difficulty: "facil",
    statement:
      "A obstrução na drenagem do humor aquoso no ângulo iridocorneano, com elevação da pressão intraocular, é denominada:",
    options: ["Catarata.", "Glaucoma.", "Presbiopia.", "Astigmatismo.", "Calázio."],
    answer: 1,
    explanation:
      "O glaucoma cursa com aumento da pressão intraocular por bloqueio da drenagem do humor aquoso, podendo comprimir fibras da retina e do nervo óptico.",
  },
  {
    id: 9,
    subject: "visual",
    difficulty: "media",
    statement: "A fovea central destaca-se por ser a região de máxima acuidade visual porque:",
    options: [
      "Contém exclusivamente bastonetes altamente concentrados e vascularização abundante.",
      "Concentra apenas cones e possui desvio lateral das camadas internas da retina.",
      "É o ponto onde os axônios das células ganglionares perfuram a esclera para formar o nervo óptico.",
      "É desprovida de pigmentação e recoberta por uma camada espessa de humor vítreo.",
      "Não depende da circulação da coroide, sendo nutrida pela artéria central da retina.",
    ],
    answer: 1,
    explanation:
      "A fóvea central contém apenas cones compactados e tem desvio lateral das camadas retinais internas, minimizando a dispersão da luz.",
  },
  {
    id: 10,
    subject: "visual",
    difficulty: "facil",
    statement: "O disco do nervo óptico (papila óptica) é considerado um 'ponto cego' porque:",
    options: [
      "Não contém fotorreceptores, sendo o ponto de saída dos axônios das células ganglionares.",
      "É coberto por uma camada opaca de melanina produzida pela coroide.",
      "É o local onde a artéria central da retina se eferentiza na cavidade vítrea sem fazer sinapses.",
      "Contém apenas bastonetes não funcionais sob luz diurna.",
      "Bloqueia a passagem do humor aquoso em direção à esclera.",
    ],
    answer: 0,
    explanation:
      "O disco óptico não possui fotorreceptores: é a região onde os axônios da retina convergem para formar o nervo óptico (NC II).",
  },
  {
    id: 11,
    subject: "visual",
    difficulty: "facil",
    statement: "Sobre as diferenças entre cones e bastonetes, assinale a afirmativa correta:",
    options: [
      "Os bastonetes são responsáveis pela visão em cores (fotópica) e possuem baixa sensibilidade à luz.",
      "Os cones são altamente sensíveis à luz fraca, sendo essenciais para a visão noturna (escotópica).",
      "Os cones são responsáveis pela visão de alta acuidade e percepção de cores, estando concentrados na foveola.",
      "Os bastonetes estão concentrados no centro da fovea e ausentes na periferia da retina.",
      "Ambos fazem sinapse direta com as células magnocelulares do quiasma óptico.",
    ],
    answer: 2,
    explanation:
      "Cones: acuidade e cores (visão fotópica), concentrados na fóvea. Bastonetes: alta sensibilidade luminosa, visão noturna e periférica, ausentes na foveola.",
  },
  {
    id: 12,
    subject: "visual",
    difficulty: "facil",
    statement:
      "Um paciente apresenta incapacidade de abduzir o olho direito (estrabismo convergente). A estrutura nervosa lesada, responsável pelo músculo reto lateral, é o:",
    options: [
      "Nervo Oculomotor (NC III).",
      "Nervo Troclear (NC IV).",
      "Nervo Abducente (NC VI).",
      "Nervo Oftálmico (NC V1).",
      "Nervo Facial (NC VII).",
    ],
    answer: 2,
    explanation:
      "Pela regra RL6OS4TO3, o reto lateral é inervado pelo NC VI (abducente), cuja função é abduzir o bulbo ocular.",
  },
  {
    id: 13,
    subject: "visual",
    difficulty: "facil",
    statement:
      "O músculo que passa pela tróclea no ângulo superomedial da órbita e seu nervo inervador são, respectivamente:",
    options: [
      "Músculo oblíquo superior; Nervo Oculomotor (NC III).",
      "Músculo oblíquo superior; Nervo Troclear (NC IV).",
      "Músculo reto superior; Nervo Troclear (NC IV).",
      "Músculo oblíquo inferior; Nervo Abducente (NC VI).",
      "Músculo levantador da pálpebra; Nervo Oftálmico (NC V1).",
    ],
    answer: 1,
    explanation:
      "O oblíquo superior (OS) é inervado pelo NC IV (troclear - OS4), promovendo intorsão, depressão e abdução do bulbo.",
  },
  {
    id: 14,
    subject: "visual",
    difficulty: "media",
    statement: "De acordo com a regra mnemônica RL6OS4TO3, o nervo oculomotor (NC III) inerva:",
    options: [
      "Apenas o reto lateral e o oblíquo superior.",
      "Todos os músculos extrínsecos da órbita, sem exceção.",
      "Retos superior, inferior e medial, oblíquo inferior e levantador da pálpebra.",
      "Somente os músculos oblíquos superior e inferior.",
      "Apenas os músculos motores intrínsecos do bulbo ocular.",
    ],
    answer: 2,
    explanation:
      "RL6 (reto lateral - NC VI), OS4 (oblíquo superior - NC IV) e TO3 (todos os outros - NC III).",
  },
  {
    id: 15,
    subject: "visual",
    difficulty: "facil",
    statement:
      "O sinal clínico decorrente da paralisia do músculo levantador da pálpebra superior, em lesão do NC III, é:",
    options: [
      "Lagoftalmo (incapacidade de fechar o olho).",
      "Ptose palpebral severa (queda da pálpebra superior).",
      "Midríase paralítica fixa por falta de inervação do músculo orbicular.",
      "Nistagmo vertical permanente.",
      "Exoftalmia pulsátil.",
    ],
    answer: 1,
    explanation:
      "O levantador da pálpebra superior é inervado pelo NC III; sua paralisia causa ptose palpebral. O fechamento depende do NC VII.",
  },
  {
    id: 16,
    subject: "visual",
    difficulty: "facil",
    statement:
      "O músculo orbicular do olho, responsável pelo fechamento firme das pálpebras, é inervado pelo:",
    options: [
      "Nervo Oftálmico (NC V1).",
      "Nervo Oculomotor (NC III).",
      "Nervo Facial (NC VII).",
      "Nervo Maxilar (NC V2).",
      "Nervo Abducente (NC VI).",
    ],
    answer: 2,
    explanation:
      "O orbicular do olho é músculo da expressão facial, inervado por ramos temporais e zigomáticos do nervo facial (NC VII).",
  },
  {
    id: 17,
    subject: "visual",
    difficulty: "facil",
    statement: "Atravessam o canal óptico:",
    options: [
      "Nervo óptico (NC II) e artéria oftálmica.",
      "Nervos oculomotor (NC III), troclear (NC IV) e abducente (NC VI).",
      "Nervo oftálmico (NC V1) e veia oftálmica superior.",
      "Artéria central da retina isolada e nervo maxilar (NC V2).",
      "Veia oftálmica inferior e nervo infraorbital.",
    ],
    answer: 0,
    explanation:
      "Pelo canal óptico passam o nervo óptico (NC II, revestido por meninges) e a artéria oftálmica (ramo da carótida interna).",
  },
  {
    id: 18,
    subject: "visual",
    difficulty: "media",
    statement: "Qual das seguintes estruturas NÃO atravessa a fissura orbital superior?",
    options: [
      "Nervo Oculomotor (NC III).",
      "Nervo Troclear (NC IV).",
      "Nervo Abducente (NC VI).",
      "Ramo Oftálmico do Trigêmeo (NC V1).",
      "Nervo Óptico (NC II).",
    ],
    answer: 4,
    explanation:
      "O nervo óptico passa pelo canal óptico. Pela fissura orbital superior passam NC III, IV, VI, V1 e a veia oftálmica superior.",
  },
  {
    id: 19,
    subject: "visual",
    difficulty: "facil",
    statement: "A artéria oftálmica origina-se como o primeiro ramo intracraniano da:",
    options: [
      "Artéria Carótida Externa.",
      "Artéria Carótida Interna.",
      "Artéria Basilar.",
      "Artéria Cerebral Média.",
      "Artéria Maxilar.",
    ],
    answer: 1,
    explanation:
      "A artéria oftálmica origina-se da carótida interna ao emergir do seio cavernoso, entrando na órbita pelo canal óptico.",
  },
  {
    id: 20,
    subject: "visual",
    difficulty: "dificil",
    statement: "O trajeto anatômico peculiar da artéria central da retina caracteriza-se por:",
    options: [
      "Perfurar a esclera anteriormente próximo ao limbo córneo-escleral.",
      "Penetrar na face inferior do nervo óptico e correr em seu centro até a papila.",
      "Acompanhar o nervo nasociliar pela fissura orbital inferior.",
      "Irrigar exclusivamente a coroide sem emitir ramos para as camadas internas da retina.",
      "Fazer anastomose direta com a artéria facial no ângulo medial do olho.",
    ],
    answer: 1,
    explanation:
      "Ela perfura a bainha dural do nervo óptico a ~10-15 mm atrás do bulbo, corre em seu centro e emerge no disco óptico para suprir a retina interna.",
  },
  {
    id: 21,
    subject: "visual",
    difficulty: "dificil",
    statement:
      "As camadas externas da retina são nutridas por difusão a partir da lâmina coriocapilar, fornecida pelas:",
    options: [
      "Artérias ciliares posteriores curtas.",
      "Artérias etmoidais anteriores.",
      "Artérias palpebrais mediais.",
      "Artéria supratroclear.",
      "Artéria infraorbital.",
    ],
    answer: 0,
    explanation:
      "As artérias ciliares posteriores curtas perfuram a esclera ao redor do nervo óptico e formam a coriocapilar, nutrindo a retina externa.",
  },
  {
    id: 22,
    subject: "visual",
    difficulty: "media",
    statement:
      "Uma característica anatômica fundamental das veias oftálmicas superior e inferior é que elas:",
    options: [
      "Possuem válvulas venosas bicúspides resistentes a refluxos.",
      "São desprovidas de válvulas venosas, permitindo fluxo sanguíneo bidirecional.",
      "Drenam exclusivamente para a veia jugular externa.",
      "Desembocam diretamente na artéria carótida interna no canal carótico.",
      "Formam um plexo fechado sem comunicação com as veias da face.",
    ],
    answer: 1,
    explanation:
      "As veias oftálmicas não possuem válvulas, permitindo que sangue e infecções da face fluam para o seio cavernoso.",
  },
  {
    id: 23,
    subject: "visual",
    difficulty: "media",
    statement:
      "A via anatômica de disseminação de infecções do 'triângulo perigoso da face' até o seio cavernoso é:",
    options: [
      "Comunicação da veia facial com a veia oftálmica superior, que drena no seio cavernoso.",
      "Trajeto do nervo óptico pelo canal óptico.",
      "Refluxo da artéria central da retina para a carótida interna.",
      "Passagem de bactérias pelo ducto nasolacrimal até a câmara anterior.",
      "Disseminação através das glândulas tarsais de Meibomius.",
    ],
    answer: 0,
    explanation:
      "A veia facial comunica-se com a oftálmica superior pela veia angular; sem válvulas, infecções faciais alcançam o seio cavernoso.",
  },
  {
    id: 24,
    subject: "visual",
    difficulty: "dificil",
    statement: "Fazem sinapse obrigatória no gânglio ciliar as fibras:",
    options: [
      "Sensitivas do nervo nasociliar (NC V1).",
      "Simpáticas pós-ganglionares do gânglio cervical superior.",
      "Parassimpáticas pré-ganglionares do nervo oculomotor (NC III).",
      "Motoras somáticas para o músculo oblíquo inferior.",
      "Aferentes visuais do nervo óptico.",
    ],
    answer: 2,
    explanation:
      "Apenas as fibras parassimpáticas pré-ganglionares do NC III (núcleo de Edinger-Westphal) fazem sinapse no gânglio ciliar; as demais apenas o atravessam.",
  },
  {
    id: 25,
    subject: "visual",
    difficulty: "media",
    statement:
      "Os nervos ciliares curtos conduzem fibras parassimpáticas pós-ganglionares que inervam os músculos intrínsecos:",
    options: [
      "Músculo dilatador da pupila e músculo tarsal superior.",
      "Músculo esfíncter da pupila e músculo ciliar.",
      "Músculo reto superior e músculo reto inferior.",
      "Músculo orbicular do olho e músculo corrugador do supercílio.",
      "Músculo ciliar e músculo dilatador da pupila exclusivamente.",
    ],
    answer: 1,
    explanation:
      "Levam fibras parassimpáticas pós-ganglionares ao esfíncter da pupila (miose) e ao músculo ciliar (acomodação).",
  },
  {
    id: 26,
    subject: "visual",
    difficulty: "media",
    statement: "Sobre o controle autônomo da pupila, assinale a alternativa correta:",
    options: [
      "A miose é promovida pelo sistema simpático via nervos ciliares longos.",
      "A midríase é mediada pelo sistema parassimpático (NC III) atuando no músculo ciliar.",
      "A miose é parassimpática (esfíncter pupilar) e a midríase é simpática (dilatador pupilar).",
      "A dilatação pupilar é causada pela contração do esfíncter induzida pela noradrenalina.",
      "A constricção pupilar depende da inervação motora somática do nervo abducente (NC VI).",
    ],
    answer: 2,
    explanation:
      "Miose = parassimpático (NC III → gânglio ciliar → esfíncter). Midríase = simpático (gânglio cervical superior → dilatador da pupila).",
  },
  {
    id: 27,
    subject: "visual",
    difficulty: "facil",
    statement: "A via aferente do reflexo fotomotor (direto e consensual) é mediada pelo:",
    options: [
      "Nervo Oculomotor (NC III).",
      "Nervo Óptico (NC II).",
      "Nervo Oftálmico (NC V1).",
      "Nervo Facial (NC VII).",
      "Nervo Trigêmeo (NC V).",
    ],
    answer: 1,
    explanation:
      "A aferência é conduzida pelo nervo óptico (NC II); a eferência motora (constricção pupilar) pelo NC III.",
  },
  {
    id: 28,
    subject: "visual",
    difficulty: "dificil",
    statement:
      "A estrutura do mesencéfalo responsável pela integração bilateral da resposta pupilar consensual é o:",
    options: [
      "Núcleo grácil e cuneiforme.",
      "Núcleo pré-tectal (área pré-tectal).",
      "Colículo inferior na ponte posterior.",
      "Corpo geniculado medial do tálamo.",
      "Núcleo motor do nervo trigêmeo.",
    ],
    answer: 1,
    explanation:
      "Neurônios pré-tectais enviam axônios bilateralmente aos núcleos de Edinger-Westphal (NC III), gerando o reflexo consensual.",
  },
  {
    id: 29,
    subject: "visual",
    difficulty: "media",
    statement: "As vias aferente e eferente do reflexo córneo-palpebral são, respectivamente:",
    options: [
      "Aferência: NC II; Eferência: NC III.",
      "Aferência: NC V1; Eferência: NC VII.",
      "Aferência: NC V2; Eferência: NC V3.",
      "Aferência: NC III; Eferência: NC VI.",
      "Aferência: NC VII; Eferência: NC V1.",
    ],
    answer: 1,
    explanation:
      "Aferência sensitiva da córnea pelo ramo nasociliar do NC V1; eferência motora do piscar pelo nervo facial (NC VII).",
  },
  {
    id: 30,
    subject: "visual",
    difficulty: "media",
    statement: "A tríade de eventos da resposta de acomodação para visão de perto é:",
    options: [
      "Aplanamento da lente, midríase pupilar e divergência ocular.",
      "Contração do músculo ciliar, constricção pupilar (miose) e convergência dos eixos oculares.",
      "Relaxamento do músculo ciliar, constricção pupilar e rotação externa do olho.",
      "Extensão da pálpebra, dilatação pupilar e paralisia dos fotorreceptores.",
      "Elevação da pressão intraocular, miose e abdução bilateral dos olhos.",
    ],
    answer: 1,
    explanation:
      "Acomodação da lente (contração ciliar), miose pupilar (melhora a profundidade de foco) e convergência ocular (retos mediais).",
  },
  {
    id: 31,
    subject: "visual",
    difficulty: "facil",
    statement: "Os axônios que formam o nervo óptico derivam de qual camada de células retinianas?",
    options: [
      "Células fotorreceptoras (cones e bastonetes).",
      "Células bipolares da camada nuclear interna.",
      "Células ganglionares da retina.",
      "Células amácrinas e horizontais.",
      "Epitélio pigmentado da retina.",
    ],
    answer: 2,
    explanation:
      "Os axônios das células ganglionares formam a camada de fibras nervosas, que se reúnem no disco óptico para constituir o NC II.",
  },
  {
    id: 32,
    subject: "visual",
    difficulty: "dificil",
    statement:
      "Sendo um trato do SNC, o nervo óptico é envolvido pelas três meninges e revestido por:",
    options: [
      "Células de Schwann.",
      "Oligodendrócitos e banhado por líquor no espaço subaracnóideo.",
      "Bainha de Henle contínua com a esclera sem LCR.",
      "Células ependimárias das câmaras oculares.",
      "Perineuro derivado da fáscia de Tenon.",
    ],
    answer: 1,
    explanation:
      "Extensão do diencéfalo, é mielinizado por oligodendrócitos e envolto pelas meninges; o espaço subaracnóideo contém LCR (daí o papiledema).",
  },
  {
    id: 33,
    subject: "visual",
    difficulty: "dificil",
    statement: "A luz proveniente do campo visual temporal esquerdo incide sobre a:",
    options: [
      "Retina temporal do olho esquerdo.",
      "Retina nasal do olho esquerdo.",
      "Retina nasal do olho direito.",
      "Foveola do olho direito.",
      "Parte cega do corpo ciliar direito.",
    ],
    answer: 1,
    explanation:
      "O campo visual temporal incide na retina nasal ipsilateral; o campo nasal incide na retina temporal ipsilateral.",
  },
  {
    id: 34,
    subject: "visual",
    difficulty: "media",
    statement: "No quiasma óptico ocorre o cruzamento (decussação) exclusivo de quais fibras?",
    options: [
      "Fibras provenientes da retina temporal de ambos os olhos.",
      "Fibras provenientes da retina nasal de ambos os olhos.",
      "100% de todas as fibras de ambos os olhos.",
      "Fibras maculares da retina temporal exclusivamente.",
      "Fibras motoras autonômicas do nervo oculomotor.",
    ],
    answer: 1,
    explanation:
      "Apenas as fibras da retina nasal (que captam os campos temporais) cruzam; as da retina temporal seguem ipsilaterais.",
  },
  {
    id: 35,
    subject: "visual",
    difficulty: "dificil",
    statement:
      "Cada trato óptico (por exemplo, o direito) contém fibras que carregam a informação de qual hemicampo visual?",
    options: [
      "Do campo visual total direito (visão monocular direita).",
      "Do hemicampo visual esquerdo contralateral.",
      "Dos dois campos visuais temporais (visão bitemporal).",
      "Exclusivamente dos fotorreceptores da fovea central de ambos os olhos.",
      "Do hemicampo visual superior ipsilateral.",
    ],
    answer: 1,
    explanation:
      "O trato óptico direito carrega retina temporal direita e nasal esquerda: ambas captam o hemicampo visual esquerdo (contralateral).",
  },
  {
    id: 36,
    subject: "visual",
    difficulty: "facil",
    statement: "O núcleo talâmico que atua como relé da via visual é o:",
    options: [
      "Corpo Geniculado Medial (CGM).",
      "Corpo Geniculado Lateral (CGL).",
      "Núcleo Ventral Posterolateral (VPL).",
      "Núcleo Ventral Posteromedial (VPM).",
      "Pulvinar posterior.",
    ],
    answer: 1,
    explanation: "O CGL é o relé visual; o CGM é o relé da via auditiva.",
  },
  {
    id: 37,
    subject: "visual",
    difficulty: "dificil",
    statement:
      "As fibras das radiações ópticas que carregam informações do quadrante retinal inferior fazem uma curva anterior no lobo temporal conhecida como:",
    options: [
      "Alça de Meyer (feixe temporal de Meyer).",
      "Fascículo longitudinal superior.",
      "Fímbria do hipocampo.",
      "Trato tegmental central.",
      "Trato corticobulbar.",
    ],
    answer: 0,
    explanation:
      "As radiações ópticas inferiores curvam-se anteriormente ao redor do corno temporal do ventrículo lateral (alça de Meyer).",
  },
  {
    id: 38,
    subject: "visual",
    difficulty: "facil",
    statement:
      "O córtex visual primário (V1, área 17) localiza-se no lobo occipital, ao longo das bordas do:",
    options: [
      "Sulco central (de Rolando).",
      "Sulco lateral (de Sylvius).",
      "Sulco calcarino (lábio superior e inferior).",
      "Sulco cingulado.",
      "Sulco parieto-occipital anterior.",
    ],
    answer: 2,
    explanation:
      "V1 situa-se nos lábios superior e inferior do sulco calcarino, na face medial do lobo occipital.",
  },
  {
    id: 39,
    subject: "visual",
    difficulty: "media",
    statement:
      "Secção traumática completa do nervo óptico direito próximo ao ápice da órbita provoca:",
    options: [
      "Cegueira total do olho direito (anopsia monocular direita).",
      "Hemianopsia bitemporal.",
      "Hemianopsia homônima esquerda.",
      "Quadranopsia superior direita.",
      "Perda do campo visual nasal esquerdo.",
    ],
    answer: 0,
    explanation:
      "A lesão interrompe toda a condução desse olho antes de qualquer decussação, gerando amaurose ipsilateral.",
  },
  {
    id: 40,
    subject: "visual",
    difficulty: "media",
    statement: "Macroadenoma hipofisário comprimindo a região mediana do quiasma óptico causa:",
    options: [
      "Hemianopsia homônima direita.",
      "Hemianopsia bitemporal (perda dos campos temporais).",
      "Cegueira total monocular esquerda.",
      "Quadranopsia inferior homônima.",
      "Escotoma central com preservação macular.",
    ],
    answer: 1,
    explanation:
      "A lesão central destrói as fibras das retinas nasais de ambos os olhos, que captam os campos temporais: hemianopsia bitemporal.",
  },
  {
    id: 41,
    subject: "visual",
    difficulty: "dificil",
    statement: "Uma lesão destrutiva completa do Trato Óptico Direito causará:",
    options: [
      "Hemianopsia homônima esquerda.",
      "Hemianopsia homônima direita.",
      "Hemianopsia bitemporal.",
      "Anopsia monocular direita.",
      "Quadranopsia superior esquerda.",
    ],
    answer: 0,
    explanation:
      "O trato óptico direito conduz o hemicampo visual esquerdo de ambos os olhos; sua lesão gera hemianopsia homônima esquerda.",
  },
  {
    id: 42,
    subject: "visual",
    difficulty: "dificil",
    statement:
      "Lobectomia temporal esquerda que gera o defeito 'pie in the sky' corresponde a uma:",
    options: [
      "Quadranopsia homônima superior direita.",
      "Quadranopsia homônima inferior esquerda.",
      "Hemianopsia bitemporal.",
      "Anopsia monocular esquerda.",
      "Hemianopsia nasal monocular.",
    ],
    answer: 0,
    explanation:
      "A lesão da alça de Meyer esquerda afeta as radiações ópticas inferiores: quadranopsia homônima superior direita.",
  },
  {
    id: 43,
    subject: "visual",
    difficulty: "dificil",
    statement:
      "A explicação anatômica da 'preservação macular' em infarto occipital por oclusão da artéria cerebral posterior é:",
    options: [
      "A fóvea é representada no corpo geniculado medial e não no córtex occipital.",
      "Dupla irrigação da área macular por ramos da cerebral posterior e cerebral média.",
      "A visão macular é conduzida exclusivamente pelo nervo trigêmeo.",
      "Os fotorreceptores da mácula não realizam decussação no quiasma óptico.",
      "A mácula drena diretamente para o seio sagital superior.",
    ],
    answer: 1,
    explanation:
      "A representação macular no polo occipital recebe vascularização colateral de ramos terminais da artéria cerebral média.",
  },
  {
    id: 44,
    subject: "visual",
    difficulty: "media",
    statement: "A tríade clássica da Síndrome de Horner no olho afetado é:",
    options: [
      "Ptose palpebral leve, miose e anidrose facial.",
      "Exoftalmia, midríase paralítica e estrabismo divergente.",
      "Lagoftalmo, miose e hiperemia conjuntival.",
      "Midríase, ptose severa e nistagmo.",
      "Cegueira monocular, anidrose e estrabismo convergente.",
    ],
    answer: 0,
    explanation:
      "A perda do tônus simpático causa ptose parcial (músculo de Müller), miose e anidrose ipsilateral.",
  },
  {
    id: 45,
    subject: "visual",
    difficulty: "media",
    statement:
      "Qual nervo atravessa o sulco e canal infraorbital, oriundo da fissura orbital inferior?",
    options: [
      "Nervo Infraorbital (ramo do Nervo Maxilar - NC V2).",
      "Nervo Supraorbital (ramo do NC V1).",
      "Nervo Oculomotor (NC III).",
      "Nervo Ciliar Longo.",
      "Nervo Mandibular (NC V3).",
    ],
    answer: 0,
    explanation:
      "Pela fissura orbital inferior passam o nervo infraorbital e o zigomático (ramos do NC V2) e os vasos infraorbitais.",
  },
  {
    id: 46,
    subject: "visual",
    difficulty: "dificil",
    statement:
      "Diferente dos outros músculos extrínsecos, o músculo oblíquo inferior origina-se na:",
    options: [
      "Porção anterior do assoalho da órbita (osso maxilar).",
      "Asa menor do osso esfenoide no ápice da órbita.",
      "Crista lacrimal posterior do osso etmoide.",
      "Tróclea do osso frontal.",
      "Fissura orbital inferior.",
    ],
    answer: 0,
    explanation:
      "É o único extrínseco que se origina na parte anterior do assoalho da órbita (maxila), dirigindo-se posterolateralmente até a esclera.",
  },
  {
    id: 47,
    subject: "visual",
    difficulty: "facil",
    statement: "O líquido lacrimal drena do fórnice conjuntival até a cavidade nasal através do:",
    options: [
      "Canal óptico.",
      "Ducto nasolacrimal, que desemboca no meato nasal inferior.",
      "Meato nasal superior via seio etmoidal.",
      "Seio maxilar através do hiato maxilar.",
      "Canal incisivo.",
    ],
    answer: 1,
    explanation:
      "A lágrima entra nos pontos e canalículos lacrimais, acumula-se no saco lacrimal e drena pelo ducto nasolacrimal ao meato nasal inferior.",
  },
  {
    id: 48,
    subject: "visual",
    difficulty: "media",
    statement:
      "Na paralisia completa do NC III, a posição de 'olho para baixo e para fora' decorre da ação não antagonizada dos músculos:",
    options: [
      "Reto lateral (NC VI) e oblíquo superior (NC IV).",
      "Reto medial e reto superior.",
      "Oblíquo inferior e reto inferior.",
      "Levantador da pálpebra e orbicular do olho.",
      "Reto lateral e reto medial.",
    ],
    answer: 0,
    explanation:
      "Preservam-se o reto lateral (abdução, NC VI) e o oblíquo superior (intorsão/depressão, NC IV), puxando o olho para fora e para baixo.",
  },
  {
    id: 49,
    subject: "visual",
    difficulty: "media",
    statement: "Entre as funções vitais do epitélio pigmentado da retina (EPR) destaca-se:",
    options: [
      "Produção do humor vítreo e secreção de imunoglobulinas na câmara anterior.",
      "Absorção da luz dispersa e fagocitose dos discos dos fotorreceptores.",
      "Condução de potenciais de ação até o quiasma óptico.",
      "Inervação motora dos processos ciliares para alteração do foco.",
      "Filtração mecânica do humor aquoso no canal de Schlemm.",
    ],
    answer: 1,
    explanation:
      "O EPR contém melanina para absorver fótons dispersos, dá suporte metabólico, renova pigmentos visuais e fagocita os segmentos externos dos fotorreceptores.",
  },
  {
    id: 50,
    subject: "visual",
    difficulty: "media",
    statement: "A sequência correta das estruturas percorridas pelo impulso nervoso visual é:",
    options: [
      "Fotorreceptores → Células bipolares → Ganglionares → Nervo óptico → Trato óptico → CGL → Córtex V1.",
      "Células ganglionares → Fotorreceptores → Células bipolares → Trato óptico → Quiasma → CGL → Córtex V1.",
      "Córnea → Cristalino → Nervo óptico → Corpo Geniculado Medial → Córtex temporal.",
      "Fotorreceptores → Nervo óptico → Colículo inferior → CGL → Radiações ópticas → Córtex frontal.",
      "Células bipolares → Fotorreceptores → Células ganglionares → Quiasma → CGL → Córtex occipital.",
    ],
    answer: 0,
    explanation:
      "Fotorreceptores → bipolares → ganglionares (axônios formam o NC II) → quiasma → trato óptico → CGL → radiações ópticas → V1.",
  },
];

export const questions: Question[] = [...visualQuestions, ...somatoQuestions, ...auditivoQuestions];
