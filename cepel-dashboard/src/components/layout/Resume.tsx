import { Card, CardContent } from "../ui/card";

interface ResumeProps {
    label: string;
    value: string | number;
    icon?: React.ReactNode;
    bgColorIcon?: string;
    bgColor?: string;
    separator: boolean;
}

function Resume({
    label,
    value,
    icon = "?",
    bgColor = "bg-gray-200",
    bgColorIcon = "bg-gray-200",
    separator,
}: ResumeProps) {
    return (
        <>
            <Card className={`${bgColor} flex-1 h-[80px] md:h-[70px] border-none shadow-sm flex justify-center`}>
                <CardContent className="flex gap-2 justify-between items-center w-full px-4">
                    <div>
                        <span className={`${bgColorIcon} rounded-full w-10 h-10 flex items-center justify-center font-bold`}>
                            {icon}
                        </span>
                    </div>
                    <div className="text-right flex flex-col">
                        <span className="text-lg font-bold">{value}</span>
                        <span className="text-base">{label}</span>
                    </div>
                </CardContent>
            </Card>

            {separator && (
                <div className="hidden md:block w-[1px] h-[70px] bg-gray-200 rounded-md" />
            )}
        </>
    );
}

export default Resume;
