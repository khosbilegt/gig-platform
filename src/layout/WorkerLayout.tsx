import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { UserSidebar } from "@/components/user/WorkerSidebar";

import WorkerHeader from "@/components/user/WorkerHeader";

function UserLayout({
  children,
  title,
  subtitle,
}: {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <SidebarProvider>
      <UserSidebar />
      {/* <SidebarTrigger /> */}
      <main className="w-full h-screen p-4">
        <WorkerHeader title={title} subtitle={subtitle} />
        {children}
      </main>
    </SidebarProvider>
  );
}

export default UserLayout;
