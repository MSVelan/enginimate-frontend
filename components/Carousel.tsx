import { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "@/components/EmblaCarouselDotButtons";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const urls = [
    "https://player.cloudinary.com/embed/?cloud_name=dxpieuuce&public_id=manim-renders%2FEnginimate_fd0knw&profile=cld-default",
    "https://player.cloudinary.com/embed/?cloud_name=dxpieuuce&public_id=manim-renders%2FEnginimate_mca7fd&profile=cld-default",
    "https://player.cloudinary.com/embed/?cloud_name=dxpieuuce&public_id=manim-renders%2FEnginimate_bxaruq&profile=cld-default",
    "https://player.cloudinary.com/embed/?cloud_name=dxpieuuce&public_id=manim-renders%2FEnginimate_d6hghv&profile=cld-default",
    "https://player.cloudinary.com/embed/?cloud_name=dxpieuuce&public_id=manim-renders%2FEnginimate_g5knq8&profile=cld-default",
    "https://player.cloudinary.com/embed/?cloud_name=dxpieuuce&public_id=manim-renders%2FEnginimate_udlqte&profile=cld-default",
  ];
  const prompts = [
    "Visualise the factorisation of a given integer as a branching tree that grows in real-time.",
    "Visualize an array of bars and animate bubble sort",
    "Plot f(x)=x^2 function. Animate a dot moving along the graph and display the current x value and resulting f(x) values when dot moves along the x-axis.",
    "Display a piece of text and change its color over time",
    "Create an animation of Mandelbrot set fractal",
    "Explain various set operations",
  ];

  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const slideIndices = slides && slides.length ? slides : urls.map((_, i) => i);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="flex flex-col m-4 sm:m-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl mx-auto m-4">
        Featured Creations
      </h2>
      {/* create a carousal of videos below for featured creations */}
      <section className="m-4 rounded-2xl embla">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container">
            {slideIndices.map((idx) => {
              const url = urls[idx];
              const prompt = prompts[idx];
              return (
                <div
                  key={idx}
                  className="embla__slide min-w-0 sm:[--slide-size:50%] lg:[--slide-size:33.3%] shrink-0"
                >
                  <iframe
                    src={url}
                    className="embla__slide__number w-full h-full rounded-xl"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                  <p className="text-md mt-2 px-2 text-[#d9cfc1]">{prompt}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="embla__controls">
          <div className="embla__buttons col-span-full sm:col-span-1 grid-cols-[auto_auto]! justify-center gap-6! sm:gap-2.5! sm:justify-start">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <div className="embla__dots hidden! sm:flex!">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </section>
      {/* <div className="m-10 rounded-2xl bg-[#3E5879] embla" ref={emblaRef}>
        <div className="embla__container">
          {urls.map((url, i) => (
            <div key={i} className="embla__slide">
              <iframe
                src={url}
                className="h-lvh w-lvw max-h-48 max-w-2xl rounded-2xl m-2"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Carousel;
