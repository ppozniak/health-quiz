import "./styles.css";
import Image, { ImageProps } from "next/image";

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
          className="section-list__item group mx-auto mb-3 max-w-[370px] pb-3 md:max-w-none md:py-5"
        >
          <div className="container group-even:flex-row-reverse md:relative md:flex md:gap-3 lg:max-w-[870px]">
            <div className="relative z-10 mx-auto mb-2 flex-shrink-0 md:m-0">
              <Image width={370} height={445} alt="" src={imgSrc} />
            </div>

            <div className="max-w-prose text-balance">
              <h3 className="section-list__title mb-2 text-xs uppercase text-blueSmoke">
                {title}
              </h3>
              <p className="mb-2 text-md">{heading}</p>
              <p>{description}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
