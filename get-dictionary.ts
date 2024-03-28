import { CommonType, Locale } from "@portfolio/types";
import "server-only";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = <T extends Record<string, any>>(
  locale: Locale,
  page?: string
): Promise<{ common: CommonType } & T> => {
  const translations = [
    import(`./dictionaries/${locale}/common.json`).then(
      (module) => module.default
    ),
  ];

  if (page)
    translations.push(
      import(`./dictionaries/${locale}/${page}.json`).then(
        (module) => module.default
      )
    );

  return Promise.all(translations).then(([common, ...others]) => {
    if (!page) return { common };

    return {
      common,
      ...others[0],
    };
  });
};

export const getDictionary = async <
  T extends Record<string, any> = Record<string, any>
>(
  locale: Locale,
  page?: string
) => dictionaries<T>(locale, page) ?? dictionaries<T>("en", page);
