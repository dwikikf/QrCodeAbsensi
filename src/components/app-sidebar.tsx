import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import data from "@/data/nav-main";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
