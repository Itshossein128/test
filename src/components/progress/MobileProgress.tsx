"use client";

import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import "./carousel.css";
import useEmblaCarousel from "embla-carousel-react";

interface MobileProgressProps {
  slides: string[];
  options: any;
  level: number;
}

const MobileProgress = (props: MobileProgressProps) => {
  const { slides, options, level } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  console.log(level);
  return (
    <section className='embla' dir='rtl'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((slide, index) => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__number'>
                <div className='[&>span]:py-[7px] [&>span]:px-[9px] [&>span]:rounded-md px-3 py-[9px] rounded-lg bg-white w-full flex items-center justify-between'>
                  {slide}
                  {level - 1 === index ? (
                    <span className='bg-[#ededff] text-[#4156D9]'>
                      در حال تکمیل
                    </span>
                  ) : (
                    <span className='bg-[#e4e4e4] text-[#797979]'>
                      تکمیل نشده
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__dots'>
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
  );
};

export default MobileProgress;
