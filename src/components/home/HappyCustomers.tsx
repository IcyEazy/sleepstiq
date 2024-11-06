import { useState } from "react";
import { Link } from "react-router-dom";
import { routesPaths } from "../../navigation/routes";
import { ArrowFilledUp } from "../../assets/icons";
import {
  happyCustomers,
  HappyCustomersTestimonialsProps,
} from "../../constants";

const HappyCustomers = () => {
  const [customers] =
    useState<HappyCustomersTestimonialsProps[]>(happyCustomers);
  const [customerIndex, setCustomerIndex] = useState<number>(0);

  return (
    <section className="pt-[60px] md:pt-[80px] lg:pt-[100px] px-6 md:px-20 lg:px-[165px]">
      <div className="mx-auto w-full lg:w-auto lg:max-w-[1109px] lg:h-[455px] flex flex-col md:flex-row gap-10 md:gap-6 lg:gap-12 md:justify-between md:items-center">
        <div className="md:flex-1 lg:flex-none lg:w-[475px] text-primary space-y-6">
          <p className="text-xs md:text-sm">Our Amazing Story</p>
          <p className="text-xl md:text-2xl lg:text-[36px] font-bold">
            10k+Happy Customers
          </p>
          <p className="text-sm lg:text-base text-[#21384299] pt-6">
            There&apos;s no secret sauce, no wizard behind the curtain. What
            makes Aerolab tick is an interdisciplinary team with a framework
            that fosters candid collaboration.
          </p>
          <Link
            to={routesPaths.about}
            className="flex items-center text-sm lg:text-base gap-1 font-bold underline "
          >
            <ArrowFilledUp className="rotate-90" />
            Know More About Us
          </Link>
        </div>
        <div className="md:flex-1 lg:flex-none lg:w-[474px] p-4 lg:px-6 py-8 bg-[#FBF9F2] happy-customers-shadow">
          <div className=" flex flex-col justify-between gap-6">
            <p className="text-[#4D533C] italic text-base md:text-xl lg:text-2xl">
              {customers[customerIndex].content}
            </p>
            <div className="flex items-center gap-6 mt-16">
              <div className="w-16 h-16 md:w-[70px] md:h-[70px] lg:w-[84px] lg:h-[84px] rounded-full">
                <img
                  src={customers[customerIndex].avatar}
                  alt={customers[customerIndex].name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="space-y-1">
                <p className="text-[#4D533C] font-bold text-base md:text-lg lg:text-[22px]">
                  {customers[customerIndex].name}
                </p>
                <p className="text-[#152934] text-xs md:text-sm lg:text-base">
                  {customers[customerIndex].role}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 mt-2">
            {customers.slice(0, 2)?.map((_, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setCustomerIndex(index)}
                  className={`w-[10px] h-[10px] ${
                    customerIndex === index ? "bg-primary" : "bg-[#C4C4C4]"
                  } rounded-full cursor-pointer`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;
