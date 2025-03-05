"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../header/page"));
const Hero = dynamic(() => import("../Hero"));
const BlockContentOne = dynamic(() => import("../BlockContentOne"));
const BlockContentTwo = dynamic(() => import("../BlockContentTwo"));
const BlockContentThree = dynamic(() => import("../BlockContentThree"));
const BlockContentFour = dynamic(() => import("../BlockContentFour"));
const Footer = dynamic(() => import("../footer/page"));

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <BlockContentOne />
      <BlockContentTwo />
      <BlockContentThree />
      <BlockContentFour />
      <Footer />
    </div>
  );
}
