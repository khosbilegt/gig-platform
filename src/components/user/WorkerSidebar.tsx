import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import {
  RiDashboardHorizontalLine,
  RiUserFill,
  RiSettings3Line,
} from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router";

const sidebarItems = [
  {
    label: "Home",
    href: "/",
    icon: <RiDashboardHorizontalLine />,
  },
  {
    label: "My Tasks",
    href: "/tasks",
    icon: <RiUserFill />,
  },
  {
    label: "Inbox",
    href: "/inbox",
    icon: <RiSettings3Line />,
  },
  {
    label: "Message",
    href: "/message",
    icon: <RiSettings3Line />,
  },
];

export function UserSidebar() {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="pl-4 flex gap-4 items-center">
          <img
            src={"https://www.cdnlogo.com/logos/t/21/trustcoin.svg"}
            className="w-[50px]"
          />
          <h2 className="text-lg font-semibold">TaskHub</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="p-0 flex-col gap-2 p-4">
          {sidebarItems.map((item) => (
            <div key={item.href} className={`w-full transition duration-200`}>
              <Button
                className={`w-full justify-start gap-2 ${
                  window.location.pathname === item.href
                    ? "bg-gray-200"
                    : "text-secondary"
                }`}
                variant="ghost"
                onClick={() => {
                  navigate(item.href);
                }}
              >
                {item.icon} {item.label}
              </Button>
            </div>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex gap-2 justify-b0880 items-center bg-gray-200 rounded-3xl px-2 mb-[25px]">
          <img
            src="https://avatar.iran.liara.run/public/boy?username=Ash"
            className="w-[50px]"
          />
          <div className="flex flex-col gap-1">
            <p>Koso.B</p>
            <p className="text-secondary text-sm">lorem@gmail.com</p>
          </div>
          <BsThreeDots className="text-lg" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
