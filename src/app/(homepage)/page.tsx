import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/hero";
import SectionList, { SectionListItem } from "@/components/section-list";

import balding from "@public/balding.png";
import feelsGoodMan from "@public/feels-good-man.png";
import manSmiling from "@public/smile.png";

const ITEMS: SectionListItem[] = [
  {
    title: "Hair loss",
    heading: "Hair loss needn't be irreversible. We can help!",
    description:
      "We're working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
    imgSrc: balding,
  },
  {
    title: "Erecetile dysfunction",
    heading: "Erections can be a tricky thing. But no need to feel down!",
    description:
      "We're working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
    imgSrc: manSmiling,
  },
] as const;

export default function Home() {
  return (
    <main>
      <Hero
        title="Be good to yourself"
        description="We're working around the clock to bring you a holistic
                  approach to your wellness. From top to bottom, inside and out."
        ctaTitle="Take the quiz"
        ctaHref="/quiz/972423"
      >
        <div className="mx-auto mt-3 max-w-[400px] md:-mt-[200px] md:translate-x-2/3 lg:m-0 lg:ml-auto lg:mt-4 lg:max-w-[600px] lg:translate-x-0 lg:self-end">
          <Image
            className=""
            alt=""
            src={feelsGoodMan}
            priority
            sizes="(max-width: 768px) 400px, 600px"
          />
        </div>
      </Hero>

      <section>
        <h2 className="my-5 text-center text-lg">What we can help with</h2>

        <SectionList items={ITEMS} />

        <div className="my-4 text-center">
          <Link href="/quiz/972423" className="btn-primary">
            Take the quiz
          </Link>
        </div>
      </section>
    </main>
  );
}
