import { Hero } from "@/components/sections/Hero";
import { WorkShowcase } from "@/components/sections/WorkShowcase";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Proof } from "@/components/sections/Proof";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkShowcase />
      <Services />
      <Process />
      <Proof />
      <CTA />
    </>
  );
}
