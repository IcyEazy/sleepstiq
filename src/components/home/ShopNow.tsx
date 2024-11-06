import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { VapePenImg2 } from "../../assets/images";

const ShopNow = () => {
  const navigate = useNavigate();
  return (
    <section className="px-6 md:px-20 lg:px-[165px] pt-10 -mt-8">
      <div className="w-full lg:w-auto lg:max-w-[1000px] xl:max-w-[1110px] mx-auto">
        <hr className="bg-[#21384218] w-full mb-10" />
        <div className="flex flex-col md:flex-row gap-20 md:gap-6 lg:gap-10 md:justify-between md:items-center">
          <div className="relative md:flex-[67%] lg:flex-1 lg:h-[694px]">
            <img
              src={VapePenImg2}
              alt="vape-pen"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-[-20px] lg:bottom-16 right-0 lg:w-[453px] flex flex-col gap-1 justify-center text-[#4D533C] whitespace-nowrap text-sm lg:text-base bg-white shop-now-shadow rounded-lg h-auto p-6 md:h-[158px] md:py-0">
              <p className="">😊 Promotes calm and relaxation. </p>
              <p className="">💤 Inhalation allows for a rapid effect.</p>
              <p className="">✅ 100% drug-free, plant-based ingredients.</p>
              <p className="">‍⚕️ 3rd-party lab tested.</p>
            </div>
          </div>
          <div className="md:flex-[33%] lg:flex-none lg:w-[390px] space-y-8">
            <h3 className="font-bold text-xl md:text-2xl lg:text-[36px] text-primary">
              Shop Now
            </h3>
            <p className="text-sm lg:text-base text-[#21384299]">
              Our Personal Diffuser is an aromatherapy device that contains a
              blend of melatonin, lavender, and chamomile. A few breaths of our
              plant-based essential oil mist will mellow you out, quiet the
              mind, and lull you to bed.
            </p>
            <Button onClick={() => navigate("/shop")} text="Visit Shop" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopNow;
