import { useEffect, useRef, useState } from "react";
import { displayStars } from "../../utils";
import { customersProductReviews, ProductReviewProps } from "../../constants";

const ProductReviews = () => {
  const [productReviews] = useState<ProductReviewProps[]>(
    customersProductReviews
  );
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
    <section className="w-full pl-6 md:pl-20 lg:pl-[165px]">
      <hr className="bg-[#21384218] w-full lg:max-w-[1000px] xl:max-w-[1110px] mb-16" />
      <h4 className="text-primary font-bold text-xl md:text-2xl lg:text-[36px] my-14">
        Product Review
      </h4>
      <div className="">
        <div
          ref={scrollRef}
          className="flex gap-10 items-center justify-start overflow-x-auto scroll-container pb-20 md:pb-32 lg:pb-40"
        >
          {productReviews.map((review, index) => {
            return (
              <div
                key={index}
                className="bg-[#FFFFFF] rounded-lg p-6 min-w-[306px] max-w-[306px] h-[350px] md:h-[390px] lg:h-[420px] flex flex-col gap-3 justify-between product-review-shadow"
              >
                <div className="h-[160px] md:h-[190px] lg:h-[210px] w-full">
                  <img
                    src={review?.product_image}
                    alt={review.reviewer}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[#4D533C] text-sm lg:text-base">
                    {review?.review_content}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[#4D533C] font-bold text-sm lg:text-base">
                    {review?.reviewer}
                  </p>
                  <div className="flex items-center gap-1">
                    {review?.rating && displayStars(review?.rating)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;
