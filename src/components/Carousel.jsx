import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export const Carousel = ({ top5Movies, auto, interval }) => {
  console.log("top 5 Movie", top5Movies);

  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("current index: ", currentIndex);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? top5Movies?.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === top5Movies?.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let intervalId;
    if (auto === true) {
      intervalId = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === top5Movies?.length - 1 ? 0 : prev + 1
        );
      }, interval);
    }
    return () => clearInterval(intervalId);
  }, [auto, interval, top5Movies?.length]);

  return (
    <div className="w-full h-[200px] md:h-[400px] lg:h-[600px] relative px-5 group">
      {currentIndex >= 0 && (
        <div
          className="w-full h-full bg-center bg-cover rounded-2xl transition-transform duration-500 ease-in-out"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${
              top5Movies?.[currentIndex]?.backdrop_path ?? ""
            })`,
          }}
        >
          <div className="p-3 flex space-x-3 w-full">
            <p className="font-bold text-sm md:text-2xl text-white">
              TOP : {currentIndex + 1}
            </p>
            <p className="font-bold text-sm md:text-2xl text-white">
              {top5Movies?.[currentIndex]?.name ??
                top5Movies?.[currentIndex]?.title}
            </p>
          </div>
        </div>
      )}

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[35%] md:top-[45%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[35%] md:top-[45%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="absolute top-[80%] right-0 left-0 md:top-[90%]">
        <div className="flex top-4 justify-center py-2">
          {top5Movies?.map((r, idx) => (
            <div
              key={idx}
              onClick={() => goToSlide(idx)}
              className="text-2xl cursor-pointer text-white"
            >
              {idx === currentIndex ? (
                <RxDotFilled className=" text-black/40 animate-pulse" />
              ) : (
                <RxDotFilled />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
