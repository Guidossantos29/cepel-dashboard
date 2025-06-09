import { Card, CardContent } from "../ui/card";

interface ResumeProps {
    label: string;
    value: string | number;
    icon?: React.ReactNode;
    bgColorIcon?: string;
    bgColor?: string;
    separator: boolean;
}

function Resume({ label, value, icon = "?", bgColor = "bg-gray-200", bgColorIcon = "bg-gray-200", separator }: ResumeProps) {
    return (
        <>
            <Card className={`${bgColor} w-full h-[80px] md:h-[70px] border-none shadow-sm flex justify-center `}>
                <CardContent className="flex justify-between items-center">
                    <div className="flex items-center">
                        <span className={`${bgColorIcon} rounded-full w-10 h-10 flex items-center justify-center font-bold`}>
                            {icon}
                        </span>
                    </div>
                    <div className="text-right flex flex-col">
                        <span className="text-lg font-bold">{label}</span>
                        <span className="text-base">{value}</span>
                    </div>

                </CardContent>

            </Card>
            <div className="relative flex items-center">
                
                {separator && (
                    <div className="hidden md:block w-[1px] h-full  bg-gray-200 rounded-md " />

                )}
            </div>

        </>
    );
}

export default Resume;
