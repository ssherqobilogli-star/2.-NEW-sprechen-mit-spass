import type { Topic } from '../types';

export const TOPICS: Topic[] = [
  // A1
  { id: "t1", level: "A1", order: 1, titleDe: "Begruessung und Vorstellung", titleUz: "Salomlashish va tanishish", description: "Wie heissen Sie? Erste Kontakte auf Deutsch.", icon: "\u{1F44B}", isLocked: false },
  { id: "t2", level: "A1", order: 2, titleDe: "Familie und Verwandte", titleUz: "Oila va qarindoshlar", description: "Mutter, Vater, Geschwister - die Familie beschreiben.", icon: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}", isLocked: false },
  { id: "t3", level: "A1", order: 3, titleDe: "Zahlen und Mengen", titleUz: "Sonlar va miqdorlar", description: "Zahlen von 1 bis 1000 - zaehlen, rechnen, Preise nennen.", icon: "\u{1F522}", isLocked: false },
  { id: "t4", level: "A1", order: 4, titleDe: "Farben und Formen", titleUz: "Ranglar va shakllar", description: "Rot, blau, gruen - Farben und Formen auf Deutsch.", icon: "\u{1F3A8}", isLocked: false },
  { id: "t5", level: "A1", order: 5, titleDe: "Essen und Trinken", titleUz: "Taom va ichimliklar", description: "Lebensmittel, Mahlzeiten und Lieblingsessen besprechen.", icon: "\u{1F37D}\u{FE0F}", isLocked: true },
  { id: "t6", level: "A1", order: 6, titleDe: "Tiere", titleUz: "Hayvonlar", description: "Haustiere und Wildtiere - Tiere auf Deutsch benennen.", icon: "\u{1F43E}", isLocked: true },
  { id: "t7", level: "A1", order: 7, titleDe: "Koerper und Gesundheit", titleUz: "Tana va sog\u0027liq", description: "Koerperteile und einfache Beschwerden beim Arzt.", icon: "\u{1F3E5}", isLocked: true },
  { id: "t8", level: "A1", order: 8, titleDe: "Kleidung und Mode", titleUz: "Kiyim va moda", description: "Was traegt man? Kleidungsstuecke einkaufen und beschreiben.", icon: "\u{1F457}", isLocked: true },
  { id: "t9", level: "A1", order: 9, titleDe: "Wetter und Jahreszeiten", titleUz: "Ob-havo va fasllar", description: "Wie ist das Wetter heute? Jahreszeiten und Klima.", icon: "\u{1F324}\u{FE0F}", isLocked: true },
  { id: "t10", level: "A1", order: 10, titleDe: "Berufe und Arbeit", titleUz: "Kasblar va ish", description: "Was machst du beruflich? Typische Berufe vorstellen.", icon: "\u{1F4BC}", isLocked: true },
  { id: "t11", level: "A1", order: 11, titleDe: "Wohnen und Zuhause", titleUz: "Uy-joy va turar joy", description: "Zimmer, Moebel und die eigene Wohnung beschreiben.", icon: "\u{1F3E0}", isLocked: true },
  { id: "t12", level: "A1", order: 12, titleDe: "Schule und Lernen", titleUz: "Maktab va o\u0027qish", description: "Faecher, Schulsachen und der Schulalltag auf Deutsch.", icon: "\u{1F392}", isLocked: true },
  { id: "t13", level: "A1", order: 13, titleDe: "Transport und Verkehr", titleUz: "Transport va harakatlanish", description: "Mit Bus, Bahn oder Auto - Verkehrsmittel auf Deutsch.", icon: "\u{1F68C}", isLocked: true },
  { id: "t14", level: "A1", order: 14, titleDe: "Einkaufen und Preise", titleUz: "Xarid qilish va narxlar", description: "Im Supermarkt, auf dem Markt - bezahlen und fragen.", icon: "\u{1F6D2}", isLocked: true },
  { id: "t15", level: "A1", order: 15, titleDe: "Freizeit und Hobbys", titleUz: "Bo\u0027sh vaqt va hobbilar", description: "Was machst du in der Freizeit? Hobbys und Sport.", icon: "\u{26BD}", isLocked: true },

  // A2
  { id: "t16", level: "A2", order: 1, titleDe: "Alltag und Tagesablauf", titleUz: "Kundalik hayot va kun tartibi", description: "Morgens aufstehen bis abends schlafen - Tagesablauf beschreiben.", icon: "\u{23F0}", isLocked: false },
  { id: "t17", level: "A2", order: 2, titleDe: "Reisen und Urlaub", titleUz: "Sayohat va ta\u0027til", description: "Hotel buchen, Sehenswuerdigkeiten besuchen, Urlaub planen.", icon: "\u{2708}\u{FE0F}", isLocked: true },
  { id: "t18", level: "A2", order: 3, titleDe: "Restaurant und Cafee", titleUz: "Restoran va kafe", description: "Bestellen, bezahlen und ueber Essen sprechen.", icon: "\u{2615}", isLocked: true },
  { id: "t19", level: "A2", order: 4, titleDe: "Gesundheit und Arzt", titleUz: "Sog\u0027liq va shifokor", description: "Symptome beschreiben, Termin machen, Rezept abholen.", icon: "\u{1F48A}", isLocked: true },
  { id: "t20", level: "A2", order: 5, titleDe: "Wohnung suchen", titleUz: "Kvartira izlash", description: "Anzeigen lesen, Besichtigungstermin machen, Mietvertrag.", icon: "\u{1F511}", isLocked: true },
  { id: "t21", level: "A2", order: 6, titleDe: "Kommunikation und Medien", titleUz: "Muloqot va media", description: "Telefonieren, E-Mails schreiben, soziale Medien nutzen.", icon: "\u{1F4F1}", isLocked: true },
  { id: "t22", level: "A2", order: 7, titleDe: "Gefuehle und Emotionen", titleUz: "Hislar va tuygular", description: "Freude, Trauer, Ueberraschung - Emotionen ausdruecken.", icon: "\u{1F60A}", isLocked: true },
  { id: "t23", level: "A2", order: 8, titleDe: "Sport und Fitness", titleUz: "Sport va fitnes", description: "Sportarten, Fitnessstudio, gesunde Lebensweise.", icon: "\u{1F3CB}\u{FE0F}", isLocked: true },
  { id: "t24", level: "A2", order: 9, titleDe: "Natur und Umwelt", titleUz: "Tabiat va atrof-muhit", description: "Wald, Berge, Fluesse - Natur beschreiben und schuetzen.", icon: "\u{1F33F}", isLocked: true },
  { id: "t25", level: "A2", order: 10, titleDe: "Kultur und Feste", titleUz: "Madaniyat va bayramlar", description: "Weihnachten, Karneval und andere deutsche Feste.", icon: "\u{1F384}", isLocked: true },
  { id: "t26", level: "A2", order: 11, titleDe: "Bank und Finanzen", titleUz: "Bank va moliya", description: "Konto eroeffnen, ueberweisen, Geld abheben.", icon: "\u{1F3E6}", isLocked: true },
  { id: "t27", level: "A2", order: 12, titleDe: "Post und Behoerden", titleUz: "Pochta va davlat idoralari", description: "Pakete schicken, Formulare ausfuellen, Amt besuchen.", icon: "\u{1F4EC}", isLocked: true },
  { id: "t28", level: "A2", order: 13, titleDe: "Kueche und Kochen", titleUz: "Oshxona va pishirish", description: "Rezepte lesen und schreiben, Zutaten nennen.", icon: "\u{1F468}\u200D\u{1F373}", isLocked: true },
  { id: "t29", level: "A2", order: 14, titleDe: "Musik und Kunst", titleUz: "Musiqa va san\u0027at", description: "Musikinstrumente, Kunstrichtungen, Konzertbesuch.", icon: "\u{1F3B5}", isLocked: true },
  { id: "t30", level: "A2", order: 15, titleDe: "Vergangenheit erzaehlen", titleUz: "O\u0027tgan haqida gapirish", description: "Perfekt und Praeteritum - Erlebnisse erzaehlen.", icon: "\u{1F4D6}", isLocked: true },

  // B1
  { id: "t31", level: "B1", order: 1, titleDe: "Arbeit und Bewerbung", titleUz: "Ish va ariza", description: "Lebenslauf schreiben, Vorstellungsgespraech, Arbeitssuche.", icon: "\u{1F4CB}", isLocked: false },
  { id: "t32", level: "B1", order: 2, titleDe: "Ausbildung und Studium", titleUz: "Ta\u0027lim va o\u0027qish", description: "Deutsches Bildungssystem, Ausbildung vs. Studium.", icon: "\u{1F393}", isLocked: true },
  { id: "t33", level: "B1", order: 3, titleDe: "Gesellschaft und Politik", titleUz: "Jamiyat va siyosat", description: "Demokratie, Wahlen, aktuelle Themen diskutieren.", icon: "\u{1F3DB}\u{FE0F}", isLocked: true },
  { id: "t34", level: "B1", order: 4, titleDe: "Technologie und Internet", titleUz: "Texnologiya va internet", description: "Digitale Welt, Apps, soziale Netzwerke auf Deutsch.", icon: "\u{1F4BB}", isLocked: true },
  { id: "t35", level: "B1", order: 5, titleDe: "Umwelt und Klimawandel", titleUz: "Atrof-muhit va iqlim o\u0027zgarishi", description: "Nachhaltigkeit, Recycling, globale Erwaermung.", icon: "\u{1F30D}", isLocked: true },
  { id: "t36", level: "B1", order: 6, titleDe: "Medizin und Wissenschaft", titleUz: "Tibbiyot va fan", description: "Medizinische Fachbegriffe, Forschung, Innovation.", icon: "\u{1F52C}", isLocked: true },
  { id: "t37", level: "B1", order: 7, titleDe: "Recht und Gesetz", titleUz: "Qonun va huquq", description: "Grundrechte, Vertraege, Rechte und Pflichten in Deutschland.", icon: "\u{2696}\u{FE0F}", isLocked: true },
  { id: "t38", level: "B1", order: 8, titleDe: "Wirtschaft und Handel", titleUz: "Iqtisodiyot va savdo", description: "Grundbegriffe der Wirtschaft, Import/Export, Markt.", icon: "\u{1F4C8}", isLocked: true },
  { id: "t39", level: "B1", order: 9, titleDe: "Geschichte Deutschlands", titleUz: "Germaniya tarixi", description: "Wichtige Ereignisse der deutschen Geschichte verstehen.", icon: "\u{1F3F0}", isLocked: true },
  { id: "t40", level: "B1", order: 10, titleDe: "Interkulturelle Kommunikation", titleUz: "Madaniyatlararo muloqot", description: "Kulturunterschiede, Missverstaendnisse vermeiden.", icon: "\u{1F310}", isLocked: true },
  { id: "t41", level: "B1", order: 11, titleDe: "Wohnungsprobleme loesen", titleUz: "Uy-joy muammolarini hal qilish", description: "Beschwerden beim Vermieter, Nebenkostenabrechnung.", icon: "\u{1F527}", isLocked: true },
  { id: "t42", level: "B1", order: 12, titleDe: "Medien und Nachrichten", titleUz: "Media va yangiliklar", description: "Zeitung lesen, Radio hoeren, Fake News erkennen.", icon: "\u{1F4F0}", isLocked: true },
  { id: "t43", level: "B1", order: 13, titleDe: "Redewendungen und Idiome", titleUz: "Iboralar va frazeologizmlar", description: "Haeufige deutsche Redewendungen verstehen und nutzen.", icon: "\u{1F4AC}", isLocked: true },
  { id: "t44", level: "B1", order: 14, titleDe: "Literatur und Lesen", titleUz: "Adabiyot va o\u0027qish", description: "Deutsche Autoren, Buchbesprechungen, Leseverstehen.", icon: "\u{1F4DA}", isLocked: true },
  { id: "t45", level: "B1", order: 15, titleDe: "Meinung ausdruecken", titleUz: "Fikr bildirish", description: "Zustimmen, widersprechen, Argumente formulieren.", icon: "\u{1F5E3}\u{FE0F}", isLocked: true },

  // B2
  { id: "t46", level: "B2", order: 1, titleDe: "Akademisches Schreiben", titleUz: "Akademik yozuv", description: "Hausarbeit, Essay, wissenschaftliche Texte strukturieren.", icon: "\u{270D}\u{FE0F}", isLocked: false },
  { id: "t47", level: "B2", order: 2, titleDe: "Wirtschaftsdeutsch", titleUz: "Biznes nemis tili", description: "Geschaeftsbriefe, Praesentationen, Verhandlungen auf Deutsch.", icon: "\u{1F91D}", isLocked: true },
  { id: "t48", level: "B2", order: 3, titleDe: "Philosophie und Ethik", titleUz: "Falsafa va etika", description: "Kantische Ethik, moralische Fragen auf Deutsch diskutieren.", icon: "\u{1F9E0}", isLocked: true },
  { id: "t49", level: "B2", order: 4, titleDe: "Komplexe Grammatik", titleUz: "Murakkab grammatika", description: "Konjunktiv II, Passiv, Relativsaetze und mehr.", icon: "\u{1F4D0}", isLocked: true },
  { id: "t50", level: "B2", order: 5, titleDe: "Kultur und Identitaet", titleUz: "Madaniyat va identitet", description: "Deutsche Kultur, nationale Identitaet, Integration.", icon: "\u{1F3AD}", isLocked: true },
];

export function getTopicsByLevel(level: string): typeof TOPICS {
  return TOPICS.filter((t) => t.level === level);
}
