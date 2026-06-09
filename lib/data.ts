export interface MaterialItem {
  title: string;
  url: string;
  type: 'mp3' | 'pdf' | 'doc' | 'page';
  date?: string;
  description?: string;
}

export interface MaterialCategory {
  id: string;
  label: string;
  description: string;
  href: string;
  items?: MaterialItem[];
  external?: boolean;
}

export const categories: MaterialCategory[] = [
  {
    id: 'predicazioni-2013',
    label: 'Predicazioni 2013',
    description: 'Insegnamenti e messaggi dall\'anno 2013.',
    href: '/predicazioni-2013/',
  },
  {
    id: 'predicazioni-2012',
    label: 'Predicazioni 2012',
    description: 'Insegnamenti e messaggi dall\'anno 2012.',
    href: '/predicazioni-2012/',
  },
  {
    id: 'predicazioni-2011',
    label: 'Predicazioni 2011',
    description: 'Insegnamenti e messaggi dall\'anno 2011.',
    href: '/predicazioni-2011/',
  },
  {
    id: 'musica',
    label: 'Musica',
    description: 'Testi e accordi dei canti del ministero Senza Misura.',
    href: '/musica/',
  },
  {
    id: 'libri',
    label: 'Libri & Trattati',
    description: 'Pubblicazioni e studi biblici approfonditi in PDF.',
    href: '/libri/',
  },
  {
    id: 'produzioni',
    label: 'Produzioni Speciali',
    description: 'Materiali del periodo 2009 — 2011.',
    href: '/produzioni-speciali/',
  },
  {
    id: 'fire-generation',
    label: 'Fire Generation',
    description: 'Insegnamenti 2011/2012 per la nuova generazione.',
    href: '/fire-generation/',
  },
  {
    id: 'scuola-biblica',
    label: 'Scuola Biblica Giubileo',
    description: 'Lezioni della Scuola Biblica Giubileo 2012/2013.',
    href: '/scuola-biblica/',
  },
  {
    id: 'ichurch',
    label: 'Lezioni iChurch',
    description: 'Insegnamenti e lezioni del progetto iChurch.',
    href: '/ichurch/',
  },
];

export const books: MaterialItem[] = [
  {
    title: 'Ora che sei salvato',
    url: 'http://www.senzamisura.org/senza_misura/Libri_files/TRADUZIONE%20%20BONNKE%20--Now%20that%20you%20are%20saved--%20-%20Copia.pdf',
    type: 'pdf',
    description: 'di Reinhard Bonnke',
  },
  {
    title: 'Transforming Your World',
    url: 'http://www.senzamisura.org/senza_misura/Libri_files/TRANSFORMING%20YOUR%20WORLD%20di%20John%20Mulinde.pdf',
    type: 'pdf',
    description: 'di John Mulinde — 2005',
  },
  {
    title: 'Seri con Dio',
    url: 'http://www.senzamisura.org/senza_misura/Libri_files/Seri%20con%20Dio.pdf',
    type: 'pdf',
    description: 'di Steve Hill — 1999',
  },
  {
    title: 'Restaurare la Visione Apostolica nella Chiesa',
    url: 'http://www.senzamisura.org/senza_misura/Libri_files/Definitivo_A4.pdf',
    type: 'pdf',
    description: 'di Corrado Salmé — 2007',
  },
  {
    title: 'Vita Abbondante',
    url: 'http://www.senzamisura.org/senza_misura/Libri_files/Vita%20abbondante.pdf',
    type: 'pdf',
    description: 'di Corrado Salmé — 2006',
  },
];

export const albums = [
  {
    title: 'Apri i miei occhi',
    year: 1996,
    tracks: [
      { title: 'Apri i miei occhi', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Apri%20i%20miei%20occhi/04%20Apri%20i%20miei%20occhi.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/Apri%20i%20miei%20occhi.doc' },
      { title: 'Tu vedrai', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Apri%20i%20miei%20occhi/05%20Tu%20vedrai.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/Tu%20vedrai.doc' },
    ],
  },
  {
    title: 'Quanti miracoli',
    year: 1999,
    tracks: [
      { title: 'In questa città', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Quanti%20miracoli/01%20In%20questa%20citta.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/01%20In%20questa%20citta%27.doc' },
      { title: 'Quanti miracoli', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Quanti%20miracoli/02%20Quanti%20miracoli.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/02%20Quanti%20miracoli.doc' },
      { title: 'O Dio, sei il mio Dio', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Quanti%20miracoli/03%20O%20Dio,%20sei%20il%20Mio%20Dio%20(Salmo%2063).mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/03%20O%20Dio,%20sei%20il%20mio%20Dio%20%28Salmo%2063%29.doc' },
      { title: 'Uniti nel Suo amor', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Quanti%20miracoli/04%20Uniti%20nel%20Suo%20amor.mp3', doc: '' },
    ],
  },
  {
    title: 'Enna 2000 — I giovani avranno visioni',
    year: 2000,
    tracks: [
      { title: 'Noi predichiamo Cristo', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Enna%202000%20-%20I%20giovani%20avranno%20visioni/01%20Noi%20predichiamo%20Cristo.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/01%20Noi%20predichiamo%20Cristo.doc' },
      { title: 'Esortazione Past. Antonio Coco', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Enna%202000%20-%20I%20giovani%20avranno%20visioni/02%20Esortazione%20Past.%20Antonio%20Coco.mp3', doc: '' },
      { title: 'Piove su di me', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Enna%202000%20-%20I%20giovani%20avranno%20visioni/03%20Piove%20su%20di%20me.mp3', doc: '' },
      { title: 'Sienti Gesù', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Enna%202000%20-%20I%20giovani%20avranno%20visioni/04%20Sienti%20Gesu%27.mp3', doc: '' },
      { title: 'Gesù è il Re', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Enna%202000%20-%20I%20giovani%20avranno%20visioni/05%20Gesu%27%20e%27%20il%20Re.mp3', doc: '' },
    ],
  },
  {
    title: 'Infuocati per Dio',
    year: 2003,
    tracks: [
      { title: 'Intro', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202003/01%20Intro.mp3', doc: '' },
      { title: 'Noi predichiamo Cristo', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202003/02%20Noi%20predichiamo%20Cristo.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/01%20Noi%20predichiamo%20Cristo_1.doc' },
      { title: 'Tu stai chiamando', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202003/03%20Tu%20stai%20chiamando.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/02%20Tu%20stai%20chiamando.doc' },
      { title: 'Supplica per la nazione', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202003/04%20Supplica%20per%20la%20nazione.mp3', doc: '' },
      { title: 'Isaia 54', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202003/05%20Isaia%2054.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/03%20Isaia%2054.doc' },
    ],
  },
  {
    title: 'Infuocati per Dio',
    year: 2004,
    tracks: [
      { title: 'Intro', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202004/01%20Intro.mp3', doc: '' },
      { title: 'Benedirò l\'Eterno', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202004/02%20Benediro%20l%27Eterno.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/Benediro%27%20l%27Eterno.doc' },
      { title: 'Dio è la mia forza', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202004/03%20Dio%20e%20la%20mia%20forza.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/Dio%20e%27%20la%20mia%20forza.doc' },
      { title: 'Dedicato a Te', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202004/04%20Dedicato%20a%20Te.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/03%20Dedicato%20a%20Te.doc' },
      { title: 'Salmo 24', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202004/05%20Salmo%2024.mp3', doc: '' },
    ],
  },
  {
    title: 'Infuocati per Dio',
    year: 2005,
    tracks: [
      { title: 'Intro', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202005/01%20Intro.mp3', doc: '' },
      { title: 'Avanti', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202005/02%20Avanti.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/01%20Avanti.doc' },
      { title: 'Passione per la nazione', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202005/03%20Passione%20per%20la%20nazione.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/02%20Passione%20per%20la%20nazione.doc' },
      { title: 'Supplica per la generazione', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202005/04%20Supplica%20per%20la%20generazione.mp3', doc: '' },
      { title: 'Se il Mio popolo', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202005/05%20Se%20il%20Mio%20popolo.mp3', doc: '' },
    ],
  },
  {
    title: 'Infuocati per Dio',
    year: 2006,
    tracks: [
      { title: 'Intro', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202006/01%20Intro.mp3', doc: '' },
      { title: 'Io odo un suono (preparate la via)', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202006/02%20Io%20odo%20un%20suono%20(preparate%20la%20via).mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/01%20Preparate%20la%20via.doc' },
      { title: 'PrepariamoGli la via', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202006/03%20PrepariamoGli%20la%20via.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/02%20Prepariamogli%20la%20via.doc' },
      { title: 'Senso di responsabilità', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202006/04%20Senso%20di%20responsabilita.mp3', doc: '' },
      { title: 'Intercessione di Michele Montecchi', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202006/05%20Intercessione%20di%20Michele%20Montecchi.mp3', doc: '' },
    ],
  },
  {
    title: 'Infuocati per Dio',
    year: 2008,
    tracks: [
      { title: 'Dedicato a Te', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202008/01%20E%27%20dedicato%20a%20Te.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/03%20Dedicato%20a%20Te_1.doc' },
      { title: 'Sorgi e risplendi', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202008/02%20Sorgi%20e%20risplendi.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/01%20Sorgi%20e%20Risplendi.doc' },
      { title: 'La Sua gloria è in mezzo a noi', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202008/03%20La%20Sua%20gloria%20e%20in%20mezzo%20a%20noi%20(estemporanea).mp3', doc: '' },
      { title: 'Il grido di Giacobbe', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202008/04%20Il%20grido%20di%20Giacobbe.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/02%20Il%20grido%20di%20Giacobbe.doc' },
      { title: 'Preghiera per questa generazione', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202008/05%20Preghiera%20per%20questa%20generazione.mp3', doc: '' },
      { title: 'Io vedrò la Tua gloria', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202008/06%20Io%20vedro%20la%20Tua%20gloria.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/Io%20vedro%CC%80%20la%20Tua%20gloria.doc' },
      { title: 'E\' un onore', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202008/07%20E%27%20un%20onore.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/04%20E%27%20un%20onore.doc' },
      { title: 'Adorare Te', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202008/08%20Adorare%20Te%20(estemporanea).mp3', doc: '' },
      { title: 'Sottometto la mia vita', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202008/09%20Sottometto%20la%20mia%20vita.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/05%20Sottometto%20la%20mia%20vita.doc' },
      { title: 'Alleluia', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202008/10%20Alleluia.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/06%20Alleluia.doc' },
      { title: 'Noi diamo gloria', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202008/11%20Noi%20diamo%20gloria%20(estemporanea).mp3', doc: '' },
      { title: 'Una fiamma per Te', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202008/12%20Una%20fiamma%20per%20Te.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/07%20Una%20Fiamma%20per%20Te.doc' },
      { title: 'Io voglio Te', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Infuocati%20per%20Dio%202008/13%20Io%20voglio%20Te.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/08%20Io%20voglio%20Te.doc' },
    ],
  },
  {
    title: 'Concerto a Palermo',
    year: 2011,
    tracks: [
      { title: 'Tutto è possibile', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Palermo%202011/01_Tutto_e_possibile.mp3', doc: '' },
      { title: 'Ora tocca a noi', mp3: 'http://www.amcfan.org/AMCFAN/Media/Musica/Palermo%202011/02_Ora_tocca_a_noi.mp3', doc: 'http://www.senzamisura.org/senza_misura/Musica_files/Ora%20tocca%20a%20noi.doc' },
    ],
  },
];
