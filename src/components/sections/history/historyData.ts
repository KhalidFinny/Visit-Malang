export type HistoryPeriodKey = "kingdoms" | "colonial" | "modern";
export type HistoryAccent = "sage" | "blush" | "stone";

export interface HistoryStory {
  slug: string;
  period: HistoryPeriodKey;
  year: string;
  place: string;
  title: string;
  teaser: string;
  hook: string;
  content: string[];
  imageUrl: string;
  accent: HistoryAccent;
}

export interface HistoryPeriod {
  key: HistoryPeriodKey;
  label: string;
  range: string;
  summary: string;
  accent: HistoryAccent;
}

export const HISTORY_PERIODS: HistoryPeriod[] = [
  {
    key: "kingdoms",
    label: "Kingdoms",
    range: "760 CE – 1292",
    summary: "The inscriptions, temples, dynasties, and royal politics that first anchored Malang in written history.",
    accent: "sage",
  },
  {
    key: "colonial",
    label: "Colonial City",
    range: "1767 – 1930s",
    summary: "From VOC power and railways to boulevards, civic planning, and the visual identity of highland Malang.",
    accent: "blush",
  },
  {
    key: "modern",
    label: "Republic & Living Culture",
    range: "1942 – Today",
    summary: "Occupation, independence, universities, faith communities, and the layered urban culture of modern Malang.",
    accent: "stone",
  },
];

export const HISTORY_STORIES: HistoryStory[] = [
  {
    slug: "kanjuruhan-dinoyo-and-candi-badut",
    period: "kingdoms",
    year: "760 CE",
    place: "Dinoyo · Candi Badut",
    title: "Kanjuruhan, Dinoyo, and the first written Malang",
    teaser: "The earliest documented Malang begins with the Dinoyo inscription and the sacred landscape around Candi Badut.",
    hook: "This is the chapter where Malang stops being legend and becomes written political history.",
    content: [
      "The earliest secure historical anchor for Malang is the Dinoyo inscription, dated 760 CE. Through it, the region enters the documentary world of early East Java under King Gajayana and the polity historians identify as Kanjuruhan. This matters because Malang’s past is not reconstructed only from folklore or later royal chronicles. It is supported by inscriptional evidence that ties the region to governance, sacred patronage, and an already organized settlement landscape.",
      "Candi Badut is the monument most closely tied to that early chapter. As the oldest surviving Hindu temple in East Java, it shows that Malang was already a ritual center long before boulevards, railways, or municipal planning arrived. The temple is important not simply because it is old, but because it proves that the region had entered a world of formal religion, political patronage, and architectural production far earlier than the colonial cityscape suggests.",
      "Taken together, the inscription and the temple show that Malang’s beginnings are rooted in sacred geography, organized kingship, and written memory. The city’s story begins not as a resort town or student hub, but as one of East Java’s earliest recorded centers of sacred and political power."
    ],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Candi_Badut_Malang.jpg",
    accent: "sage",
  },
  {
    slug: "tumapel-ken-arok-and-the-battle-of-ganter",
    period: "kingdoms",
    year: "1222 CE",
    place: "Tumapel · Battle of Ganter",
    title: "Tumapel, Ken Arok, and the political rise of Malang",
    teaser: "The rebellion that overturned Kediri made the Malang region central to one of Java’s best-known royal narratives.",
    hook: "This is the chapter where court intrigue and open conflict turn Malang into a source of dynastic power.",
    content: [
      "By the early thirteenth century, the Malang region had become more than a sacred hinterland. It was now central to a political realignment that would reshape East Java. The conflict surrounding Ken Arok, Ken Dedes, Tunggul Ametung, and the old Kediri order culminated in the Battle of Ganter in 1222. In later literature the episode became legendary, but its historical force was real: it shifted power toward Tumapel and gave the Malang area a direct role in state formation.",
      "What makes this chapter important is not only the personalities involved. It marks the moment when the Malang region moves from being a documented district into being a producer of dynastic history. The area is no longer just governed from elsewhere. It becomes the ground from which a new line of power emerges. That is why the name Tumapel matters so much in the city’s deep historical memory.",
      "Even where the later chronicles blur history with political myth, the broader fact remains: the Malang highlands were a decisive arena in the fall of one order and the birth of another. Tumapel is where Malang begins to shape the destiny of East Java instead of only receiving it."
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/56/Candi_Kidal_A.JPG",
    accent: "sage",
  },
  {
    slug: "singhasari-kertanegara-and-the-temples-of-memory",
    period: "kingdoms",
    year: "1254–1292",
    place: "Singhasari · Kidal · Jago",
    title: "Singhasari, Kertanegara, and the temples of royal memory",
    teaser: "Under Singhasari, Malang’s landscape became an archive of kingship, religion, and East Javanese ambition.",
    hook: "This is the chapter where politics, ancestor worship, and temple architecture are fused into one regional memory system.",
    content: [
      "When Tumapel evolved into Singhasari, Malang’s political significance deepened. Kings such as Wisnuwardhana and Kertanegara are remembered not only for rule and conquest, but for the temple landscape they left behind. Candi Singhasari, Kidal, and Jago are not separate curiosities. They are part of a larger world in which royal memory, political legitimacy, and religious devotion were materialized through architecture.",
      "This matters because the temples preserve more than decorative stonework. They preserve how power was imagined. Kidal’s associations with Anusapati, Jago’s link to Wisnuwardhana, and Singhasari’s relation to Kertanegara reveal a region where kingship was commemorated through sacred building. Malang was therefore not simply adjacent to the Singhasari story; it was one of the principal landscapes through which that story was performed and remembered.",
      "The medieval weight of Malang comes from this density. Few regions can still point to so many surviving monuments tied to one royal tradition. The result is that Singhasari remains one of the strongest reasons Malang can be read as a historical territory, not just a modern city."
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/15/Candi_Singosari_B.JPG",
    accent: "sage",
  },
  {
    slug: "railways-gemeente-and-the-colonial-highland-city",
    period: "colonial",
    year: "1767–1914",
    place: "VOC control · Railway · Gemeente",
    title: "Railways, administration, and the making of a colonial highland city",
    teaser: "Malang became a modern municipality through infrastructure, administration, and the economics of colonial expansion.",
    hook: "This is the chapter where climate becomes policy, and the highlands become a city.",
    content: [
      "Dutch influence in Malang deepened after the late eighteenth century, but the city’s transformation became most visible in the nineteenth. Colonial rule tied the highlands into plantation, transport, and administrative systems that gave the region new importance. Malang’s climate made it attractive to officials and planters, but climate alone does not create a city. Roads, railways, and institutions do.",
      "The opening of the railway in 1879 accelerated Malang’s growth dramatically. Trade moved faster, people moved faster, and the city became more legible to colonial administration as a place worth investing in. By 1914 Malang was formally designated a gemeente. That shift marks the transition from settlement growth into organized municipal development. The city was now being planned, financed, and governed through a modern civic structure.",
      "This chapter matters because it explains how Malang’s later elegance became possible. The boulevards, civic parks, and architectural identity of the early twentieth century were built on the back of this earlier infrastructure revolution."
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/84/Balai_Kota_Malang_2018.jpg",
    accent: "blush",
  },
  {
    slug: "balai-kota-ijen-and-the-civic-image-of-malang",
    period: "colonial",
    year: "1920s–1930s",
    place: "Balai Kota · Ijen · Tugu",
    title: "Balai Kota, Ijen, and the crafted civic image of Malang",
    teaser: "The city’s most beloved visual identity was designed, staged, and preserved through municipal planning.",
    hook: "This is the chapter where Malang becomes recognizable at a glance.",
    content: [
      "The most visually legible layer of Malang belongs to the early twentieth century, when urban planning produced boulevards, civic squares, and carefully composed districts. Balai Kota, Alun-Alun Bunder, and the Ijen corridor belong to the same municipal imagination: a green, orderly, and symbolically confident city. Architecture and public space were used together to produce a civic image rather than a random collection of buildings.",
      "This period is why Malang still feels distinct from many inland cities in Java. Its colonial layer survived not only in isolated monuments, but in whole urban relationships — sightlines, streets, parks, and formal institutions. The city center was staged to be memorable, and that staging still shapes how residents and visitors read Malang today.",
      "When people talk about Malang’s elegance or calm, they are often responding to this chapter. The city’s visual language was not accidental. It was built."
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Tugu_Malang.jpg",
    accent: "blush",
  },
  {
    slug: "occupation-revolution-and-the-republican-city",
    period: "modern",
    year: "1942–1949",
    place: "Tugu Malang · Monumen Juang 45",
    title: "Occupation, revolution, and the making of a republican city",
    teaser: "Behind Malang’s quiet civic core is a decade of occupation, conflict, and political return.",
    hook: "This is the chapter where the city’s public calm hides the memory of rupture and struggle.",
    content: [
      "The Japanese occupation broke the continuity of the colonial order and forced the city into a new political reality. After the proclamation of independence in 1945, Malang entered the Republic, then endured renewed Dutch occupation before finally returning to republican control in 1949. These years were not peripheral to the city’s identity. They were decisive in shaping how Malang would remember itself in the twentieth century.",
      "Monuments such as Tugu Malang and the memorial spaces around the civic center matter because they hold that memory in public form. They make the city’s central spaces more than picturesque landmarks. They mark sacrifice, uncertainty, and return. The story of independence in Malang is not only national; it is urban, local, and embedded in the landscape people still walk through every day.",
      "That is why the city center feels historical in more than one sense. It is not only colonial. It is also republican ground."
    ],
    imageUrl: "/tugu.webp",
    accent: "stone",
  },
  {
    slug: "student-city-and-the-layered-culture-of-modern-malang",
    period: "modern",
    year: "1950s–Today",
    place: "Great Mosque · Kayutangan · campus life",
    title: "Student city, layered faiths, and the living culture of modern Malang",
    teaser: "Modern Malang is strongest not because one era won, but because many layers remained visible together.",
    hook: "This is the chapter where campuses, worship spaces, heritage corridors, and tourism all share the same city rhythm.",
    content: [
      "In the decades after independence, Malang developed into one of Indonesia’s most recognizable student cities. Universities, boarding houses, bookshops, and neighborhood cafés changed the city’s tempo and demographics. The educational identity is not decorative branding — it affects housing, transport, street life, and the city’s intellectual atmosphere. Malang feels younger and more mobile because thousands of students continue to move through it every year.",
      "At the same time, modern Malang is not defined by campus life alone. Great Mosque courtyards, Chinese temples, neo-gothic churches, Kayutangan’s revived shopfronts, and routes toward Bromo all coexist inside one cultural field. What makes the city compelling today is that these layers remain legible together rather than being flattened into one single image of place.",
      "Modern Malang works because history is not sealed away in museums. It survives in prayer spaces, student districts, old corridors, and the everyday geography of the city itself."
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Front_Of_Great_Mosque_Jami_%27Malang.jpg",
    accent: "stone",
  },
];

export const HISTORY_ACCENTS: Record<
  HistoryAccent,
  {
    chip: string;
    bar: string;
    quote: string;
    hex: string;
    palette: {
      surface: string;
      surfaceHover: string;
      border: string;
      ink: string;
      highlight: string;
    };
    pattern: string;
  }
> = {
  sage: {
    chip: "bg-[#A3B18A]/16 border-[#A3B18A]/28 text-[#4a5e3a]",
    bar: "bg-[#A3B18A]",
    quote: "text-[#4a5e3a]",
    hex: "#4a5e3a",
    palette: {
      surface: "bg-[#eddfcf]",
      surfaceHover: "bg-[#e3d4c2]",
      border: "border-[#c4a882]/50",
      ink: "text-[#4a3f35]",
      highlight: "text-[#c4835a]",
    },
    pattern: "bg-[radial-gradient(#c4a882_1px,transparent_1px)] [background-size:20px_20px]",
  },
  blush: {
    chip: "bg-[#D6ADAD]/18 border-[#D6ADAD]/28 text-[#8a5a5a]",
    bar: "bg-[#D6ADAD]",
    quote: "text-[#8a5a5a]",
    hex: "#8a5a5a",
    palette: {
      surface: "bg-[#f0ebe6]",
      surfaceHover: "bg-[#ebe3db]",
      border: "border-[#d4c4b0]/50",
      ink: "text-[#2c4a3e]",
      highlight: "text-[#b8847a]",
    },
    pattern: "[background:repeating-linear-gradient(90deg,transparent,transparent_40px,#d4c4b0_40px,#d4c4b0_41px)]",
  },
  stone: {
    chip: "bg-[#1a1a1a]/8 border-[#1a1a1a]/14 text-[#1a1a1a]/68",
    bar: "bg-[#1a1a1a]/40",
    quote: "text-[#1a1a1a]",
    hex: "#1a1a1a",
    palette: {
      surface: "bg-[#f0f0eb]",
      surfaceHover: "bg-[#e8e8e0]",
      border: "border-black/[0.08]",
      ink: "text-[#1a1a1a]",
      highlight: "text-[#c46b4a]",
    },
    pattern: "bg-[radial-gradient(circle_at_40%_50%,#1a1a1a_0.5px,transparent_0.5px)] [background-size:24px_24px]",
  },
};
