import Image from "next/image";
import Link from "next/link";

import { NAME } from "@constants";

const Layout = ({ children, home = false }) => (
  <div className="container">
    <div className="self-end">
      <button>Click me</button>
    </div>
    <header className="flex flex-col items-center">
      {home ? (
        <>
          <Image
            priority
            src="/images/profile.jpg"
            className="rounded-full"
            height={144}
            width={144}
            alt=""
          />
          <h1 className="heading-2xl">{NAME}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={108}
              width={108}
              alt=""
            />
          </Link>
          <h2 className="heading-lg">
            <Link href="/" className="text-inherit">
              {NAME}
            </Link>
          </h2>
        </>
      )}
    </header>
    <main>{children}</main>
    {!home && (
      <div className="mt-12">
        <Link href="/">← Back to home</Link>
      </div>
    )}
  </div>
);

export default Layout;
