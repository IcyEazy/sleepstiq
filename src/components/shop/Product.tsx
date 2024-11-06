import { useState } from "react";
import { ArrowFilledUp } from "../../assets/icons";
import { VapePenImg } from "../../assets/images";
import Button from "../button/Button";

const Product = () => {
  const [unit, setUnit] = useState<number>(2);
  const [price] = useState<number>(25);
  const increaseUnit = () => {
    setUnit(unit + 1);
  };

  const decreaseUnit = () => {
    if (unit > 1) {
      setUnit(unit - 1);
    }
    return;
  };

  return (
    <section className="px-6 md:px-20 lg:px-[165px] pt-14">
      <div className="w-full lg:w-auto lg:max-w-[1000px] xl:max-w-[1101px] mx-auto flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-4 md:justify-between pb-14 lg:pb-28 border-b border-[#21384218]">
        <div className="flex-1 lg:flex-none lg:w-[477px] h-[350px] md:h-[400px] lg:h-[519px]">
          <img src={VapePenImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 lg:flex-none lg:w-[370px] flex flex-col gap-6 md:mt-24 lg:mt-36">
          <h4 className="text-primary font-bold text-xl md:text-2xl lg:text-[36px]">
            About Product
          </h4>
          <p className="text-[#21384299] text-sm lg:text-base">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <div className="text-[#4D533C] whitespace-nowrap text-sm lg:text-base">
            <p className="">😊 Promotes calm and relaxation. </p>
            <p className="">💤 Inhalation allows for a rapid effect.</p>
            <p className="">✅ 100% drug-free, plant-based ingredients.</p>
            <p className="">‍⚕️ 3rd-party lab tested.</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-8 text-sm lg:text-base text-[#000000]">
              <p className="w-20">Price</p>
              <p className="">Unit</p>
            </div>
            <div className="flex items-center gap-8 font-semibold text-sm lg:text-base text-[#000000]">
              <p className="w-20">USD {price * unit}</p>
              <div className="w-[63px] h-[33px] rounded-[5px] border border-primary flex items-center justify-center gap-3">
                <p className="">{unit}</p>
                <div className="space-y-1">
                  <ArrowFilledUp
                    className="cursor-pointer"
                    onClick={increaseUnit}
                  />
                  <ArrowFilledUp
                    className="rotate-180 cursor-pointer"
                    onClick={decreaseUnit}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Button text="Buy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
