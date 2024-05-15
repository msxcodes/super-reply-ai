"use client";
import { cn } from "@/lib/utils";
import { SectionContainer } from "./section-container";
import { GradientText } from "@/components/gradient-text";
import Image from "next/image";
import GifOne from "../../../public/home/feature-1.gif";
import GifTwo from "../../../public/home/feature-2.gif";
import GifThree from "../../../public/home/feature-3.gif";
import Asterik from "../../../public/home/Asterisk.svg";
import HalfCircles from "../../../public/home/halfCircles.svg";
import X from "../../../public/home/X.svg";
import { GiIdCard } from "react-icons/gi";
import { useEffect } from "react";

interface FeaturesSectionProps {}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({}) => {
    useEffect(() => {
        const gifCards = document.querySelectorAll(".gif-card");

        const observer = new IntersectionObserver(
            (entries) => {
                // console.log(entries[0].target);
                console.log("came in fully");
            },
            { threshold: 1 },
        );

        // Start observing each .gif-card element
        gifCards.forEach((gifCard) => {
            observer.observe(gifCard);
        });
    }, []);
    return (
        <>
            <section className="">
                <SectionContainer>
                    <div className="flex flex-col items-center justify-center gap-20 md:space-y-20 md:pt-20">
                        {DATA.map((data, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    "flex flex-col items-center justify-around gap-4 md:mb-0 md:h-[650px] md:flex-row md:gap-6",
                                    idx % 2 != 0 &&
                                        "flex-col md:flex-row-reverse",
                                )}
                            >
                                <div className="gif-card relative mb-10 h-[400px] w-[90%] md:mb-20 lg:h-[85%] lg:w-[42%]">
                                    <div
                                        className={cn(
                                            "absolute -left-[34px] -top-[40px] md:-left-[57px] md:-top-[60px]",
                                            idx % 2 != 0 && "hidden",
                                        )}
                                    >
                                        <Image
                                            src={Asterik}
                                            className="hidden md:block"
                                            alt=""
                                            width={280}
                                            height={280}
                                        ></Image>
                                        <Image
                                            src={Asterik}
                                            className="block md:hidden"
                                            alt=""
                                            width={160}
                                            height={160}
                                        ></Image>
                                    </div>
                                    <div
                                        className={cn(
                                            "absolute -left-[0px] -top-[60px]",
                                            idx % 2 == 0 && "hidden",
                                        )}
                                    >
                                        <Image
                                            src={HalfCircles}
                                            className="hidden md:block"
                                            alt=""
                                            width={560}
                                            height={280}
                                        ></Image>
                                        <Image
                                            src={HalfCircles}
                                            className="block md:hidden"
                                            alt=""
                                            width={400}
                                            height={160}
                                        ></Image>
                                    </div>
                                    <div className="gradient-primary-faded flex h-full w-full items-center justify-center rounded-[2rem] md:rounded-[calc(5rem)]">
                                        <div className="flex h-[100%] w-auto items-center justify-center">
                                            <Image
                                                className="h-full w-auto translate-y-10 rounded-3xl md:w-full  md:translate-y-16 md:rounded-[3.4rem]"
                                                src={data.source}
                                                alt="Description"
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="my-8 w-[75%] text-left md:w-[40%]">
                                    <p className="font-sharp-grotesk text-[30px] font-semibold leading-[115%] leading-snug text-black md:text-[46px] lg:text-[50px]">
                                        {data.heading}
                                    </p>
                                    <p className="mt-4 font-sf-pro-display text-[18px] font-normal md:mt-8 md:text-[24px]">
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionContainer>
                <SectionContainer className="hidden md:block">
                    <div className="flex items-center justify-between gap-10 rounded-[2rem] bg-black text-5xl font-medium text-white md:gap-4 md:px-20 md:py-12">
                        {NUM_DATA.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center text-center"
                            >
                                <span className="relative flex font-sharp-grotesk text-7xl">
                                    {item.num}
                                    <span className="absolute -right-[25%] bottom-[14%]">
                                        <Image
                                            className="text-5xl font-semibold"
                                            src={X}
                                            alt=""
                                        />
                                    </span>
                                </span>
                                <br />
                                <span className="-mt-5 font-sf-pro-display text-2xl font-normal">
                                    {" "}
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </SectionContainer>
                <div className="flex items-center  justify-between bg-black px-2 py-4 pb-6 text-white md:hidden">
                    {NUM_DATA.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-around   text-center "
                        >
                            <div className="relative flex justify-center font-sharp-grotesk text-2xl font-semibold">
                                {item.num}
                                <span
                                    className={`absolute -right-[${item.right}%] bottom-[20%] h-[0.8rem] w-[0.9rem]`}
                                >
                                    <Image
                                        className="h-full w-full "
                                        src={X}
                                        alt=""
                                    />
                                </span>
                            </div>
                            <br />
                            <span className=" px-4 font-sf-pro-display text-sm font-normal leading-4 md:text-lg">
                                {" "}
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

/*
E767A9
F0D9CB
B65CDE
*/

const NUM_DATA: { num: number; text: string; right: number }[] = [
    {
        num: 8,
        text: "Conversion Rates",
        right: 35,
    },
    {
        num: 10,
        text: "Social Engagement",
        right: 15,
    },
    {
        num: 50,
        text: "Faster Addressal of Intent",
        right: 15,
    },
];

const DATA: {
    heading: string;
    description: string;
    source: any;
    topImage: any;
}[] = [
    {
        heading: "Automate your IG sales funnel",
        description:
            "Convert every interaction into a sales opportunity with personalised & automated conversations",
        source: GifOne,
        topImage: Asterik,
    },
    {
        heading: "Monetise every Inbound Interaction",
        description:
            "Build trust, create a bond with your audience, and add a personal touch to increase engagement, and drive higher conversions.",
        source: GifTwo,
        topImage: HalfCircles,
    },
    {
        heading: "Re-engage with users Smartly",
        description:
            "Unlock Community marketing to increase organic reach and increase LTV at the same time",
        source: GifThree,
        topImage: Asterik,
    },
];
