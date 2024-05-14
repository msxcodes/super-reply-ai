import Image from "next/image";
import { SectionContainer } from "./section-container";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { GradientText } from "../gradient-text";
import { Button } from "../ui/button";
import Link from "next/link";
import Growth1 from "../../../public/home/Growth-1.svg";
import Growth2 from "../../../public/home/Growth-2.svg";
import Growth3 from "../../../public/home/Growth-3.svg";
import One from "../../../public/home/1.svg";
import Two from "../../../public/home/2.svg";
import Three from "../../../public/home/3.svg";

interface StepsSectionProps {}

export const StepsSection: React.FC<StepsSectionProps> = ({}) => {
    return (
        <>
            <section className="my-10 flex snap-start flex-col">
                <div className="mb-8 mt-10 text-center font-sharp-grotesk text-3xl font-semibold md:mt-0 md:text-4xl lg:text-7xl">
                    <h2>Get Started with</h2>
                    <div className="flex items-center justify-center gap-2 lg:gap-4">
                        <div className="h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20">
                            <Image
                                height={50}
                                width={50}
                                alt="logo"
                                src={"/home/logo-1.svg"}
                                className="h-full w-full rounded-full"
                            />
                        </div>
                        SuperReply
                    </div>
                </div>

                <div className="mx-8 mt-5 flex flex-col justify-center gap-8 md:mx-32 md:mt-10 md:flex-row">
                    {CARDS_DATA.map((item) => {
                        return (
                            <Card
                                key={item.num}
                                className="rounded-3xl border-none shadow-2xl md:w-[30%] md:px-8"
                            >
                                <CardHeader className="gap-10">
                                    <CardDescription className="gradient-primary-light md:h-38 md:w-38 mx-auto h-[130px] w-[130px] rounded-full">
                                        <Image src={item.image} alt=""></Image>
                                    </CardDescription>
                                    <CardTitle className="flex items-baseline gap-2 font-sharp-grotesk text-[34px] font-semibold md:text-[40px]">
                                        Step
                                        <div className="w-33 h-57">
                                            <Image
                                                alt=""
                                                src={item.number}
                                                className=""
                                            ></Image>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="font-sf-pro-display text-[22px] font-normal">
                                    {item.text}
                                </CardContent>
                                <CardFooter />
                            </Card>
                        );
                    })}
                </div>
                <div className="mb-10 mt-20 text-center">
                    <Button
                        asChild
                        size={"lg"}
                        className="rounded-full font-space-grotesk text-2xl md:px-16 md:py-8 md:text-3xl"
                    >
                        <Link href={"/signin"}>Get Started</Link>
                    </Button>
                </div>
            </section>
        </>
    );
};

const CARDS_DATA = [
    {
        num: 1,
        text: "Connect with SuperReply in less than 2 mins. No tech integration needed.",
        image: Growth1,
        number: One,
    },
    {
        num: 2,
        text: "Use 10+ Templates to achieve goals like sales, lead collections, grievance management etc.",
        image: Growth2,
        number: Two,
    },
    {
        num: 3,
        text: "See the flywheel running and minting dollars while you sleep.",
        image: Growth3,
        number: Three,
    },
];
