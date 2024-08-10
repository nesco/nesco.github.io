export interface Option {
  value: string;
  label: string;
}

export const allDiseases: Option[] = [
  { value: "parkinson", label: "Parkinson" },
  { value: "covid19", label: "Covid 19" },
];

export const allAims: Option[] = [
  { value: "prevention", label: "Prevention" },
  { value: "protection", label: "Protection" },
  {
    value: "symptom_management",
    label: "Symptom Management",
  },
  { value: "cure", label: "Cure" },
];

export const diseaseAims: Record<string, string[]> = {
  parkinson: ["symptom_management", "protection"],
  covid19: ["prevention"],
};

export interface Compound {
  name: string;
  companies: string[];
}

export interface Category {
  name: string;
  compounds: Compound[];
}

export interface PharmaPlan {
  disease: string;
  aim: string;
  categories: Category[];
}

export const pharmacologicalPlans: PharmaPlan[] = [
  {
    disease: "parkinson",
    aim: "symptom_management",
    categories: [
      {
        name: "Dopaminergic therapies",
        compounds: [
          {
            name: "MAO-B inhibitors",
            companies: [
              "Teva: Azilect/rasagilin",
              "Teikoku Pharma: TPU-002RA/rasagiline",
              "Teva/Valeant: Zelapar",
            ],
          },
          // Add more compounds...
        ],
      },
      {
        name: "Surgical procedures",
        compounds: [
          {
            name: "AAV2 delivery of AADC",
            companies: ["Sanofi/Voyager: VY-AADC01/AAV-hAADC"],
          },
          {
            name: "Lentiviral delivery of AADC+TH+CH1",
            companies: ["Oxford BioMedica: ProSavin/OXB-102"],
          },
          // Add more compounds...
        ],
      },
      {
        name: "Levodopa",
        compounds: [
          {
            name: "Amantadine",
            companies: ["Adamas: Nurelin", "Osmotica: Osmolex"],
          },
          {
            name: "Glutamate receptor modulators",
            companies: [
              "Addex Therapeutics: ADX48621/dipraglurant-IR",
              "Otsuka: Nuedexta",
              "Neurim: Neu-240",
            ],
          },
          // Add compounds...
        ],
      },
    ],
  },
  {
    disease: "parkinson",
    aim: "protection",
    categories: [
      {
        name: "Neurone protection: cell transplantation",
        compounds: [
          {
            name: "Fetal neural precursor",
            companies: ["TRANSEURO: fetal dopaminergic cells"],
          },
          {
            name: "Dopamine neurons precursors",
            companies: ["Memorial Sloan Kettering Cancer Center"],
          },
          {
            name: "Modified stromal cells",
            companies: [
              "BrainStorm Cell Therapeutics: NurOwn/MSC-NTF",
              "SanBio: SB623/Notch-MSCs",
            ],
          },
        ],
      },
      {
        name: "Target alpha-synucleion aggregates",
        compounds: [
          {
            name: "targeted oligonucleotides",
            companies: ["nLife Therapeutics: NLF-PD-1233"],
          },
          {
            name: "Monoclonal antibodies",
            companies: [
              "Prothena/Roche: PRX002",
              "Biogen/Neurimmune: BIIB054",
              "AbbVie/BioArctic: BAN0805",
              "Lundbeck",
            ],
          },
          {
            name: "α-synuclein vaccine",
            companies: ["AFFiRiS: PD01A", "AFFiRiS: PD03A"],
          },
        ],
      },
    ],
  },
  {
    disease: "covid19",
    aim: "prevention",
    categories: [
      {
        name: "mRNA vaccines",
        compounds: [
          {
            name: "Modified mRNA",
            companies: ["BioNTech/Pfizer: BNT162", "Moderna/Lonza: mRNA-1273"],
          },
          {
            name: "Self-replicating mRNA",
            companies: [
              "GSK",
              "Arcturus Therapeutics/Duke University",
              "HDT Bio/Gennova",
            ],
          },
        ],
      },
      {
        name: "Conventional programs",
        compounds: [
          {
            name: "Inactivated virus",
            companies: [
              "Bharat Biotech International/Ocugen: Covaxin",
              "Valneva: VLA2001",
            ],
          },
          {
            name: "Truncated Spike proteins",
            companies: [
              "Medigen/NIAID/Dynavax: MVC-COV1901",
              "Vaxxinity: UB-612",
              "SK Bioscience: GBP510",
              "Sanofi + BARDA",
            ],
          },
          {
            name: "Spike within VLP",
            companies: [
              "Icosavax: IVX-411",
              "iBio: IBIO-201",
              "Medicago/Mitsubishi Tanabe",
            ],
          },
        ],
      },
    ],
  },
  // Add more plans...
];

export const colors = {
  primary: "#1890ff",
  secondary: "#69c0ff",
  background: "#ffffff",
  text: "#003366",
  border: "#d9d9d9",
  lightBackground: "#f5f5f5",
};

export const theme = {
  token: {
    colorPrimary: colors.primary,
    colorBgContainer: colors.background,
    colorBorder: colors.border,
    colorText: colors.text,
  },
};
