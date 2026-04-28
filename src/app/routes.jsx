import React, { useEffect } from "react";
import { createBrowserRouter, Outlet, useLocation } from "react-router";
// import { Background } from "./components/background";
import { Navbar } from "./components/navbar";
import { HomePage } from "./pages/home-page";
import Background from "./components/background";
import ServicePage from "./pages/service-page";
import IndustriesPage from "./pages/industries-page";
import AboutPage from "./pages/about-page";
import CareersPage from "./pages/careers-page";
import InsightsPage from "./pages/insights-page";
import BlogDetailPage from "./pages/blog-detail-page";
import ProductsPage from "./pages/products-page";
import ContactPage from "./pages/contact-page";
// import { ServicePage } from "./pages/service-page";
// import { IndustriesPage } from "./pages/industries-page";
// import { InsightsPage } from "./pages/insights-page";
// import { BlogDetailPage } from "./pages/blog-detail-page";
// import { AboutPage } from "./pages/about-page";
// import { CareersPage } from "./pages/careers-page";
// import { ProductsPage } from "./pages/products-page";
// import { ContactPage } from "./pages/contact-page";

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden">
      <Background />
      <Navbar />
      <div className="relative z-10">
        <Outlet />
      </div>
      <div className="h-[10vh] md:h-[20vh]" />
    </main>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "services/:serviceId",
        Component: ServicePage,
      },
      {
        path: "industries",
        Component: IndustriesPage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "careers",
        Component: CareersPage,
      },
      {
        path: "insights",
        children: [
          {
            index: true,
            Component: InsightsPage,
          },
          {
            path: ":slug",
            Component: BlogDetailPage,
          },
        ],
      },
      {
        path: "products",
        Component: ProductsPage,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
    ],
  },
]);
