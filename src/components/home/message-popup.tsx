import Image from "next/image";

interface MessagePopupProps {
    avatar: any;
    message: string;
    position1: string;
    position2: string;
}

export const MessagePopup: React.FC<MessagePopupProps> = ({
    avatar,
    message,
    position1,
    position2,
}) => {
    return (
        <>
            <div>
                <div className="group  relative transition duration-100 md:hover:filter-none">
                    <div className="h-14 w-14 opacity-50 duration-100 md:h-20 md:w-20 md:grayscale md:filter md:group-hover:opacity-100 md:group-hover:filter-none">
                        <Image
                            src={avatar}
                            alt=""
                            // height={80}
                            // width={80}
                            className="h-full w-full rounded-full"
                        ></Image>
                    </div>
                    <div
                        className={`absolute opacity-100 filter-none ${position1} ${position2} w-[150px] md:w-[220px]`}
                    >
                        <span className="md:text-md hidden rounded-full bg-[#F1F1EF] p-1 px-2 text-sm md:inline-block md:p-2 md:px-4">
                            {message}
                        </span>
                        <span className="md:text-md rounded-full bg-[#F1F1EF] p-1 px-2 text-xs md:hidden md:p-2 md:px-4">
                            <span className="opacity-50">{message}</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
