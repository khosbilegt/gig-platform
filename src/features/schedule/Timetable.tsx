import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const hours = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
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
    <div className="w-full h-[200px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center font-medium"></TableHead>
            {days.map((day, dayIndex) => (
              <TableHead key={dayIndex} className="text-center">
                <div className="font-medium">{day.day}</div>
                <div className="text-sm text-muted-foreground">{day.date}</div>
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
    </div>
  );
}

export default Timetable;
