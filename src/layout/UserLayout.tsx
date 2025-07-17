import { Fragment } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { UserSidebar } from "@/components/user/WorkerSidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { BreadcrumbProps } from "@/schema/generic";

function UserLayout({
  children,
  breadcrumbs = [],
}: {
  children?: React.ReactNode;
  breadcrumbs?: BreadcrumbProps[];
}) {
  return (
    <SidebarProvider>
      <UserSidebar />
      <main className="p-4">
        <SidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((breadcrumb, index) => (
              <Fragment key={index}>
                <BreadcrumbItem>
                  {breadcrumb.href ? (
                    <BreadcrumbLink href={breadcrumb.href}>
                      {breadcrumb.label}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        {children}
      </main>
    </SidebarProvider>
  );
}

export default UserLayout;
