import { OurMissionImg } from "../../assets/images";

const OurMission = () => {
  return (
    <section className="px-6 md:pl-20 md:pr-0 lg:pl-[165px] py-16 md:pb-[10px] md:pt-[120px] lg:py-[90px]">
      <div className="w-full lg:w-auto lg:max-w-[1168px] xl:max-w-[1268px] lg:h-[550px] flex flex-col md:flex-row md:items-center gap-10 md:gap-6 lg:gap-24 md:justify-between">
        <div className="flex-1 lg:flex-none lg:w-[475px] space-y-5 lg:space-y-8">
          <h3 className="font-bold text-xl md:text-2xl lg:text-[36px] text-primary">
            Our Mission
          </h3>
          <p className="text-[#21384299] text-sm lg:text-base">
            We started Sleepstiq with 1 simple goal: to be your best friend at
            bedtime. We, just like you, deal with stress, unease, and trouble
            sleeping from a number of silly things like school, work, screens,
            numbers, and people. That's why we created products that aim to -{" "}
          </p>
          <div className="space-y-1 text-[#21384299] text-sm lg:text-base">
            <p>✓ Promote Calm </p>
            <p>✓ Support Sleep </p>
            <p>✓ Reduce Stress </p>
            <p>✓ Aid Relaxation</p>
          </div>
        </div>
        <div className="flex-1  h-full">
          <img
            src={OurMissionImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
