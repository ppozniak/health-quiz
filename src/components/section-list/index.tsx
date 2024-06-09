import Image, { ImageProps } from "next/image";

import "./styles.css";

export type SectionListItem = {
  title: string;
  heading: string;
  description: string;
  imgSrc: ImageProps["src"];
};

type SectionListProps = {
  items: SectionListItem[];
};

export default function SectionList({ items }: SectionListProps) {
  return (
    <ol className="section-list">
      {items.map(({ title, heading, description, imgSrc }) => (
        <li
          key={title}
          className="section-list__item group mx-auto mb-2 max-w-[370px] pb-2 md:max-w-none md:py-4"
        >
          <div className="container group-even:flex-row-reverse md:relative md:flex md:gap-2 lg:max-w-[870px]">
            <div className="relative z-10 mx-auto mb-1 flex-shrink-0 md:m-0">
              <Image
                width={370}
                height={445}
                className=""
                alt=""
                src={imgSrc}
              />
            </div>

            <div className="max-w-prose text-balance">
              <h3 className="text-blueSmoke section-list__title mb-1 text-xs uppercase">
                {title}
              </h3>
              <p className="text-md mb-1">{heading}</p>
              <p className="">{description}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
