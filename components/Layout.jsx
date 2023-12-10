import Image from "next/image";
import Link from "next/link";

import { NAME } from "@constants";
import ThemeToggle from "./ThemeToggle";

const Layout = ({ children, home = false }) => (
  <div className="h-screen dark:text-white dark:bg-gray-900">
    <div className="container">
      <div className="self-end">
        <ThemeToggle />
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
          <Link className="text-blue-600 dark:text-purple-500" href="/">
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  </div>
);

export default Layout;
