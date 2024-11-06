import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const VisitOurShop = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 md:py-24 lg:pb-36">
      <div className="w-full md:w-[600px] px-6 md:px-0 lg:w-auto lg:max-w-[815px] xl:max-w-[915px] mx-auto flex flex-col gap-6 lg:gap-8 items-center text-center">
        <h3 className="text-primary font-bold text-xl md:text-2xl lg:text-[36px]">
          Visit Our Shop
        </h3>
        <p className="text-[#21384299] text-sm lg:text-base">
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <Button onClick={() => navigate("/shop")} text="Visit Shop" />
      </div>
    </section>
  );
};

export default VisitOurShop;
