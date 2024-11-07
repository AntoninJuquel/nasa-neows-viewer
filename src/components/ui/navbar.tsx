import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { HomeIcon, MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Route {
  name: string;
  href: string;
}

export interface NavbarProps {
  routes: Route[];
}

export function Navbar({ routes }: NavbarProps) {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <a
            className={cn(
              buttonVariants({ size: "icon", variant: "ghost" }),
              "mr-6 lg:hidden flex"
            )}
            href="/"
          >
            <HomeIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </a>
          <div className="grid gap-2 py-6">
            {routes.map((route) => (
              <a
                key={route.href}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "flex w-full"
                )}
                href={route.href}
              >
                {route.name}
              </a>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <a
        className={cn(
          buttonVariants({ size: "icon", variant: "ghost" }),
          "mr-6 hidden lg:flex"
        )}
        href="/"
      >
        <HomeIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </a>
      <nav className="ml-auto hidden lg:flex gap-6">
        {routes.map((route) => (
          <a
            key={route.href}
            href={route.href}
            className={buttonVariants({ variant: "link" })}
          >
            {route.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
