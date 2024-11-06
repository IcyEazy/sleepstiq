import { useEffect, useRef } from "react";
import {
  Bloomberg,
  Forbes,
  Google,
  Influencive,
  SleepReview,
} from "../../assets/icons";
import {
  BloombergImg,
  ForbesImg,
  GooglePlusImg,
  InfluenciveImg,
  SleepReviewImg,
} from "../../assets/images";

const Organizations = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  //Handles trackpad movement
  useEffect(() => {
    const container = scrollRef.current;

    const handleWheel = (event: WheelEvent) => {
      if (container) {
        event.preventDefault(); // Now we can prevent the default vertical scroll
        container.scrollLeft += event.deltaX; // Scroll horizontally based on horizontal wheel movement
      }
    };
    // Add non-passive wheel event listener
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    // Clean up the event listener
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="w-full lg:w-auto lg:max-w-[1176px] xl:max-w-[1276px] h-[70px] md:h-[100px] lg:h-[131px] flex items-center bg-[#FFFFFF] rounded-[2px] organization-shadow lg:gap-8 lg:px-12">
      <div className="w-full">
        <div className="hidden lg:flex items-center gap-4 justify-between w-full">
          <Google width={146} />
          <Forbes />
          <Bloomberg />
          <SleepReview />
          <Influencive />
        </div>
        <div className="lg:hidden w-full">
          <div
            ref={scrollRef}
            className="flex gap-6 items-center justify-start overflow-x-auto scroll-container"
          >
            <div className="w-[146px]">
              <img
                src={GooglePlusImg}
                alt=""
                className="w-[146px] h-full object-cover"
              />
            </div>
            <div className="w-[146px]">
              <img
                src={ForbesImg}
                alt=""
                className="w-[146px] h-full object-cover"
              />
            </div>
            <div className="w-[146px]">
              <img
                src={BloombergImg}
                alt=""
                className="w-[146px] h-full object-cover"
              />
            </div>
            <div className="w-[146px]">
              <img
                src={SleepReviewImg}
                alt=""
                className="w-[146px] h-full object-cover"
              />
            </div>
            <div className="w-[146px]">
              <img
                src={InfluenciveImg}
                alt=""
                className="w-[146px] h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizations;
