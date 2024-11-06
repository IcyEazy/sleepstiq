import { lazy } from "react";

export const routesPaths = {
  home: "/",
  about: "/about",
  shop: "/shop",
  faqs: "/faqs",
  notFound: "*",
};

export const routesPathComponents = {
  home: lazy(() => import("../pages/home")),
  about: lazy(() => import("../pages/about")),
  shop: lazy(() => import("../pages/shop")),
  faqs: lazy(() => import("../pages/faqs")),
  notFound: lazy(() => import("../pages/not-found")),
};
