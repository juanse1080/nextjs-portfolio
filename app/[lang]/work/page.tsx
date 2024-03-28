import { Typography } from "@portfolio/components";
import { getDictionary } from "@portfolio/get-dictionary";
import { PageParams } from "@portfolio/types";

export type WorkTransactionType = {
  title: string[];
  subtitle: string[];
};

export default async function WorkPage({
  params: { lang },
}: Readonly<PageParams>) {
  const { title, subtitle } = await getDictionary<WorkTransactionType>(
    lang,
    "work"
  );

  return (
    <div className="h-full flex flex-col justify-between gap-5 2xl:py-20  lg:py-10 md:py-8 py-5">
      <div />
      <Typography
        component="h1"
        variant="title"
        className="text-center flex flex-col items-center gap-5"
      >
        <span>{title[0]}</span>
        <span>{title[1]}</span>
      </Typography>

      <Typography
        variant="body"
        className="text-center flex flex-col items-center"
      >
        <span>{subtitle[0]}</span>
        <span>{subtitle[1]}</span>
      </Typography>
    </div>
  );
}
