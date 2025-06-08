import { Card, CardContent } from "../ui/card";

interface ResumeProps {
  label: string;
  value: string | number;
  icon?: string;
  bgColorIcon?: string;

}

function Resume({ label, value, icon = "?" ,bgColorIcon = "bg-gray-200" }: ResumeProps) {
  return (
    
    <Card className= "w-full border-none shadow-sm">
      <CardContent className="flex justify-between items-center p-4">
        <div>
          <span className={`${bgColorIcon} rounded-full w-8 h-8 flex items-center justify-center font-bold`}>
            {icon}
          </span>
        </div>
        <div className="text-right flex flex-col border ">
          <span className="text-xs text-muted-foreground">{label}</span>
          <span className="text-lg font-bold">{value}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default Resume;
