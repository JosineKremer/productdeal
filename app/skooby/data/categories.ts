// Skooby-categorieën: metadata + gegroepeerde subcategorieën voor het mega-menu.

export interface MenuGroup {
  title: string;
  items?: string[];
  more?: boolean;
}

export interface Category {
  label: string;
  icon: string;
  count: string;
  href: string;
  featured?: boolean; // getoond in de "populaire uitgelichte categorieën" in de header
  groups: MenuGroup[];
}

export const CATEGORIES: Category[] = [
  {
    label: "Honden", icon: "🐕", count: "9.547", href: "#", featured: true,
    groups: [
      { title: "Manden & Kussens", items: ["Hondenmanden", "Hondenkussens", "Hondenmatten", "Hondendekens", "Kussenhoezen"], more: true },
      { title: "Voer- & Drinkbakken", items: ["Voerbakken", "Drinkbakken", "Drinkflessen", "Voerautomaten", "Drinkfonteinen"], more: true },
      { title: "Benches" },
      { title: "Trainingshulpen", items: ["Zindelijkheidstraining", "Clickertraining"] },
      { title: "Hondenspeelgoed", items: ["Kauwspeelgoed", "Knuffels", "Ballen", "Apporteerspeelgoed", "Behendigheidsspeelgoed"], more: true },
      { title: "Onderweg", items: ["Draagtassen", "Autobenches", "Poepzakjes", "Autorekken", "Reiskennels"], more: true },
      { title: "Hondenhokken" },
      { title: "Halsbanden & Penningen", items: ["Hondenhalsbanden", "Penningen"] },
      { title: "Hondensnacks", items: ["Kauwstaven", "Gedroogd vlees", "Koekjes", "Botten", "Sticks"], more: true },
      { title: "Hondenverzorging", items: ["Vacht- & Pootverzorging", "Gebitsverzorging", "Nappies"] },
      { title: "Hondencadeaus" },
      { title: "Hondenvoer", items: ["Droogvoer", "Natvoer", "Vers vlees", "Puppy"] },
      { title: "Reflectie & Verlichting", items: ["Riemen", "Halsbanden", "Verlichting", "Vesten"] },
      { title: "Gezondheid", items: ["Huiden & Vachten", "Vlooien & Teken", "Weerstand", "Antistressmiddelen", "Ontwormingsmiddelen"], more: true },
      { title: "Riemen & Accessoires", items: ["Hondenriemen", "Riemaccessoires"] },
      { title: "Hondentuigjes" },
      { title: "Kleding & Accessoires", items: ["Jassen", "Regenjassen", "Broeken", "Shirts", "Bodywarmers"], more: true },
      { title: "Omheiningen & Luiken", items: ["Waakborden", "Hekken", "Luiken", "Omheiningssystemen", "Hondenkennel"] },
    ],
  },
  {
    label: "Katten", icon: "🐈", count: "2.975", href: "#", featured: true,
    groups: [
      { title: "Kattenvoer", items: ["Droogvoer", "Natvoer", "Vers vlees", "Kitten", "Senior"], more: true },
      { title: "Kattensnacks", items: ["Sticks", "Crunchy snacks", "Kattengras", "Malt"] },
      { title: "Kattenbak", items: ["Kattenbakken", "Kattenbakvulling", "Bakschepjes", "Geurcontrole"], more: true },
      { title: "Krabpalen", items: ["Krabpalen", "Krabplanken", "Krabmeubels"] },
      { title: "Speelgoed", items: ["Hengels", "Balletjes", "Knuffels", "Kruidenspeelgoed"], more: true },
      { title: "Manden & Kussens", items: ["Kattenmanden", "Kussens", "Radiatorbedjes"] },
      { title: "Voer- & Drinkbakken", items: ["Voerbakken", "Drinkfonteinen", "Voerautomaten"] },
      { title: "Verzorging", items: ["Vachtverzorging", "Vlooien & Teken", "Ontwormen"] },
      { title: "Onderweg", items: ["Transportmanden", "Kattenluikjes"] },
      { title: "Gezondheid", items: ["Weerstand", "Urinewegen", "Hairball"], more: true },
    ],
  },
  {
    label: "Vissen", icon: "🐠", count: "1.389", href: "#", featured: true,
    groups: [
      { title: "Aquaria", items: ["Complete sets", "Nano-aquaria", "Aquariumkasten"], more: true },
      { title: "Techniek", items: ["Filters", "Verwarming", "Verlichting", "Luchtpompen", "CO₂"], more: true },
      { title: "Visvoer", items: ["Vlokken", "Granulaat", "Diepvriesvoer", "Bodemvoer"] },
      { title: "Waterverzorging", items: ["Waterconditioners", "Testsets", "Bacteriën", "Algenbestrijding"], more: true },
      { title: "Inrichting", items: ["Waterplanten", "Decoratie", "Grind & Zand", "Achterwanden"] },
      { title: "Vijver", items: ["Vijverpompen", "Vijverfilters", "Vijvervoer", "Vijverplanten"], more: true },
    ],
  },
  {
    label: "Binnenvogels", icon: "🦜", count: "122", href: "#",
    groups: [
      { title: "Vogelkooien", items: ["Kooien", "Volières", "Kooihoezen"] },
      { title: "Vogelvoer", items: ["Zaadmengsels", "Eivoer", "Krachtvoer", "Snacks"], more: true },
      { title: "Speelgoed", items: ["Zitstokken", "Schommels", "Spiegels", "Foerageerspeelgoed"] },
      { title: "Verzorging", items: ["Badjes", "Snavelverzorging", "Vitamines"] },
      { title: "Kooibenodigdheden", items: ["Voer- & drinkbakjes", "Kooibekleding", "Broedbenodigdheden"] },
    ],
  },
  {
    label: "Knaagdieren", icon: "🐹", count: "687", href: "#", featured: true,
    groups: [
      { title: "Kooien & Hokken", items: ["Kooien", "Terraria", "Uitloop & Ren"], more: true },
      { title: "Knaagdiervoer", items: ["Hoofdvoer", "Hooi", "Snacks", "Knaagstenen"], more: true },
      { title: "Bodembedekking", items: ["Bodemvulling", "Nestmateriaal"] },
      { title: "Speelgoed", items: ["Speelhuisjes", "Looprad", "Tunnels"] },
      { title: "Per diersoort", items: ["Hamster", "Cavia", "Muis & Rat", "Gerbil"] },
      { title: "Verzorging", items: ["Drinkflessen", "Voerbakjes", "Vachtverzorging"] },
    ],
  },
  {
    label: "Konijnen", icon: "🐇", count: "257", href: "#",
    groups: [
      { title: "Hokken & Rennen", items: ["Konijnenhokken", "Buitenrennen", "Binnenverblijf"], more: true },
      { title: "Konijnenvoer", items: ["Hoofdvoer", "Hooi", "Snacks", "Knaagstenen"] },
      { title: "Bodembedekking", items: ["Bodemvulling", "Nestmateriaal"] },
      { title: "Speelgoed", items: ["Tunnels", "Knaagspeelgoed", "Graafbakken"] },
      { title: "Verzorging", items: ["Drinkflessen", "Voerbakken", "Vachtverzorging", "Transportboxen"] },
    ],
  },
  {
    label: "Reptielen", icon: "🐢", count: "337", href: "#",
    groups: [
      { title: "Terraria", items: ["Glasterraria", "Terrariumkasten", "Gaasterraria"] },
      { title: "Klimaat & Verlichting", items: ["Warmtelampen", "UV-verlichting", "Thermostaten", "Thermometers"], more: true },
      { title: "Reptielenvoer", items: ["Levend voer", "Diepvriesvoer", "Pellets", "Supplementen"], more: true },
      { title: "Inrichting", items: ["Bodembedekking", "Schuilplaatsen", "Klimtakken", "Waterbakken"] },
      { title: "Per diersoort", items: ["Schildpad", "Slang", "Hagedis", "Gekko"] },
    ],
  },
  {
    label: "Boerderijdieren", icon: "🐴", count: "265", href: "#",
    groups: [
      { title: "Voer", items: ["Paardenvoer", "Schapenvoer", "Geitenvoer", "Hooi & Ruwvoer"], more: true },
      { title: "Stal & Weide", items: ["Afrastering", "Schrikdraad", "Drinkbakken", "Stalbenodigdheden"], more: true },
      { title: "Verzorging", items: ["Vachtverzorging", "Hoefverzorging", "Wondverzorging"] },
      { title: "Supplementen", items: ["Weerstand", "Mineralen", "Vitamines"] },
      { title: "Ruitersport", items: ["Zadels", "Hoofdstellen", "Dekens"] },
    ],
  },
  {
    label: "Kippen", icon: "🐓", count: "77", href: "#",
    groups: [
      { title: "Kippenhokken", items: ["Kippenhokken", "Legnesten", "Zitstokken"] },
      { title: "Kippenvoer", items: ["Legmeel", "Legkorrel", "Scharrelmix", "Kuikenvoer"], more: true },
      { title: "Ren & Uitloop", items: ["Kippenrennen", "Gaas", "Omheining"] },
      { title: "Drinken & Voeren", items: ["Drinktorens", "Voertorens", "Voerbakken"] },
      { title: "Gezondheid", items: ["Ontwormen", "Bloedluis", "Supplementen"] },
    ],
  },
  {
    label: "Tuindieren", icon: "🦔", count: "168", href: "#",
    groups: [
      { title: "Huisjes & Nestkasten", items: ["Egelhuisjes", "Vogelhuisjes", "Insectenhotels", "Nestkasten"], more: true },
      { title: "Voeren", items: ["Vogelvoer tuin", "Wildvoer", "Egelvoer", "Voedersilo's"], more: true },
      { title: "Vijver", items: ["Vijverpompen", "Vijverplanten", "Waterverzorging"] },
      { title: "Bescherming", items: ["Wildcamera's", "Afweer", "Winterhulp"] },
    ],
  },
];

// Categorieën die als "populaire uitgelichte categorieën" in de header verschijnen
export const FEATURED = CATEGORIES.filter((c) => c.featured);

// Echte categoriefoto's (public/skooby/categories/*.jpg)
export const SLUG: Record<string, string> = {
  Honden: "honden", Katten: "katten", Vissen: "vissen", Binnenvogels: "binnenvogels",
  Knaagdieren: "knaagdieren", Konijnen: "konijnen", Reptielen: "reptielen",
  Boerderijdieren: "boerderijdieren", Kippen: "kippen", Tuindieren: "tuindieren",
};
export const catImage = (label: string) => `/skooby/categories/${SLUG[label] ?? "honden"}.jpg`;
