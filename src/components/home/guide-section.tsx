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
import RightArrow from "../../../public/home/right-arrow.svg";
import { useEffect, useRef, useState } from "react";

interface StepsSectionProps {}

export const GuideSection: React.FC<StepsSectionProps> = ({}) => {
    const boxRef = useRef();
    const [isBtn, setIsBtn] = useState<boolean>(false);

    const rightArrowHandler = () => {
        const box: any = boxRef.current;
        box != "undefined" && (box.scrollLeft += box.clientWidth);
        // box.scrollLeft >= 0 && box.scrollLeft <= 450
        //     ? setBtn(true)
        //     : setBtn(false),
        // console.log(box.scrollLeft)
    };

    const leftArrowHandler = () => {
        const box: any = boxRef.current;
        box != "undefined" && (box.scrollLeft -= box.clientWidth);
        // box.scrollLeft >= 450 && box.scrollLeft >= 500
        //     ? setBtn(true)
        //     : setBtn(false),
        // console.log(box.scrollLeft);
    };
    return (
        <>
            <div className="relative flex flex-col items-center justify-center md:mb-0 md:flex-row">
                <div
                    ref={boxRef}
                    className="custom-scrollbar main-container mx-2 flex w-[100%] snap-x snap-mandatory items-start overflow-x-hidden overflow-y-hidden  scroll-smooth md:mb-10 md:block md:h-[80vh] md:w-[100%] md:snap-y md:snap-mandatory md:flex-col md:items-center md:justify-center md:gap-6 md:overflow-x-auto md:overflow-y-auto"
                >
                    <div className="snap-center snap-always">
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
                    <div className="snap-center snap-always">
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
                    <div className="snap-center snap-always">
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
            <div className="mx-8 grid grid-cols-2 gap-2  rounded-full bg-[#FDEDF1] px-2 py-2 md:hidden">
                <div
                    onClick={leftArrowHandler}
                    className={`flex items-center justify-center rounded-full bg-[#e11c93]`}
                >
                    <Image src={LeftArrow} className="py-4" alt="" />
                </div>
                <div
                    onClick={rightArrowHandler}
                    className={`flex w-full items-center justify-center rounded-full bg-[#e11c93]`}
                >
                    <Image src={RightArrow} alt="" className="py-4" />
                </div>
            </div>
        </>
    );
};
