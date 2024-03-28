export type Locale = "en" | "es";

export type i18nConfig = {
  defaultLocale: Locale;
  locales: Locale[];
};

export type CommonType = {
  appBar: Record<string, string>;
};
