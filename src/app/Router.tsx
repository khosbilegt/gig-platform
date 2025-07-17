import UserLayout from "@/layout/UserLayout";
import WorkerDashboard from "@/pages/WorkerDashboard";
import { BrowserRouter, Route, Routes } from "react-router";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="*"
          element={
            <UserLayout breadcrumbs={[{ label: "Home", href: "/" }]}>
              <WorkerDashboard />
            </UserLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
