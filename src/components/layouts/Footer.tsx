import { Link } from "react-router-dom";
import { routesPaths } from "../../navigation/routes";
import {
  Facebook,
  FooterLogo,
  GooglePlus,
  LinkedIn,
  Twitter,
} from "../../assets/icons";

const Footer = () => {
  const companyLinks = [
    {
      name: "About",
      path: routesPaths.about,
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Jobs",
      path: "/jobs",
    },
  ];

  const socials = [
    {
      icon: Facebook,
      link: "https://www.facebook.com/",
    },
    {
      icon: Twitter,
      link: "https://www.twitter.com/",
    },
    {
      icon: GooglePlus,
      link: "https://www.goole.com/",
    },
    {
      icon: LinkedIn,
      link: "https://www.linkedin.com/",
    },
  ];

  return (
    <section className="w-full p-6 md:px-8 lg:py-8 lg:px-14 bg-[#043C50]">
      <Link to={routesPaths.home} className="flex justify-center">
        <FooterLogo />
      </Link>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-8 md:gap-4 mt-8">
        <div className="flex gap-8 text-sm md:text-base lg:flex-[33%]">
          <div className="space-y-7">
            <p className="font-semibold text-white">COMPANY</p>
            <div className="flex flex-col gap-4">
              {companyLinks.map((link, index) => (
                <Link key={index} to={link.path} className="text-[#ABABAB]">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-7">
            <p className="font-semibold text-white">CONTACT</p>
            <div className="space-y-1">
              <p className="text-[#ABABAB]">Phone</p>
              <p className="font-bold text-white">+234 708 507 3128</p>
            </div>
            <div className="space-y-1">
              <p className="text-[#ABABAB]">Address</p>
              <p className="font-bold text-white">
                16, Ogindipe Close, Upston Close
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:gap-8 lg:flex-[39%]">
          <div className="space-y-6 text-sm md:text-base text-white">
            <p className="font-semibold">CONSUMER ADVISORY</p>
            <p className="">
              These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease. This product should be used only as
              directed on the label. All trademarks and copyrights are property
              of their respective owners and not affiliated with nor do they
              endorse this product. Results may vary.
            </p>
            <p className="">
              By using our website or product, you agree to follow our{" "}
              <Link to={"/privact-policy"} className="text-[#8FE2FF]">
                terms of service
              </Link>
              .
            </p>
          </div>
          <div className="hidden lg:block w-[5px] h-[210px] bg-[#5D6544]" />
        </div>
        <div className="flex flex-col gap-6 justify-between lg:pl-6 lg:flex-[28%]">
          <div className="flex flex-col gap-7 text-sm md:text-base">
            <p className="font-semibold text-white">GET IN TOUCH</p>
            <p className="text-[#ABABAB]">
              Feel free to get in touch with us via email
            </p>
            <Link
              to="mailto:hello@sleepstiq.com"
              className="text-white text-lg md:text-2xl lg:text-2xl font-bold"
            >
              hello@sleepstiq.com
            </Link>
            <div className="flex items-center gap-4">
              {socials.map((social, index) => {
                return (
                  <Link
                    key={index}
                    to={social.link}
                    className="w-[33px] h-[33px] rounded-full flex items-center justify-center bg-[#8FE2FF]"
                  >
                    <social.icon />
                  </Link>
                );
              })}
            </div>
          </div>
          <p className="text-[#ABABAB] text-sm">
            © 2020@sleepstiq. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
