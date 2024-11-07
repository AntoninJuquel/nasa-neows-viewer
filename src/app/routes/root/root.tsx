import { Navbar } from "@/components/ui/navbar";
import { paths } from "@/config/paths";
import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar routes={[{ name: "Browse", href: paths.app.browse.getHref() }]} />
      <div className="flex-auto">
        <Outlet />
      </div>
    </div>
  );
}
