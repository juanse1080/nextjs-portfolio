import { Typography } from "@portfolio/components";
import { getDictionary } from "@portfolio/get-dictionary";
import photo from "@portfolio/public/photo-transparent.png";
import { PageParams } from "@portfolio/types";
import Image from "next/image";

export type AboutTransactionType = {
  title: string;
  subtitle: string;
  content: string[];
};

export default async function AboutPage({
  params: { lang },
}: Readonly<PageParams>) {
  const { title, subtitle } = await getDictionary<AboutTransactionType>(
    lang,
    "about"
  );

  return (
    <div className="h-full grid lg:grid-rows-2 grid-rows-3 lg:grid-cols-3 grid-cols-1 gap-10">
      <div className="col-span-3 self-end">
        <Typography
          component="h1"
          variant="title"
          className="text-center font-light lg:my-28 my-5"
        >
          {title}
        </Typography>
      </div>
      <div className="col-span-3 lg:col-span-1 flex justify-center">
        <div className="overflow-hidden flex justify-center bg-red-300 rounded-t-lg md:rounded-t-full">
          <Image src={photo} alt="Profile" />
        </div>
      </div>
      <div className="col-span-3 md:col-span-2">
        <Typography
          component="h2"
          variant="subtitle"
          className="font-semibold text-3xl"
        >
          {subtitle}
        </Typography>
        <Typography className="mt-5" variant="body">
          Over the past 12+ years, I've worked in various areas of digital
          design, including front-end development, email, marketing, and app
          UI/UX. I'm proud to have worn many hats. These days, I focus on
          leading design at GiveDirectly, a nonprofit that lets donors send
          money directly to the world's poorest households.
        </Typography>
        <Typography className="mt-5" variant="body">
          These days, I focus on leading design at GiveDirectly, a nonprofit
          that lets donors send money directly to the world's poorest
          households.
        </Typography>
      </div>
    </div>
  );
}
