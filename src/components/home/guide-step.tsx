import Image from "next/image";
import { GradientText } from "../gradient-text";
import { Button } from "../ui/button";

interface StepsSectionProps {
    stepNum: string;
    stepName: string;
    description: string;
    image: any;
    imageOffset: string;
    imageOffsetMobile: string;
    width: number;
    height: number;
}

export const GuideStep: React.FC<StepsSectionProps> = ({
    stepNum,
    stepName,
    description,
    image,
    imageOffset,
    imageOffsetMobile,
    width,
    height,
}) => {
    return (
        <>
            <div className="hidden h-[90vh] w-[100%] flex-row items-center justify-around  p-20 md:flex">
                <div className="gradient-primary-conic flex h-[400px] w-[400px] items-center justify-center rounded-full lg:h-[550px] lg:w-[550px]">
                    <div
                        className={`h-[400px] w-[250px] translate-y-10 rounded-3xl lg:h-[520px] lg:w-auto ${imageOffset}`}
                    >
                        <Image
                            src={image}
                            alt=""
                            className="h-full w-full"
                        ></Image>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex max-w-[600px] flex-col gap-4 rounded-[40px] bg-white shadow-[0px_11px_30px_0px_rgba(0,0,0,0.10)] md:p-[50px] lg:p-[64px]">
                        <div className="gap-2 font-sharp-grotesk text-3xl  font-semibold lg:text-[35px]">
                            <span className="">Step </span>{" "}
                            <GradientText text={stepNum} />
                            <span> {stepName}</span>
                        </div>
                        <p className="text-md font-sf-pro-display font-normal lg:text-2xl">
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            {/* MOBILE VIEW  */}
            <div className="flex flex-col items-center  gap-24  px-8 pb-5 md:hidden">
                <div className="gradient-primary-conic flex h-[300px] w-[300px] items-center justify-center rounded-full ">
                    <div
                        className={` ${imageOffsetMobile} translate-y-[50px]  w-[${width}px] h-[${height}px]`}
                    >
                        <Image
                            src={image}
                            alt=""
                            className={`size-full rounded-[1.4rem]`}
                        ></Image>
                    </div>
                </div>
                <div className="flex h-[200px] max-h-min items-center justify-center ">
                    <div className="flex h-full flex-col  gap-4 rounded-3xl pt-6 shadow-xl ">
                        <div className="flex h-full flex-col space-y-2 px-8">
                            <div className="gap-2 font-sharp-grotesk text-[1.14rem] font-semibold leading-6 xs:text-[1.3rem] xs:leading-7">
                                <span className="">Step </span>
                                <GradientText
                                    className="font-sharp-grotesk italic"
                                    text={stepNum}
                                />
                                <span> {stepName}</span>
                            </div>
                            <p className="text-md flex items-center justify-center pb-4 font-sf-pro-display leading-5">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
