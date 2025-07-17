import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoIosSearch } from "react-icons/io";

function WorkerHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-2 mb-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-secondary">{subtitle}</p>
      </div>
      <div>
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            disabled
            className="absolute left-1 top-1/2 -translate-y-1/2 h-8 px-2"
          >
            <IoIosSearch />
          </Button>
          <Input placeholder="Search anything..." className="pl-12" />
        </div>
      </div>
    </div>
  );
}

export default WorkerHeader;
