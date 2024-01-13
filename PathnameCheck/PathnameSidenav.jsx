"use client";

import SideNavBar from "@/app/(user)/components/SideNavBar";

import { usePathname } from "next/navigation";

function PathNameNav() {
  return usePathname() !== "/" ? null : <SideNavBar />;
}

export default PathNameNav;
