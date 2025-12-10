import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import About from "@/pages/Home/About";

import Hero from "@/pages/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="  bg-black/98 font-sans text-white">
      <header>
        <Navbar></Navbar>
      </header>
      <main className=" min-h-[calc(100vh-161px)] w-full max-w-screen-2xl   sm:items-start">
       <section>
        <Hero></Hero>
       </section>
       <sectio>
        <About></About>
        </sectio>
      </main>
      <footer>
      <Footer></Footer>
      </footer>
    </div>
  );
}
