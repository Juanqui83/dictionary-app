// dictionary.ts
export interface WordTranslations {
    es: string;
    en: string;
    pt: string;
  }
  
  export interface Dictionary {
    [key: string]: WordTranslations; // Permite que cualquier string se use como clave
  }
  