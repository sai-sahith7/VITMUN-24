import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./navbar.css";

function NavList() {
  return (
    <ul className="nav-links my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="/"
          className="flex items-center hover:text-blue-900 hover:font-semibold transition-colors"
        >
          COMMITTEES
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="/"
          className="flex items-center hover:text-blue-900 hover:font-semibold transition-colors"
        >
          ABOUT US
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="/"
          className="flex items-center hover:text-blue-900 hover:font-semibold transition-colors"
        >
          RESOURCES
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="/"
          className="flex items-center hover:text-blue-900 hover:font-semibold transition-colors"
        >
          SCHEDULE
        </a>
      </Typography>
    </ul>
  );
}

export function NavbarMain() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="sticky mx-auto px-6 py-4 backdrop-blur shadow-none z-30">
      <div className="nav-content flex items-center justify-between text-blue-gray-900 font-body">
        {/* <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography> */}
        <ul class="flex space-x-4">
          <li className="hidden md:block">
            <img
              src="/images/vitlogoup.png"
              alt="vitlogo"
              class="max-w-xs h-10"
            />
          </li>
          <li className="hidden md:block">
            <img
              src="/images/dswlogo.png"
              alt="dswlogo"
              class="max-w-xs h-10"
            />
          </li>
          <li className="hidden md:block">
            <img
              src="/images/munsoclogo.png"
              alt="vitmunsoc"
              class="max-w-xs h-10"
            />
          </li>

          <li className="md:hidden">
            <img
              src="/images/vit_mobile.png"
              alt="vitlogo"
              class="max-w-xs h-12 w-12"
            />
          </li>
          <li className="md:hidden">
            <img src="/images/dsw.png" alt="dswlogo" class="max-w-xs h-auto" />
          </li>
          <li className="md:hidden">
            <img
              src="/images/vitmunsoc_mob.png"
              alt="vitmunsoc"
              class="max-w-xs h-auto"
            />
          </li>
        </ul>

        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
