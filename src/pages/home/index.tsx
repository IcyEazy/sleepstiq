import {
  HomeHero,
  HappyCustomers,
  ScrollTestimonials,
  ShopNow,
  OurMission,
  VisitOurShop,
  ProductReviews,
} from "../../components";
import "../../components/home/Home.css";

function Home() {
  return (
    <main>
      <HomeHero />
      <HappyCustomers />
      <ScrollTestimonials />
      <ShopNow />
      <OurMission />
      <VisitOurShop />
      <ProductReviews />
    </main>
  );
}

export default Home;
