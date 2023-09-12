export interface Continent {
    code: string;
    name: string;
  }
  export interface Country {
    name: string;
    code: string;
    emoji: string;
    emojiU: string;
    capital: string;
    languages: {
      code: string;
      name: string;
      native: string;
      rtl: boolean;
    }[];
    continent: {
      name: string;
      code: string;
    };
  }