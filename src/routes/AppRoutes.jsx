import { Routes, Route } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";

import { Home } from "../pages/Home";
import { Competitions } from "../pages/Competitions";
import { Rankings } from "../pages/Rankings";
import { HallOfFame } from "../pages/HallOfFame";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/competitions"
          element={<Competitions />}
        />

        <Route
          path="/rankings"
          element={<Rankings />}
        />

        <Route
          path="/hof"
          element={<HallOfFame />}
        />
      </Route>

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};