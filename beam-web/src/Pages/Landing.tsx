import { Hero } from "./landing-sections/Hero";
import { About } from "./landing-sections/About";
import { HowItWorks } from "./landing-sections/HowItWorks";
import { Investments } from "./landing-sections/Investments";
import Testimonials from "./landing-sections/Testimonias";
import { MissionVision } from "./landing-sections/MissionVision";
import { CTA } from "./landing-sections/CTA";
import { FAQ } from "./landing-sections/FAQ";


export default function Landing() {
    return(
        <>
        <Hero />
        <HowItWorks />
        <About />
        <Investments />
        <Testimonials />
        <MissionVision />
        <FAQ />
        <CTA />
        </>
    )
}