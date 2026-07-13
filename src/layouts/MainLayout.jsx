import { Outlet } from "react-router-dom";

import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header />

      <main className="container mx-auto flex-1 px-4 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};