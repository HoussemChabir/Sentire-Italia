import React from 'react';
import { Destination, Experience, Package } from './types';
import { Compass, Palmtree, Utensils, Droplets, Sailboat, Music } from 'lucide-react';

export const HERO_TITLE = "Sentire Tunisia";
export const HERO_SUBTITLE = "Il viaggio che inizia dai sensi.";

export const INTRO_PARAGRAPHS = [
  "Benvenuto su Sentire Tunisia, il portale dedicato ai viaggiatori italiani che desiderano scoprire la Tunisia in tutta la sua autenticità. Qui troverai un Paese sorprendente: vicinissimo all’Italia ma profondamente diverso, ricco di tradizioni mediterranee, influenze arabe, eredità berbere e testimonianze romane.",
  "Il nostro obiettivo è accompagnarti in un viaggio che non sia solo geografico, ma sensoriale. Dalle medine labirintiche ai souk profumati di spezie, dalle coste dorate del Mediterraneo alle oasi verdi del Sahara, ti guidiamo alla scoperta di una Tunisia viva, accogliente e sempre pronta a raccontarsi.",
  "Sentire Tunisia è più di un semplice sito: è una porta aperta su un Paese ricco di storie, colori, sapori, artigianato, tradizioni secolari, musica e ospitalità."
];

export const MISSION_TITLE = "Missione";
export const MISSION_INTRO = "La nostra missione è permettere ai viaggiatori italiani di vivere la Tunisia nel modo più autentico possibile. Ci impegniamo a:";
export const MISSION_POINTS = [
  "Presentare una visione reale, moderna e rassicurante del Paese",
  "Offrire itinerari studiati per chi vuole cultura, relax o avventura",
  "Valorizzare la ricchezza storica e naturale del territorio",
  "Promuovere un turismo rispettoso, sostenibile e attento alle comunità locali",
  "Garantire supporto, assistenza e consigli affidabili in ogni fase del viaggio"
];
export const MISSION_CONCLUSION = "Sentire Tunisia nasce per far scoprire non solo le mete più famose, ma anche i volti meno conosciuti del Paese: villaggi, tradizioni artigianali, percorsi naturali e storie locali.";

export const PACKAGES: Package[] = [
  {
    id: 'grand-tour',
    title: 'Il Gran Tour Classico',
    subtitle: 'Storia e Cultura',
    duration: '8 Giorni / 7 Notti',
    price: 'da €1.200',
    description: 'Un viaggio nel tempo attraverso le civiltà che hanno segnato la Tunisia. Dalla maestosità romana alle medine arabe.',
    highlights: ['Museo del Bardo', 'Rovine di Cartagine', 'Anfiteatro di El Jem', 'Kairouan la Santa'],
    imageUrl: 'https://picsum.photos/800/600?random=20'
  },
  {
    id: 'sahara-magic',
    title: 'Magia del Sahara',
    subtitle: 'Avventura e Natura',
    duration: '5 Giorni / 4 Notti',
    price: 'da €950',
    description: 'Immergiti nel silenzio delle dune. Un’esperienza indimenticabile tra oasi, villaggi berberi e notti stellate.',
    highlights: ['Notte in campo tendato di lusso', 'Tramonto sul lago salato', 'Oasi di montagna', 'Set di Star Wars'],
    imageUrl: 'https://picsum.photos/800/600?random=21'
  },
  {
    id: 'blue-relax',
    title: 'Blu Mediterraneo',
    subtitle: 'Relax e Charme',
    duration: '7 Giorni / 6 Notti',
    price: 'da €1.050',
    description: 'Il perfetto equilibrio tra mare cristallino, benessere e scoperta dei villaggi costieri più eleganti.',
    highlights: ['Sidi Bou Said', 'Hammam tradizionale', 'Spiagge di Mahdia', 'Cena di pesce sul mare'],
    imageUrl: 'https://picsum.photos/800/600?random=22'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'tunisi',
    title: 'Tunisi e Cartagine',
    description: 'La capitale è un mix perfetto di antico e moderno. Da non perdere: la medina, una delle più affascinanti del Nord Africa; il Museo del Bardo, con una collezione unica di mosaici romani; le rovine di Cartagine, patrimonio UNESCO; Sidi Bou Said, il celebre villaggio bianco e blu. Tunisi è ideale per chi vuole cultura, shopping e gastronomia.',
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 'hammamet',
    title: 'Hammamet e Nabeul',
    description: 'Località balneari tra le più amate dai viaggiatori italiani. Offrono: acque limpide e spiagge attrezzate, resort moderni e centri benessere, campi da golf e hotel di charme, botteghe di ceramiche, profumi e artigianato locale. Perfette per relax e comfort.',
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 'sahara',
    title: 'Sahara e Oasi',
    description: 'Il sud tunisino è un mondo a sé: intenso, silenzioso e maestoso. Luoghi iconici: Douz, la “porta del deserto”; Tozeur, famosa per il suo palmeto e l’architettura in mattoni gialli; Chott el Jerid, il grande lago salato che al tramonto diventa rosa. Esperienze: cammellate, 4x4 sulle dune, notti sotto le stelle.',
    imageUrl: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: 'sousse',
    title: 'Sousse e Monastir',
    description: 'Due città costiere ricche di storia: medine fortificate, ribat e musei, lunghe spiagge e resort per famiglie, ottima vita notturna, ristoranti e attività sportive. Perfette per chi cerca un mix di mare e cultura.',
    imageUrl: 'https://picsum.photos/800/600?random=4'
  },
  {
    id: 'djerba',
    title: 'Djerba',
    description: 'L’“isola della serenità”. Famosa per: case bianche tradizionali, mercati colorati e villaggi autentici, lagune, cammelli, sport acquatici, la sinagoga della Ghriba. Djerba è ideale per chi vuole calma, tradizione e paesaggi unici.',
    imageUrl: 'https://picsum.photos/800/600?random=5'
  }
];

export const EXPERIENCES: Experience[] = [
  { 
    id: 'tours', 
    title: 'Tour privati con guide certificate', 
    description: 'Itinerari culturali, archeologici, urbani e naturalistici con esperti locali che parlano italiano.',
    icon: <Compass className="w-6 h-6" /> 
  },
  { 
    id: 'desert', 
    title: 'Escursioni 4x4 nel deserto', 
    description: 'Percorsi tra dune, canyon e oasi remote, con la possibilità di trascorrere la notte in campi berberi.',
    icon: <Palmtree className="w-6 h-6" /> 
  },
  { 
    id: 'food', 
    title: 'Percorsi gastronomici', 
    description: 'Degustazione di couscous, brik, datteri dell’oasi, harissa, pesce fresco e dolci tradizionali.',
    icon: <Utensils className="w-6 h-6" /> 
  },
  { 
    id: 'spa', 
    title: 'Hammam e spa tradizionali', 
    description: 'Rituali di benessere tipici del Maghreb: scrub, massaggi, oli essenziali e bagni di vapore.',
    icon: <Droplets className="w-6 h-6" /> 
  },
  { 
    id: 'sport', 
    title: 'Sport acquatici', 
    description: 'Kite surf, immersioni, vela, snorkeling, escursioni in barca lungo la costa mediterranea.',
    icon: <Sailboat className="w-6 h-6" /> 
  },
  { 
    id: 'culture', 
    title: 'Arte e cultura', 
    description: 'Festival, eventi tradizionali, spettacoli folkloristici, artigianato locale, visite a medine e souk.',
    icon: <Music className="w-6 h-6" /> 
  },
];

export const WHY_US = [
  "Itinerari su misura pensati per i viaggiatori italiani",
  "Consulenza culturale e logistica basata su conoscenza diretta del territorio",
  "Sicurezza e comfort in ogni tappa",
  "Rete di contatti locali affidabili (guide, hotel, trasporti, artigiani)",
  "Assistenza continua, prima e durante il viaggio",
  "Autenticità garantita, attraverso esperienze curate e responsabili"
];