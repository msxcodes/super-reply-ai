import { CalculatorSection } from "@/components/home/calculator-section";
import { FeaturesSection } from "@/components/home/features-section";
import { FooterSection } from "@/components/home/footer-section";
import { GuideSection } from "@/components/home/guide-section";
import { HeroSection } from "@/components/home/hero-section";
import { StepsSection } from "@/components/home/steps-section";
import { Header } from "@/components/home/header";
import { useEffect } from "react";

export interface HomePageProps {}
const HomePage: React.FC<HomePageProps> = ({}) => {
    // let w = window;
    // document.addEventListener("keydown", () => console.log("clicked"));
    // console.log(w);
    return (
        <>
            <Header />
            <div className="relative h-full w-[100%] pt-20">
                <div className="md:h-full md:snap-y md:snap-mandatory md:snap-start md:overflow-x-hidden md:overflow-y-scroll ">
                    <div className="snap-start snap-always">
                        <HeroSection />
                    </div>
                    <div className="my-20 snap-start snap-always md:my-0">
                        <GuideSection />
                    </div>
                    <div className="snap-start snap-always">
                        <CalculatorSection />
                    </div>
                </div>
                <FeaturesSection />
                <StepsSection />
                <FooterSection />
            </div>
        </>
    );
};
export default HomePage;
