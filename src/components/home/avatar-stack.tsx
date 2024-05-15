import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import Avatar0 from "../../../public/home/card-stack-0.jpeg";
import Avatar1 from "../../../public/home/hero-section-avatar-0.png";
import Avatar2 from "../../../public/home/hero-section-avatar-3.png";
import Avatar3 from "../../../public/home/card-stack-1.jpeg";
import Avatar4 from "../../../public/home/card-stack-2.jpeg";

interface HeaderProps {}

export const AvatarStack: React.FC<HeaderProps> = ({}) => {
    return (
        <>
            <div className="flex -space-x-3">
                <div className="h-7 w-7 flex-shrink-0 md:h-8 md:w-8">
                    <Image
                        className="h-full w-full rounded-full"
                        src={Avatar0}
                        alt=""
                    />
                </div>
                <div className="h-7 w-7 flex-shrink-0 md:h-8 md:w-8">
                    <Image
                        className="h-full w-full rounded-full"
                        src={Avatar1}
                        alt=""
                    />
                </div>
                <div className="h-7 w-7 flex-shrink-0 md:h-8 md:w-8">
                    <Image
                        className="h-full w-full rounded-full"
                        src={Avatar2}
                        alt=""
                    />
                </div>
                <div className="h-7 w-7 flex-shrink-0 md:h-8 md:w-8">
                    <Image
                        className="h-full w-full rounded-full"
                        src={Avatar3}
                        alt=""
                    />
                </div>
                <div className="hidden h-7 w-7 flex-shrink-0 md:block md:h-8 md:w-8">
                    <Image
                        className="h-full w-full rounded-full"
                        src={Avatar4}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};
