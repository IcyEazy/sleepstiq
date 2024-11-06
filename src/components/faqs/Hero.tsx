import { Search } from "../../assets/icons";
import Navbar from "../layouts/Navbar";

interface HeroProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Hero: React.FC<HeroProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="relative h-[350px] md:h-[450px] lg:h-[596px] px-6 md:px-20 lg:pl-[165px] pt-6 bg-[#FBF9F2]">
      <Navbar />
      <div className="flex flex-col gap-6 md:gap-8 lg:w-[581px] mt-14 md:mt-16 lg:mt-32">
        <p className="text-sm md:text-base lg:text-lg text-primary">
          We're here to help you
        </p>
        <h1 className="font-bold text-3xl md:text-5xl lg:text-[60px] text-primary">
          How can we assist?
        </h1>
        <div className="flex items-center gap-4 w-full lg:w-[800px] xl:w-[859px] h-12 md:h-16 lg:h-[78px] bg-white rounded-[10px] px-4 md:px-6 lg:pl-8">
          <Search />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search FAQs here"
            className="w-full bg-transparent outline-none border-none text-sm md:text-base lg:text-lg text-primary placeholder:text-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
