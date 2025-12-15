"use client";

import { v4 as uuidv4 } from "uuid";
import Carousel from "@/components/Carousel";
import { useState, useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OPTIONS: EmblaOptionsType = { slidesToScroll: "auto" };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const backend_url =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8000";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Home = () => {
  const [uuid, setUuid] = useState<string>(() => {
    try {
      const stored =
        typeof window !== "undefined"
          ? window.localStorage.getItem("eng_uuid")
          : null;
      return stored ?? uuidv4();
    } catch {
      return uuidv4();
    }
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      window.localStorage.setItem("eng_uuid", uuid);
    } catch {
      setUuid(uuidv4());
    }
  }, [uuid]);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    // POST /run triggers the job, requires uuid, query as json payload
    try {
      await fetch(`${backend_url}/run`, {
        method: "POST",
        body: JSON.stringify({
          uuid,
          query: input,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.log(`Error occurred while triggering the job: ${err}`);
      setError(`Error occurred while triggering the job: ${err}`);
    } finally {
      setInput("");
    }
    // GET /result/:uuid does long polling and
    // returns json with fields uuid, status, url, error
    await sleep(2000);
    try {
      const response = await fetch(`${backend_url}/result/${uuid}`, {
        mode: "cors",
      });
      const { status, url, error } = await response.json();
      console.log(`Received url: ${url} with status: ${status}`);
      if (url) {
        setResult(url);
      }
      if (error) {
        setError(`Error occurred while rendering: ${error}`);
      }
    } catch (err) {
      console.log(`Error occurred while rendering: ${err}`);
      setError(`Error occurred while rendering: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const handleIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleSubmit();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col m-4 sm:m-8 justify-between items-start gap-3">
        <div className="flex flex-col gap-2 md:flex-row md:gap-4 w-full items-start">
          <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl w-full flex-2">
            Animate mathematics, science and engineering related videos
          </h2>
          <div className="flex-3 text-sm sm:text-base md:text-md lg:text-lg">
            {!loading && !result && !error && (
              <div>
                <p>Enter a prompt to start processing your request.</p>
                <p>
                  Checkout the sample video for the prompt- Explain various set
                  operations.
                </p>
              </div>
            )}

            {loading && !result && !error && (
              <div>
                <p>Processing your request... Estimated time: 20-40 minutes.</p>
                <p>While you wait, why not play a game?</p>
              </div>
            )}

            {error && <p>{error}</p>}

            {result && (
              <div>
                <p>Result received!</p>
              </div>
            )}
          </div>
        </div>
        <div className="mr-4 flex flex-col-reverse gap-6 md:flex-row md:gap-4 w-full">
          <div className="flex flex-col flex-2 gap-4 justify-center">
            <div className="w-full aspect-auto relative mr-8 h-24 md:h-30 lg:h-24 xl:h-36">
              <textarea
                placeholder={"Enter your prompt here..."}
                className="w-full h-full rounded-lg bg-gray-300 p-2 text-wrap resize-none overflow-hidden"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <button
                type="button"
                className="absolute bottom-4 right-4 rounded-full bg-[#80A1C1] p-2"
                onClick={handleIconClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M322.5 351.7L523.4 150.9L391 520.3L322.5 351.7zM489.4 117L288.6 317.8L120 249.3L489.4 117zM70.1 280.8L275.9 364.4L359.5 570.2C364.8 583.3 377.6 591.9 391.8 591.9C406.5 591.9 419.6 582.7 424.6 568.8L602.6 72C606.1 62.2 603.6 51.4 596.3 44C589 36.6 578.1 34.2 568.3 37.7L71.4 215.7C57.5 220.7 48.3 233.8 48.3 248.5C48.3 262.7 56.9 275.5 70 280.8z"
                  />
                </svg>
              </button>
            </div>
            <p className="hidden lg:block text-base sm:text-md w-full">
              This project uses Langgraph and manim-ce in the backend and takes
              multiple steps for better quality output, hence expect a delay of
              20-40 minutes depending on the complexity of the task (also
              because I am using free-tier for most of the services). Currently
              there is no support for additional manim libraries like
              manim-physics, etc.
            </p>
          </div>
          <div className="flex-3 w-full aspect-video">
            {!loading && !result && !error && (
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dxpieuuce&public_id=manim-renders%2FEnginimate_udlqte&profile=cld-default"
                className="w-full h-full rounded-2xl mt-2"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            )}
            {loading && !result && !error && (
              <iframe
                allowFullScreen
                className="w-full h-full rounded-2xl mt-2"
                src="/games/drivemad.html"
              ></iframe>
            )}
            {result && (
              <iframe
                src={result}
                className="w-full h-full rounded-2xl mt-2"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
      <p className="m-8 hidden md:block lg:hidden md:text-md w-fit">
        This project uses Langgraph and manim-ce in the backend and takes
        multiple steps for better quality output, hence expect a delay of 20-40
        minutes depending on the complexity of the task (also because I am using
        free-tier for most of the services). Currently there is no support for
        additional manim libraries like manim-physics, etc.
      </p>
      <Carousel slides={SLIDES} options={OPTIONS} />
      <Footer />
    </div>
  );
};

export default Home;
