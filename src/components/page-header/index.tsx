import Image from "next/image";
import Link from "next/link";

import logo from "@public/logo.png";

export default function PageHeader() {
  return (
    <header className="bg-olive py-2">
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
  );
}
