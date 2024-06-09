import Link, { LinkProps } from "next/link";
import React, { HTMLProps, ReactElement } from "react";

export type HeroProps = HTMLProps<HTMLDivElement> & {
  title: string;
  description: string;
  ctaTitle?: string;
  ctaHref?: LinkProps["href"];
  children?: ReactElement;
};

export default function Hero({
  title,
  description,
  ctaHref,
  ctaTitle,
  children,
  ...rest
}: HeroProps) {
  // @TODO: Merging styles
  return (
    <section
      {...rest}
      className="bg-olive overflow-hidden lg:-mt-3 lg:flex lg:min-h-[750px] lg:flex-col"
    >
      <div className="container lg:flex lg:flex-1">
        {/* Content */}
        <div className="max-w-prose text-balance md:pt-3 lg:self-center lg:pt-0">
          <h1 className="mb-1 text-balance text-lg md:text-xl">{title}</h1>

          <p className="mb-3">{description}</p>

          {!!ctaHref && !!ctaTitle && (
            <div>
              <Link className="btn-primary" href={ctaHref}>
                {ctaTitle}
              </Link>
            </div>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
