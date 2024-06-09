import Image from "next/image";
import logo from "@public/logo.png";
import Link from "next/link";

import facebookIcon from "@public/icons/facebook.svg";
import twitterIcon from "@public/icons/twitter.svg";
import googleIcon from "@public/icons/google.svg";

const GROUPS = [
  {
    title: "Product",
    inline: false,
    items: [
      { content: "Popular", href: "#" },
      { content: "Trending", href: "#" },
      { content: "Guided", href: "#" },
      { content: "Products", href: "#" },
    ],
  },
  {
    title: "Company",
    inline: false,
    items: [
      { content: "Press", href: "#" },
      { content: "Mission", href: "#" },
      { content: "Strategy", href: "#" },
      { content: "About", href: "#" },
    ],
  },
  {
    title: "Info",
    inline: false,
    items: [
      { content: "Support", href: "#" },
      { content: "Customer service", href: "#" },
      { content: "Get started", href: "#" },
    ],
  },
  {
    title: "Follow us",
    inline: true,
    items: [
      { content: <Image alt="Facebook" src={facebookIcon} />, href: "#" },
      { content: <Image alt="Google" src={googleIcon} />, href: "#" },
      { content: <Image alt="Twitter" src={twitterIcon} />, href: "#" },
    ],
  },
] as const;

export default function PageFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-lightOlive">
      <div className="container divide-y divide-[#BDCDC5]">
        <div className="py-2 md:py-5 lg:flex">
          {/* Logo */}
          <header className="md:mr-auto">
            <Link href="/" prefetch={false} className="inline-block">
              <Image alt="Manual" height={40} width={40} src={logo} priority />
            </Link>
          </header>

          {/* Link groups */}
          <div className="grid grid-cols-2 gap-2 md:flex md:grid-cols-none md:justify-end lg:flex-1">
            {GROUPS.map(({ title, items, inline }) => (
              <div key={title} className="md:basis-[170px] lg:flex-shrink-0">
                <span className="text-xs font-bold uppercase">{title}</span>
                <ul className={inline ? "flex items-center gap-2" : ""}>
                  {items.map(({ content, href }, index) => (
                    <li key={index}>
                      <Link
                        href={href}
                        className="block py-1 transition-colors hover:opacity-95"
                      >
                        {content}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-blueSmoke py-2 text-center">
          &copy; {year} Manual. All rights reserverd
        </div>
      </div>
    </footer>
  );
}
