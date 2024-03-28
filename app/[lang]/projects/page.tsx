import { getDictionary } from "@portfolio/get-dictionary";
import { PageParams } from "@portfolio/types";

export default async function IndexPage({ params: { lang } }: PageParams) {
  const dictionary = await getDictionary(lang, "projects");

  return null;
}
