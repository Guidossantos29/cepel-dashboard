import { Card, CardContent } from "../ui/card";

interface ResumeProps {
  label: string;
  value: string | number;
  icon?: string;
  bgColor?: string;
  
}

function Resume({ label, value, icon = "?", bgColor = "bg-gray-200" }: ResumeProps) {
  return (
    <Card className="w-full border-none shadow-sm">
      <CardContent className="flex justify-between items-center p-4">
        <div>
          <span className={`${bgColor} rounded-full w-8 h-8 flex items-center justify-center font-bold`}>
            {icon}
          </span>
        </div>
        <div className="text-right">
          <div className="text-xs text-muted-foreground">{label}</div>
          <div className="text-lg font-bold">{value}</div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Resume;
