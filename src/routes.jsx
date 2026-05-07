import React, { useEffect } from "react";
import { createBrowserRouter, Outlet, useLocation } from "react-router";
// import { Background } from "./components/background";
import { Navbar } from "./app/components/navbar";
import { HomePage } from "./app/pages/home-page";
import Background from "./app/components/background";
import ServicePage from "./app/pages/service-page";
import IndustriesPage from "./app/pages/industries-page";
import AboutPage from "./app/pages/about-page";
import CareersPage from "./app/pages/careers-page";
import InsightsPage from "./app/pages/insights-page";
import BlogDetailPage from "./app/pages/blog-detail-page";
import ProductsPage from "./app/pages/products-page";
import ContactPage from "./app/pages/contact-page";
import Services from "./app/pages/Services";  


const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-blue-500/10 flex flex-col">
      <Background />
      <Navbar />
      <div className="relative z-10 flex-grow">
        <Outlet />
      </div>
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
        path: "services",
        Component: Services,
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
            path: ":blogs",
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
