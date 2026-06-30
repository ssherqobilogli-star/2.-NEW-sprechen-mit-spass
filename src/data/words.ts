import type { Word } from '../types';

export const WORDS: Word[] = [
  // A1 - Begruessung
  { id: "w1", german: "Hallo", article: undefined, uzbek: "Salom", pronunciation: "HA-lo", example: "Hallo, wie geht es dir?", exampleUz: "Salom, qandaysan?", level: "A1", topic: "Begruessung", category: "Ausdruck" },
  { id: "w2", german: "Guten Morgen", article: undefined, uzbek: "Xayrli tong", pronunciation: "GUU-ten MOR-gen", example: "Guten Morgen! Wie spaet ist es?", exampleUz: "Xayrli tong! Soat nechada?", level: "A1", topic: "Begruessung", category: "Ausdruck" },
  { id: "w3", german: "Tschuess", article: undefined, uzbek: "Xayr", pronunciation: "CHUESS", example: "Tschuess! Bis morgen.", exampleUz: "Xayr! Ertaga ko\u0027rishamiz.", level: "A1", topic: "Begruessung", category: "Ausdruck" },
  { id: "w4", german: "Danke", article: undefined, uzbek: "Rahmat", pronunciation: "DAN-ke", example: "Danke fuer deine Hilfe.", exampleUz: "Yordaming uchun rahmat.", level: "A1", topic: "Begruessung", category: "Ausdruck" },
  { id: "w5", german: "Bitte", article: undefined, uzbek: "Iltimos", pronunciation: "BI-te", example: "Kannst du mir bitte helfen?", exampleUz: "Menga yordam bera olasanmi, iltimos?", level: "A1", topic: "Begruessung", category: "Ausdruck" },
  { id: "w6", german: "Name", article: "der", uzbek: "Ism", pronunciation: "NAA-me", example: "Wie ist dein Name?", exampleUz: "Isming nima?", level: "A1", topic: "Begruessung", category: "Nomen" },

  // A1 - Familie
  { id: "w7", german: "Mutter", article: "die", uzbek: "Ona", pronunciation: "MU-ter", example: "Meine Mutter kocht sehr gut.", exampleUz: "Onam juda yaxshi pishiradi.", level: "A1", topic: "Familie", category: "Nomen" },
  { id: "w8", german: "Vater", article: "der", uzbek: "Ota", pronunciation: "FAA-ter", example: "Mein Vater arbeitet im Buero.", exampleUz: "Otam ofisda ishlaydi.", level: "A1", topic: "Familie", category: "Nomen" },
  { id: "w9", german: "Kind", article: "das", uzbek: "Bola", pronunciation: "KINT", example: "Das Kind spielt im Garten.", exampleUz: "Bola bog\u0027da o\u0027ynaydi.", level: "A1", topic: "Familie", category: "Nomen" },
  { id: "w10", german: "Bruder", article: "der", uzbek: "Aka / Uka", pronunciation: "BRUU-der", example: "Mein Bruder ist fuenf Jahre alt.", exampleUz: "Ukam besh yoshda.", level: "A1", topic: "Familie", category: "Nomen" },
  { id: "w11", german: "Schwester", article: "die", uzbek: "Opa / Singil", pronunciation: "SHVES-ter", example: "Meine Schwester heisst Anna.", exampleUz: "Singlimning ismi Anna.", level: "A1", topic: "Familie", category: "Nomen" },
  { id: "w12", german: "Familie", article: "die", uzbek: "Oila", pronunciation: "fa-MEE-lie", example: "Ich liebe meine Familie.", exampleUz: "Men oilamni sevaman.", level: "A1", topic: "Familie", category: "Nomen" },

  // A1 - Essen
  { id: "w13", german: "Brot", article: "das", uzbek: "Non", pronunciation: "BROOT", example: "Ich esse jeden Morgen Brot.", exampleUz: "Men har kuni ertalab non yeyman.", level: "A1", topic: "Essen", category: "Nomen" },
  { id: "w14", german: "Wasser", article: "das", uzbek: "Suv", pronunciation: "VAS-ser", example: "Ich trinke viel Wasser.", exampleUz: "Men ko\u0027p suv ichaman.", level: "A1", topic: "Essen", category: "Nomen" },
  { id: "w15", german: "Milch", article: "die", uzbek: "Sut", pronunciation: "MILCH", example: "Kinder trinken gern Milch.", exampleUz: "Bolalar sut ichishni yaxshi ko\u0027rishadi.", level: "A1", topic: "Essen", category: "Nomen" },
  { id: "w16", german: "Apfel", article: "der", uzbek: "Olma", pronunciation: "AP-fel", example: "Der Apfel ist rot und suess.", exampleUz: "Olma qizil va shirin.", level: "A1", topic: "Essen", category: "Nomen" },
  { id: "w17", german: "Fleisch", article: "das", uzbek: "Go\u0027sht", pronunciation: "FLYSH", example: "Ich esse gern Fleisch.", exampleUz: "Men go\u0027sht yeyishni yaxshi ko\u0027raman.", level: "A1", topic: "Essen", category: "Nomen" },
  { id: "w18", german: "Ei", article: "das", uzbek: "Tuxum", pronunciation: "AY", example: "Ich esse zum Fruehstueck ein Ei.", exampleUz: "Nonushtada bitta tuxum yeyman.", level: "A1", topic: "Essen", category: "Nomen" },

  // A1 - Farben
  { id: "w19", german: "rot", article: undefined, uzbek: "qizil", pronunciation: "ROOT", example: "Das Auto ist rot.", exampleUz: "Mashina qizil.", level: "A1", topic: "Farben", category: "Adjektiv" },
  { id: "w20", german: "blau", article: undefined, uzbek: "ko\u0027k", pronunciation: "BLOW", example: "Der Himmel ist blau.", exampleUz: "Osmon ko\u0027k.", level: "A1", topic: "Farben", category: "Adjektiv" },
  { id: "w21", german: "gruen", article: undefined, uzbek: "yashil", pronunciation: "GRUEN", example: "Das Gras ist gruen.", exampleUz: "O\u0027t yashil.", level: "A1", topic: "Farben", category: "Adjektiv" },
  { id: "w22", german: "gelb", article: undefined, uzbek: "sariq", pronunciation: "GELP", example: "Die Banane ist gelb.", exampleUz: "Banan sariq.", level: "A1", topic: "Farben", category: "Adjektiv" },
  { id: "w23", german: "schwarz", article: undefined, uzbek: "qora", pronunciation: "SHVARTS", example: "Die Katze ist schwarz.", exampleUz: "Mushuk qora.", level: "A1", topic: "Farben", category: "Adjektiv" },
  { id: "w24", german: "weiss", article: undefined, uzbek: "oq", pronunciation: "VAYS", example: "Der Schnee ist weiss.", exampleUz: "Qor oq.", level: "A1", topic: "Farben", category: "Adjektiv" },

  // A1 - Zahlen
  { id: "w25", german: "eins", article: undefined, uzbek: "bir", pronunciation: "AYNS", example: "Ich habe nur eins.", exampleUz: "Menda faqat bittasi bor.", level: "A1", topic: "Zahlen", category: "Zahl" },
  { id: "w26", german: "zwei", article: undefined, uzbek: "ikki", pronunciation: "TSVAY", example: "Ich habe zwei Brueder.", exampleUz: "Menda ikkita aka-uka bor.", level: "A1", topic: "Zahlen", category: "Zahl" },
  { id: "w27", german: "drei", article: undefined, uzbek: "uch", pronunciation: "DRAY", example: "Drei plus zwei ist fuenf.", exampleUz: "Uch qo\u0027shib ikki besh.", level: "A1", topic: "Zahlen", category: "Zahl" },
  { id: "w28", german: "zehn", article: undefined, uzbek: "o\u0027n", pronunciation: "TSEYN", example: "Ich bin zehn Jahre alt.", exampleUz: "Men o\u0027n yoshdaman.", level: "A1", topic: "Zahlen", category: "Zahl" },
  { id: "w29", german: "hundert", article: undefined, uzbek: "yuz", pronunciation: "HUN-dert", example: "Das kostet hundert Euro.", exampleUz: "Bu yuz evro turadi.", level: "A1", topic: "Zahlen", category: "Zahl" },
  { id: "w30", german: "Nummer", article: "die", uzbek: "Raqam", pronunciation: "NU-mer", example: "Was ist deine Telefonnummer?", exampleUz: "Telefon raqaming nima?", level: "A1", topic: "Zahlen", category: "Nomen" },

  // A1 - Tiere
  { id: "w31", german: "Hund", article: "der", uzbek: "It", pronunciation: "HUNT", example: "Der Hund bellt laut.", exampleUz: "It baland ovozda vovullaydi.", level: "A1", topic: "Tiere", category: "Nomen" },
  { id: "w32", german: "Katze", article: "die", uzbek: "Mushuk", pronunciation: "KAT-se", example: "Die Katze schlaeft auf dem Sofa.", exampleUz: "Mushuk divanida uxlaydi.", level: "A1", topic: "Tiere", category: "Nomen" },
  { id: "w33", german: "Vogel", article: "der", uzbek: "Qush", pronunciation: "FOO-gel", example: "Der Vogel singt am Morgen.", exampleUz: "Qush ertalab sayraydi.", level: "A1", topic: "Tiere", category: "Nomen" },
  { id: "w34", german: "Fisch", article: "der", uzbek: "Baliq", pronunciation: "FISH", example: "Der Fisch schwimmt im Wasser.", exampleUz: "Baliq suvda suzadi.", level: "A1", topic: "Tiere", category: "Nomen" },
  { id: "w35", german: "Pferd", article: "das", uzbek: "Ot", pronunciation: "PFERT", example: "Das Pferd laeuft sehr schnell.", exampleUz: "Ot juda tez yuguradi.", level: "A1", topic: "Tiere", category: "Nomen" },
  { id: "w36", german: "Kuh", article: "die", uzbek: "Sigir", pronunciation: "KUU", example: "Die Kuh gibt uns Milch.", exampleUz: "Sigir bizga sut beradi.", level: "A1", topic: "Tiere", category: "Nomen" },

  // A1 - Koerper
  { id: "w37", german: "Kopf", article: "der", uzbek: "Bosh", pronunciation: "KOPF", example: "Mein Kopf tut weh.", exampleUz: "Boshim og\u0027riydi.", level: "A1", topic: "Koerper", category: "Nomen" },
  { id: "w38", german: "Hand", article: "die", uzbek: "Qo\u0027l", pronunciation: "HANT", example: "Ich wasche meine Haende.", exampleUz: "Men qo\u0027llarimni yuvaman.", level: "A1", topic: "Koerper", category: "Nomen" },
  { id: "w39", german: "Auge", article: "das", uzbek: "Ko\u0027z", pronunciation: "OW-ge", example: "Sie hat blaue Augen.", exampleUz: "Uning ko\u0027zlari ko\u0027k.", level: "A1", topic: "Koerper", category: "Nomen" },
  { id: "w40", german: "Mund", article: "der", uzbek: "Og\u0027iz", pronunciation: "MUNT", example: "Ich putze jeden Tag die Zaehne.", exampleUz: "Men har kuni tishlarimni tozalayman.", level: "A1", topic: "Koerper", category: "Nomen" },
  { id: "w41", german: "Nase", article: "die", uzbek: "Burun", pronunciation: "NAA-ze", example: "Die Nase ist kalt.", exampleUz: "Burun sovuq.", level: "A1", topic: "Koerper", category: "Nomen" },
  { id: "w42", german: "Ohr", article: "das", uzbek: "Quloq", pronunciation: "OOR", example: "Ich hoere mit den Ohren.", exampleUz: "Men quloqlarim bilan eshitaman.", level: "A1", topic: "Koerper", category: "Nomen" },

  // A1 - Kleidung
  { id: "w43", german: "Hemd", article: "das", uzbek: "Ko\u0027ylak (erkaklar)", pronunciation: "HEMT", example: "Er traegt ein weisses Hemd.", exampleUz: "U oq ko\u0027ylak kiygan.", level: "A1", topic: "Kleidung", category: "Nomen" },
  { id: "w44", german: "Hose", article: "die", uzbek: "Shim", pronunciation: "HOO-ze", example: "Die Hose ist zu gross.", exampleUz: "Shim juda katta.", level: "A1", topic: "Kleidung", category: "Nomen" },
  { id: "w45", german: "Schuhe", article: undefined, uzbek: "Poyabzal", pronunciation: "SHUU-e", example: "Meine Schuhe sind neu.", exampleUz: "Mening poyabzallarim yangi.", level: "A1", topic: "Kleidung", category: "Nomen" },
  { id: "w46", german: "Jacke", article: "die", uzbek: "Jacket / Kurta", pronunciation: "YAK-ke", example: "Ich trage eine warme Jacke.", exampleUz: "Men iliq kurtka kiyaman.", level: "A1", topic: "Kleidung", category: "Nomen" },
  { id: "w47", german: "Hut", article: "der", uzbek: "Shlyapa", pronunciation: "HUUT", example: "Der Hut ist sehr schoen.", exampleUz: "Shlyapa juda chiroyli.", level: "A1", topic: "Kleidung", category: "Nomen" },
  { id: "w48", german: "Kleid", article: "das", uzbek: "Ko\u0027ylak (ayollar)", pronunciation: "KLAYT", example: "Das Kleid ist blau.", exampleUz: "Ko\u0027ylak ko\u0027k.", level: "A1", topic: "Kleidung", category: "Nomen" },

  // A1 - Wetter
  { id: "w49", german: "Sonne", article: "die", uzbek: "Quyosh", pronunciation: "ZO-ne", example: "Die Sonne scheint.", exampleUz: "Quyosh nur sochmoqda.", level: "A1", topic: "Wetter", category: "Nomen" },
  { id: "w50", german: "Regen", article: "der", uzbek: "Yomgir", pronunciation: "RAY-gen", example: "Der Regen faellt stark.", exampleUz: "Yomgir kuchli yogyapti.", level: "A1", topic: "Wetter", category: "Nomen" },
  { id: "w51", german: "Schnee", article: "der", uzbek: "Qor", pronunciation: "SHNAY", example: "Der Schnee ist weiss.", exampleUz: "Qor oq.", level: "A1", topic: "Wetter", category: "Nomen" },
  { id: "w52", german: "Wind", article: "der", uzbek: "Shamol", pronunciation: "VINT", example: "Der Wind ist kalt.", exampleUz: "Shamol sovuq.", level: "A1", topic: "Wetter", category: "Nomen" },
  { id: "w53", german: "warm", article: undefined, uzbek: "iliq", pronunciation: "VARM", example: "Heute ist es warm.", exampleUz: "Bugun havo iliq.", level: "A1", topic: "Wetter", category: "Adjektiv" },
  { id: "w54", german: "kalt", article: undefined, uzbek: "sovuq", pronunciation: "KALT", example: "Im Winter ist es kalt.", exampleUz: "Qishda sovuq.", level: "A1", topic: "Wetter", category: "Adjektiv" },

  // A1 - Transport
  { id: "w55", german: "Auto", article: "das", uzbek: "Mashina", pronunciation: "AW-to", example: "Ich fahre mit dem Auto.", exampleUz: "Men mashinada boraman.", level: "A1", topic: "Transport", category: "Nomen" },
  { id: "w56", german: "Bus", article: "der", uzbek: "Avtobus", pronunciation: "BUS", example: "Der Bus kommt in 5 Minuten.", exampleUz: "Avtobus 5 daqiqada keladi.", level: "A1", topic: "Transport", category: "Nomen" },
  { id: "w57", german: "Zug", article: "der", uzbek: "Poyezd", pronunciation: "TSUUK", example: "Der Zug ist puenktlich.", exampleUz: "Poyezd o\u0027z vaqtida.", level: "A1", topic: "Transport", category: "Nomen" },
  { id: "w58", german: "Flugzeug", article: "das", uzbek: "Samolyot", pronunciation: "FLUUK-tsoyk", example: "Das Flugzeug fliegt nach Berlin.", exampleUz: "Samolyot Berlinga uchmoqda.", level: "A1", topic: "Transport", category: "Nomen" },
  { id: "w59", german: "Fahrrad", article: "das", uzbek: "Velosiped", pronunciation: "FAA-rat", example: "Ich fahre gern Fahrrad.", exampleUz: "Men velosiped minishni yaxshi ko\u0027raman.", level: "A1", topic: "Transport", category: "Nomen" },
  { id: "w60", german: "Strasse", article: "die", uzbek: "Ko\u0027cha", pronunciation: "SHTAS-se", example: "Die Strasse ist breit.", exampleUz: "Ko\u0027cha keng.", level: "A1", topic: "Transport", category: "Nomen" },
];

export function getWordsByLevel(level: string): Word[] {
  return WORDS.filter((w) => w.level === level);
}

export function getWordsByTopic(topic: string): Word[] {
  return WORDS.filter((w) => w.topic === topic);
}

export function getRandomWords(count: number, level?: string): Word[] {
  const pool = level ? WORDS.filter((w) => w.level === level) : [...WORDS];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
