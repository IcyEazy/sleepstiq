import Navbar from "../layouts/Navbar";

const Hero = () => {
  return (
    <section className="h-[300px] md:h-[450px] lg:h-[596px] pl-6 md:pl-20 lg:pl-[165px] pt-6 hero-bg">
      <Navbar />
      <div className="flex flex-col gap-4 lg:w-[581px] mt-14 md:mt-16 lg:mt-32">
        <p className="text-sm md:text-base lg:text-lg text-primary">
          We're here to help you
        </p>
        <h1 className="font-bold text-3xl md:text-5xl lg:text-[60px] text-primary">
          Relax & Rest
        </h1>
      </div>
    </section>
  );
};

export default Hero;
