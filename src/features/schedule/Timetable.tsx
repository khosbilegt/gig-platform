import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const hours = [
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "00:00",
];

const days = [
  {
    date: "2023-10-01",
    day: "Monday",
    blocks: [
      {
        start: "09:00",
        end: "10:00",
        task: "Meeting with client",
      },
      {
        start: "10:00",
        end: "11:00",
        task: undefined,
      },
      {
        start: "11:00",
        end: "12:00",
        task: "Project work",
      },
      {
        start: "12:00",
        end: "13:00",
        task: undefined,
      },
      {
        start: "13:00",
        end: "14:00",
        task: "Lunch break",
      },
      {
        start: "14:00",
        end: "15:00",
        task: "Team meeting",
      },
    ],
  },
  {
    date: "2023-10-02",
    day: "Tuesday",
    blocks: [
      {
        start: "09:00",
        end: "10:00",
        task: "Meeting with client",
      },
      {
        start: "10:00",
        end: "11:00",
        task: undefined,
      },
      {
        start: "11:00",
        end: "12:00",
        task: "Project work",
      },
      {
        start: "12:00",
        end: "13:00",
        task: undefined,
      },
      {
        start: "13:00",
        end: "14:00",
        task: "Lunch break",
      },
      {
        start: "14:00",
        end: "15:00",
        task: "Team meeting",
      },
    ],
  },
  {
    date: "2023-10-02",
    day: "Tuesday",
    blocks: [
      {
        start: "09:00",
        end: "10:00",
        task: "Meeting with client",
      },
      {
        start: "10:00",
        end: "11:00",
        task: undefined,
      },
      {
        start: "11:00",
        end: "12:00",
        task: "Project work",
      },
      {
        start: "12:00",
        end: "13:00",
        task: undefined,
      },
      {
        start: "13:00",
        end: "14:00",
        task: "Lunch break",
      },
      {
        start: "14:00",
        end: "15:00",
        task: "Team meeting",
      },
    ],
  },
  {
    date: "2023-10-02",
    day: "Tuesday",
    blocks: [
      {
        start: "09:00",
        end: "10:00",
        task: "Meeting with client",
      },
      {
        start: "10:00",
        end: "11:00",
        task: undefined,
      },
      {
        start: "11:00",
        end: "12:00",
        task: "Project work",
      },
      {
        start: "12:00",
        end: "13:00",
        task: undefined,
      },
      {
        start: "13:00",
        end: "14:00",
        task: "Lunch break",
      },
      {
        start: "14:00",
        end: "15:00",
        task: "Team meeting",
      },
    ],
  },
  {
    date: "2023-10-02",
    day: "Tuesday",
    blocks: [
      {
        start: "09:00",
        end: "10:00",
        task: "Meeting with client",
      },
      {
        start: "10:00",
        end: "11:00",
        task: undefined,
      },
      {
        start: "11:00",
        end: "12:00",
        task: "Project work",
      },
      {
        start: "12:00",
        end: "13:00",
        task: undefined,
      },
      {
        start: "13:00",
        end: "14:00",
        task: "Lunch break",
      },
      {
        start: "14:00",
        end: "15:00",
        task: "Team meeting",
      },
    ],
  },
];

function Timetable() {
  return (
    <div className="w-full">
      <Tabs defaultValue="week" className="w-full">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <Button size="sm">
              <FaAngleLeft />
            </Button>
            <Button size="sm">
              <FaAngleRight />
            </Button>
          </div>
        </div>
        <TabsContent value="week">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center font-medium"></TableHead>
                {days.map((day, dayIndex) => (
                  <TableHead key={dayIndex} className="text-center">
                    <div className="font-medium">{day.day}</div>
                    <div className="text-sm text-muted-foreground">
                      {day.date}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {hours.map((hour, hourIndex) => (
                <TableRow key={hourIndex} className="hover:bg-transparent">
                  <TableCell className="text-center font-medium border-r">
                    {hour}
                  </TableCell>
                  {days.map((day, dayIndex) => (
                    <TableCell
                      key={dayIndex}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      onClick={() => {
                        console.log("clicked " + day.date + " " + hour);
                      }}
                    >
                      <div
                        className={`p-2 rounded ${
                          day.blocks[hourIndex]?.task
                            ? "bg-blue-50 border border-blue-200"
                            : "bg-gray-50"
                        }`}
                      >
                        <div className="text-xs text-muted-foreground">
                          {day.blocks[hourIndex]?.task || "Free"}
                        </div>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="month"></TabsContent>
      </Tabs>
    </div>
  );
}

export default Timetable;
