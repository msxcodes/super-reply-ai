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
import { useEffect, useState } from "react";

interface StepsSectionProps {}

export const GuideSection: React.FC<StepsSectionProps> = ({}) => {
    return (
        <>
            <div className="relative mb-5 flex items-center justify-center md:mb-0">
                <div className="custom-scrollbar overflow-y- mx-2 flex w-[100%] snap-x snap-mandatory items-center overflow-x-scroll scroll-smooth md:mb-10 md:block md:h-[80vh] md:w-[100%] md:snap-y md:flex-col md:justify-around md:gap-6 md:overflow-x-auto md:overflow-y-scroll">
                    <div className="snap-center  ">
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
                    <div className="snap-center">
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
                    <div className="snap-center">
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
                </div>
            </div>
        </>
    );
};
