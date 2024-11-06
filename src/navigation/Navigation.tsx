import { Route, Routes } from "react-router-dom";
import { routesPathComponents, routesPaths } from "./routes";
import { Suspense } from "react";

const Navigation = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center">
          <h1 className="font-semibold text-sm md:text-base text-center">
            Loading...
          </h1>
        </div>
      }
    >
      <Routes>
        <Route
          index
          path={routesPaths.home}
          element={<routesPathComponents.home />}
        />
        <Route
          path={routesPaths.about}
          element={<routesPathComponents.about />}
        />
        <Route
          path={routesPaths.shop}
          element={<routesPathComponents.shop />}
        />
        <Route
          path={routesPaths.faqs}
          element={<routesPathComponents.faqs />}
        />
        <Route
          path={routesPaths.notFound}
          element={<routesPathComponents.notFound />}
        />
      </Routes>
    </Suspense>
  );
};

export default Navigation;
