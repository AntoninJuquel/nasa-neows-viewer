import { Navbar } from "@/components/ui/navbar";
import { paths } from "@/config/paths";
import { Outlet, useLocation } from "react-router-dom";

export function Root() {
  const location = useLocation();

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar
        routes={[{ name: "Browse", href: paths.app.browse.getHref() }]}
        activeRoute={location.pathname}
      />
      <div className="flex-auto">
        <Outlet />
      </div>
    </div>
  );
}
