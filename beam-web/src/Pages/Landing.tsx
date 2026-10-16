import { Hero } from "./landing-sections/Hero";
import { About } from "./landing-sections/About";
import { HowItWorks } from "./landing-sections/HowItWorks";
import { Investments } from "./landing-sections/Investments";
import Testimonials from "./landing-sections/Testimonias";
import { MissionVision } from "./landing-sections/MissionVision";
import { CTA } from "./landing-sections/CTA";


export default function Landing() {
    return(
        <>
        <Hero />
        <About />
        <HowItWorks />
        <Investments />
        <Testimonials />
        <MissionVision />
        <CTA />
        </>
    )
}