import Link from "next/link";
import Image from "next/image";

import feelsGoodMan from "@public/feels-good-man.png";
import logo from "@public/logo.png";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <header className="bg-olive py-1">
        <div className="container">
          <Link
            href="/"
            prefetch={false}
            title="Go to homepage"
            className="inline-block"
          >
            <Image alt="Manual" height={40} width={40} src={logo} priority />
          </Link>
        </div>
      </header>

      <Hero
        title="Be good to yourself"
        description="We're working around the clock to bring you a holistic
                  approach to your wellness. From top to bottom, inside and out."
        ctaTitle="Take the quiz"
        ctaHref="#"
      >
        <div className="mx-auto mt-2 max-w-[400px] md:-mt-[200px] md:translate-x-2/3 lg:m-0 lg:ml-auto lg:mt-3 lg:max-w-[600px] lg:translate-x-0 lg:self-end">
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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aliquid
        temporibus nihil blanditiis accusantium ratione obcaecati minus tenetur
        culpa a labore tempora cupiditate quos commodi harum nemo, iste eos
        tempore doloribus. Ratione asperiores magni nisi quisquam eius ea,
        veritatis praesentium doloribus ex at facilis totam error commodi
        obcaecati distinctio quo.
      </section>
    </main>
  );
}
