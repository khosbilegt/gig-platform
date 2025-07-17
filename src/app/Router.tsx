import UserLayout from "@/layout/WorkerLayout";
import WorkerHome from "@/pages/WorkerHome";
import WorkerTasks from "@/pages/WorkerTasks";
import { BrowserRouter, Route, Routes } from "react-router";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/tasks"
          element={
            <UserLayout
              title="My Tasks"
              subtitle="Monitor all of your tasks here."
            >
              <WorkerTasks />
            </UserLayout>
          }
        />
        <Route
          index
          path="*"
          element={
            <UserLayout title="Home" subtitle="">
              <WorkerHome />
            </UserLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
