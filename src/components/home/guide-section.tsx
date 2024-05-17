"use client";
import Image from "next/image";
import { SectionContainer } from "./section-container";
import { GradientText } from "../gradient-text";
import { Button } from "../ui/button";
import { GuideStep } from "./guide-step";
import "./home.css";
import Feature1 from "../../../public/home/Feature-1.png";
import Feature2 from "../../../public/home/Feature-2.png";
import Feature3 from "../../../public/home/Feature-3.png";
import LeftArrow from "../../../public/home/left-arrow.svg";
import RightArrow from "../../../public/home/left-arrow.svg";
import RightArrowLight from "../../../public/home/right-arrow-lowshade.svg";
import LeftArrowLight from "../../../public/home/left-arrow-lowshade.svg";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface StepsSectionProps {}

export const GuideSection: React.FC<StepsSectionProps> = ({}) => {
    return (
        <>
            <div className=" relative flex-col items-center justify-center md:mb-0  md:flex md:h-[100vh] md:flex-row">
                <div className="custom-scrollbar main-container  flex w-[100%] snap-mandatory items-center  md:mx-2  md:mb-10 md:block md:h-[100%] md:w-[100%] md:snap-y md:snap-mandatory md:flex-col md:items-center md:justify-center md:gap-6 md:overflow-x-auto md:overflow-y-auto">
                    {/* DESKTOP VIEW SCROLL */}
                    <div className="hidden snap-center snap-always md:block">
                        <GuideStep
                            stepNum={"1 :"}
                            stepName={"Comment"}
                            imageOffset={"-translate-x-4"}
                            imageOffsetMobile={"-translate-x-3"}
                            width={330}
                            height={330}
                            image={Feature1}
                            description={
                                "Encourage user comments on your posts & significantly increase your content's reach. More comments, More reach, More automated conversations."
                            }
                        />
                    </div>
                    <div className="hidden snap-center snap-always md:block">
                        <GuideStep
                            stepNum={"2 :"}
                            stepName={"Automated Reply & DM"}
                            imageOffset={"translate-x-4"}
                            imageOffsetMobile={"translate-x-2"}
                            width={330}
                            height={330}
                            image={Feature2}
                            description={
                                "Send a personalised reply to the comment and initiate a DM chat through Superreply Automation."
                            }
                        />
                    </div>
                    <div className="hidden snap-center snap-always md:block ">
                        <GuideStep
                            stepNum={"3 :"}
                            stepName={"Sales Conversion"}
                            imageOffset={"translate-x-7"}
                            imageOffsetMobile={"translate-x-4"}
                            width={250}
                            height={330}
                            image={Feature3}
                            description={
                                "Convert the intent automatically into sales by offering incentives and building urgency in the DM chat. "
                            }
                        />
                    </div>

                    {/* MOBILE VIEW SCROLL  */}
                    <Carousel className="w-full md:hidden">
                        <CarouselContent>
                            <CarouselItem>
                                <div className="py-0">
                                    <GuideStep
                                        stepNum={"1 :"}
                                        stepName={"Comment"}
                                        imageOffset={"-translate-x-4"}
                                        imageOffsetMobile={"-translate-x-3"}
                                        width={330}
                                        height={330}
                                        image={Feature1}
                                        description={
                                            "Encourage user comments on your posts & significantly increase your content's reach. More comments, More reach, More automated conversations."
                                        }
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="">
                                    <GuideStep
                                        stepNum={"2 :"}
                                        stepName={"Automated Reply & DM"}
                                        imageOffset={"translate-x-4"}
                                        imageOffsetMobile={"translate-x-2"}
                                        width={330}
                                        height={330}
                                        image={Feature2}
                                        description={
                                            "Send a personalised reply to the comment and initiate a DM chat through Superreply Automation."
                                        }
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="">
                                    <GuideStep
                                        stepNum={"3 :"}
                                        stepName={"Sales Conversion"}
                                        imageOffset={"translate-x-7"}
                                        imageOffsetMobile={"translate-x-4"}
                                        width={250}
                                        height={330}
                                        image={Feature3}
                                        description={
                                            "Convert the intent automatically into sales by offering incentives and building urgency in the DM chat. "
                                        }
                                    />
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <div className="mx-8 grid grid-cols-2 gap-2 rounded-full bg-[#FDEDF1] px-2 py-2">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    );
};
