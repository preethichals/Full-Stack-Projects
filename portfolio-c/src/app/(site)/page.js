import { Inter } from "next/font/google";
import About from "../(site)/about/page";
import Skills from "../(site)/skills/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className=" container mx-auto px-4 border-x-2 shadow-2xl" id="home">
        <About />
        <Skills />
      </div>
    </>
  );
}
