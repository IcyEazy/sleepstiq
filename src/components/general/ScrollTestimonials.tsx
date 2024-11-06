import { useEffect, useRef, useState } from "react";

import {
  happyCustomers,
  HappyCustomersTestimonialsProps,
} from "../../constants";
import { displayStars } from "../../utils";

const ScrollTestimonials = () => {
  const [customers, setCustomers] = useState<HappyCustomersTestimonialsProps[]>(
    []
  );
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (happyCustomers.length > 0) {
      setCustomers(happyCustomers);
    }
  }, []);

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
    <div className="w-full pt-16 md:pt-[80px] pb-16 pl-6 md:pl-20 lg:pl-[165px]">
      <div
        ref={scrollRef}
        className="flex gap-6 items-center justify-start overflow-x-auto scroll-container"
      >
        {customers?.map((customer, index) => {
          return (
            <div
              key={index}
              className="min-w-[306px] max-w-[306px] h-[202px] bg-[#FBF9F2] rounded-lg p-6 lg:p-8 flex flex-col justify-between"
            >
              <p className="italic text-[#4D533C] text-sm lg:text-base">
                {customer?.content}
              </p>
              <div className="space-y-1">
                <p className="text-[#4D533C] font-bold text-sm lg:text-base">
                  {customer?.name}
                </p>
                <div className="flex items-center gap-1">
                  {customer?.rating && displayStars(customer?.rating)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollTestimonials;
