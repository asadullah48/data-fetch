import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RenderingBlog() {
  return (
    <div
      className={`${poppins.className} flex flex-col justify-center items-center`}
    >
      {/* heading and date, read and likes details */}
      <h1 className="text-3xl text-center md:text-5xl font-extrabold mt-20">
        Rendering in Next.js. CSR & SSR
      </h1>

      <div className="flex justify-center md:justify-between items-center mt-7 w-[150px] md:w-[60%] text-base flex-wrap gap-4 md:gap-0">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 ">
          <p>December 29, 2024</p>
          <p>5 minutes read</p>
        </div>
        <p>1 million likes 😉</p>
      </div>

      {/*short over view  */}
      <p className="text-lg font-normal text-center mb-20 md:w-[60%] text-gray-400 mt-10">
        In Next.js, rendering can be accomplished using either Client-Side
        Rendering (CSR) or Server-Side Rendering (SSR). CSR loads content on the
        client side after the initial page load, enhancing interactivity and
        reducing server load, but it can potentially affect SEO. Conversely, SSR
        generates HTML on the server for each request, improving both SEO and
        initial load times. CSR is ideal for dynamic applications with minimal
        SEO needs, while SSR is preferred for content-heavy sites that require
        fast load times and robust search engine optimization.
      </p>

      {/* headings and topic in bullet points. CSR */}
      <div className="flex justify-center items-center w-full">
        <div className="my-5 flex flex-col justify-center items-start w-[60%]">
          <h1 className="text-3xl mb-4 font-semibold ">
            CSR: Client Side Rendring
          </h1>

          <ul className="list-disc tracking-wide mb-8 text-gray-400 flex flex-col gap-5">
            <li>
              Definition: Client-Side Rendering (CSR) is the process where the
              browser loads a minimal HTML page accompanied by JavaScript, which
              then fetches the necessary data and executes the required logic to
              render the user interface.
            </li>

            <li>
              The server sends a basic HTML page with links to JavaScript
              bundles.
            </li>

            <li>
              JavaScript then fetches content from APIs or a database and
              updates the UI on the client side.
            </li>

            <li>
              The page is initially blank or has minimal content until the
              JavaScript code is fully executed.
            </li>
          </ul>

          <h1 className="text-[28px] mt-2  font-semibold text-gray-300">
            👇🏻 Wanna See Example Click The Button and Observe 👇🏻
          </h1>

          <Link href={"/csr"} className="w-full">
            <button className="w-full  bg-PrimaryPurple text-white px-4 py-2 rounded-lg mt-4">
              Client Side Rendering
            </button>
          </Link>
        </div>
      </div>

      {/* headings and topic in bullet points. SSR */}
      <div className="mt-20 flex justify-center items-center w-full">
        <div className="my-5 flex flex-col justify-center items-start w-[60%]">
          <h1 className="text-3xl mb-4 font-semibold ">
            SSR: Server Side Rendering
          </h1>

          <ul className="list-disc mb-8 tracking-wide text-gray-400 flex flex-col gap-5">
            <li>
              
            </li>

            <li>
              When a user requests a page, the server processes it, fetches
              data, and renders HTML on the server.
            </li>

            <li>
              The server sends a complete HTML page to the browser, which can be
              displayed immediately.
            </li>
          </ul>

          <h1 className="text-[28px] mt-2 font-semibold text-gray-300 ">
            👇🏻 Wanna See Example Click The Button and Observe 👇🏻
          </h1>

          <Link href={"/ssr"} className="w-full">
            <button className="w-full  bg-PrimaryPurple text-white px-4 py-2 rounded-lg mt-4">
              Server Side Rendering
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
