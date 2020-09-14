import React from "react";
import { Header } from "./header/Header";
import { Index } from "./find/Index";
import { Footer } from "./footer/Footer";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Index />
      <Footer />
    </div>
  );
};
