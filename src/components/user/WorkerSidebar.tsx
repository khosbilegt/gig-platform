import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  RiDashboardHorizontalLine,
  RiUserFill,
  RiSettings3Line,
} from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router";

const sidebarItems = [
  {
    label: "Dashboard",
    href: "/",
    icon: <RiDashboardHorizontalLine />,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: <RiUserFill />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <RiSettings3Line />,
  },
];

export function UserSidebar() {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="text-lg font-semibold pl-2">Gigplatform</h2>
        <div className="relative">
          <Input placeholder="Search" className="pr-20" />
          <Button
            variant="default"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8"
          >
            <IoIosSearch />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="p-0 flex-col gap-2">
          {sidebarItems.map((item) => (
            <div
              key={item.href}
              className={`w-full border-l-5 ${
                window.location.pathname === item.href
                  ? "border-black"
                  : "text-secondary"
              } transition duration-200`}
            >
              <Button
                className="w-full justify-start gap-2 "
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
