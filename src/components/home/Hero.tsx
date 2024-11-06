import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import Navbar from "../layouts/Navbar";
import Organizations from "./Organizations";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative h-[450px] md:h-[511px] lg:h-[811px] pl-6 md:pl-20 lg:pl-[165px] pt-6 home-hero-bg">
      <Navbar />
      <div className="flex flex-col gap-3 md:gap-5 md:w-[400px] lg:w-[581px] mt-14 md:mt-16 lg:mt-32">
        <p className="text-sm md:text-base lg:text-lg text-primary">
          We're here to help you
        </p>
        <h1 className="font-bold text-3xl md:text-5xl lg:text-[60px] text-primary">
          Relax & Rest
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-primary mb-2">
          With the aid of our Melatonin Sleepstiq, we can assure you that you
          can get quality sleep.
        </p>
        <Button onClick={() => navigate("/shop")} text="Visit Shop" />
      </div>
      <div className=" absolute bottom-0 lg:bottom-[-70px] lg:left-[165px] right-0">
        <Organizations />
      </div>
    </section>
  );
};

export default Hero;
