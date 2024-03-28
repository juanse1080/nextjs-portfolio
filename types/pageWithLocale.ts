import { Locale } from "./i18n";

export type PageParams<T extends Record<string, unknown> = {}> = {
  params: { lang: Locale };
} & T;
