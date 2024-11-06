import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../assets/icons";
import { routesPaths } from "../../navigation/routes";

const Navbar = () => {
  const pathName = useLocation().pathname;

  const routes = [
    {
      name: "Home",
      path: routesPaths.home,
    },
    {
      name: "About",
      path: routesPaths.about,
    },
    {
      name: "Shop",
      path: routesPaths.shop,
    },
    {
      name: "FAQs",
      path: routesPaths.faqs,
    },
  ];
  return (
    <div className="flex items-start md:gap-10 lg:gap-[170px]">
      <Link to={routesPaths.home}>
        <Logo />
      </Link>
      <div className="flex items-center gap-8 lg:gap-14">
        {routes.map((route, index) => {
          return (
            <Link
              key={index}
              to={route.path}
              className={`text-sm md:text-base lg:text-lg text-primary ${
                pathName === route.path ? "font-bold" : "font-normal"
              }`}
            >
              {route.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
