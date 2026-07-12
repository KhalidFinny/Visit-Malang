export type CultureSlug =
  | "topeng-malangan"
  | "batik-malangan"
  | "jaranan"
  | "tari-beskalan"
  | "keramik-dinoyo"
  | "bantengan";

export interface CultureDecoration {
  palette: {
    primary: string;
    secondary: string;
    surface: string;
    text: string;
    muted: string;
  };
}

export interface CultureEntry {
  slug: CultureSlug;
  title: string;
  subtitle: string;
  era: string;
  origin: string;
  teaser: string;
  hook: string;
  content: string[];
  whereToExperience: string[];
  decoration: CultureDecoration;
  imageUrl?: string;
}
