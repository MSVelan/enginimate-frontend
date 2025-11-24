const Footer = () => {
  return (
    <footer className="w-full bg-[#3e5879] text-gray-200 py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {new Date().getFullYear()} Enginimate</div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:muthiahsvn@gmail.com"
            aria-label="Email"
            title="Email"
            className="p-2 rounded-md hover:bg-white/10 transition-transform transform hover:-translate-y-0.5"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/muthiahsivavelan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="p-2 rounded-md hover:bg-white/10 transition-transform transform hover:-translate-y-0.5"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.98h3.96V24H.5V8.98zM8.98 8.98h3.8v2.06h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.63 4.74 6.05V24h-3.96v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.88-2.77 3.82V24H8.98V8.98z" />
            </svg>
          </a>

          <a
            href="https://github.com/MSVelan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="p-2 rounded-md hover:bg-white/10 transition-transform transform hover:-translate-y-0.5"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.2 11.2 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.2-1.5 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.42-2.7 5.39-5.28 5.67.41.35.78 1.04.78 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.21.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
        </div>
      </div>
      {/* <div className="container mx-auto flex justify-evenly">
        <div>
          <h3 className="font-bold mb-4">About Us</h3>
          <p>
            This project aims to solve the problem of generating accurate <br />
            animated videos from just the prompt. It incorporates <br />
            specialized methods such as having evaluator agents to evaluate{" "}
            <br />
            LLM generated content and also prevents hallucination <br />
            during generation by fetching relevant documentation chunks. <br />
            The capabilities are limited by the LLMs used under the hood <br />
            and the limitations of free tier services that are being used.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Navigation</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a
                href="https://msvelan.netlify.app/"
                className="hover:text-white"
              >
                My Blogs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Connect</h3>
          <p>Follow us on social media.</p>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; 2025 Enginimate. All rights reserved.</p>
      </div> */}
    </footer>
  );
};

export default Footer;
