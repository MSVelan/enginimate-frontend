import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutside(e: Event) {
      if (
        menuOpen &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  return (
    <div className="flex flex-row header py-2 px-4 sm:px-8 justify-between">
      <div className="text-gray-300">
        <div className="flex items-center gap-2">
          <Image
            src="/Enginimate_logo.png"
            className="w-8 h-8 rounded-3xl"
            alt="Enginimate Logo"
            width={40}
            height={40}
          />
          <h1 className="text-3xl font-bold sm:text-4xl heading">Enginimate</h1>
        </div>
        <h2 className="text-lg subheading">
          Generate awesome educational videos
        </h2>
      </div>
      <div className="relative flex items-center" ref={containerRef}>
        <button
          type="button"
          className="w-6 h-6 sm:hidden"
          onClick={() => setMenuOpen((s) => !s)}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            fill="#d1d5dc"
          >
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
          </svg>
        </button>
        <div
          id="nav-links"
          className={`${
            menuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row sm:items-center text-gray-300 sm:gap-2
          absolute right-0 top-10 mt-2 bg-gray-800 rounded-xl shadow-lg p-1 z-50
          sm:static sm:top-auto sm:mt-0 sm:w-auto sm:bg-transparent sm:shadow-none
          sm:rounded-none`}
        >
          <Link
            href={"https://enginimate-sdd.pages.dev"}
            className="flex-1 bg-gray-700 p-2 sm:rounded-xl flex items-center gap-2 text-center whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="#d1d5dc"
            >
              <path d="M176 48L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-240-88 0c-39.8 0-72-32.2-72-72l0-88zM316.1 160L224 67.9 224 136c0 13.3 10.7 24 24 24l68.1 0zM0 64C0 28.7 28.7 0 64 0L197.5 0c17 0 33.3 6.7 45.3 18.7L365.3 141.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" />
            </svg>
            SDD
          </Link>
          <Link
            href={"https://github.com/MSVelan/enginimate/tree/main"}
            className="bg-gray-700 flex-1 p-2 sm:rounded-xl flex items-center gap-2 whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            aria-label="Github"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#d1d5dc"
            >
              <path d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
            Github
          </Link>
          <Link
            href={"https://msvelan.netlify.app/"}
            className="flex-1 bg-gray-700 p-2 sm:rounded-xl flex items-center gap-1 whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              className="h-5 w-5 gap-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="#d1d5dc"
            >
              <path d="M0 64c0-17.7 14.3-32 32-32 229.8 0 416 186.2 416 416 0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96 14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM32 160c159.1 0 288 128.9 288 288 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
            </svg>
            {/* <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M224 24c0-13.3 10.7-24 24-24 145.8 0 264 118.2 264 264 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-119.3-96.7-216-216-216-13.3 0-24-10.7-24-24zM80 96c26.5 0 48 21.5 48 48l0 224c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16 79.5 0 144 64.5 144 144S255.5 512 176 512 32 447.5 32 368l0-224c0-26.5 21.5-48 48-48zm168 0c92.8 0 168 75.2 168 168 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3-53.7-120-120-120-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
            </svg> */}
            Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
