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
import RightArrowLight from "../../../public/home/right-arrow-lowshade.svg";
import LeftArrowLight from "../../../public/home/left-arrow-lowshade.svg";
import { useEffect, useRef, useState } from "react";

interface StepsSectionProps {}

export const GuideSection: React.FC<StepsSectionProps> = ({}) => {
    const boxRef = useRef();
    const [isBtn, setIsBtn] = useState<boolean>(false);
    const [btnColorLeft, setBtnColorLeft] = useState<string>("#e11c9259");
    const [btnColorRight, setBtnColorRight] = useState<string>("#e11c93");
    const [imgSrcLeft, setImgSrcLeft] = useState(LeftArrowLight);
    const [imgSrcRight, setImgSrcRight] = useState(RightArrow);
    console.log(btnColorRight);
    console.log(btnColorLeft);

    const btnColorHandler = (boxWidth: number, clientWidth: number) => {
        const double = clientWidth * 2;
        console.log(double == boxWidth);
        if (boxWidth == 0) {
            setBtnColorLeft("#e11c93");
            setBtnColorRight("#e11c93");
            setIsBtn(false);
            setImgSrcLeft(LeftArrow);
            setImgSrcRight(RightArrow);
        } else if (boxWidth == clientWidth) {
            setBtnColorRight("#e11c9259");
            setIsBtn(true);
            setImgSrcRight(RightArrowLight);
        } else if (boxWidth == clientWidth * 2 - 2) {
            setBtnColorLeft("#e11c93");
            setBtnColorRight("#e11c93");
            setIsBtn(false);
            setImgSrcLeft(LeftArrow);
            setImgSrcRight(RightArrow);
        } else if (boxWidth < clientWidth) {
            setBtnColorLeft("#e11c9259");
            setBtnColorRight("#e11c93");
            setIsBtn(false);
            setImgSrcLeft(LeftArrowLight);
            setImgSrcRight(RightArrow);
        }
    };

    const rightArrowHandler = () => {
        const box: any = boxRef.current;
        box != "undefined" &&
            ((box.scrollLeft += box.clientWidth),
            btnColorHandler(box.scrollLeft, box.clientWidth),
            console.log(box.scrollLeft),
            console.log(box.scrollLeft === 0));
    };

    const leftArrowHandler = () => {
        let scroll = 0;
        const box: any = boxRef.current;
        box != "undefined" &&
            ((box.scrollLeft = box.scrollLeft - box.clientWidth),
            (scroll = box.scrollLeft - 2),
            btnColorHandler(scroll, box.clientWidth),
            console.log("scrool - " + box.scrollLeft),
            console.log("width - " + box.clientWidth));
    };

    return (
        <>
            <div className="relative flex flex-col items-center justify-center  md:mb-0 md:h-[100vh] md:flex-row">
                <div
                    ref={boxRef}
                    className="custom-scrollbar main-container mx-2 flex w-[100%] snap-x snap-mandatory items-start overflow-x-hidden overflow-y-hidden scroll-smooth md:mb-10 md:block md:h-[100%] md:w-[100%] md:snap-y md:snap-mandatory md:flex-col md:items-center md:justify-center md:gap-6 md:overflow-x-auto md:overflow-y-auto"
                >
                    <div className="snap-center snap-always ">
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
                    <div className="snap-center snap-always ">
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
                    <div className="snap-center snap-always ">
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
                <button
                    onClick={leftArrowHandler}
                    className={`flex items-center justify-center rounded-full  `}
                    style={{ backgroundColor: `${btnColorLeft}` }}
                >
                    <Image
                        src={imgSrcLeft}
                        className="py-3"
                        alt=""
                        width={20}
                        height={20}
                    />
                </button>
                <button
                    disabled={isBtn}
                    onClick={rightArrowHandler}
                    className={`flex w-full items-center justify-center rounded-full `}
                    style={{ backgroundColor: `${btnColorRight}` }}
                >
                    <Image
                        src={imgSrcRight}
                        alt=""
                        className="py-3"
                        width={20}
                        height={20}
                    />
                </button>
            </div>
        </>
    );
};
