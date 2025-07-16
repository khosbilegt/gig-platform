import UserLayout from "@/layout/UserLayout";
import { BrowserRouter, Route, Routes } from "react-router";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="*"
          element={
            <UserLayout
              breadcrumbs={[
                { label: "Home", href: "/" },
                {
                  label: "Test",
                  href: "/test",
                },
              ]}
            >
              <p>Test</p>
            </UserLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
