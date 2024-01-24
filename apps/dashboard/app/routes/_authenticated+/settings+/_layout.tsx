import { Outlet } from "@remix-run/react";
import { AppBottomBar, AppNavigationMobile } from "~/components/AppNavigation";
import {
  SettingsNavMobile,
  SettingsNavigation,
} from "~/components/SettingsNavigation";

export default function Layout() {
  return (
    <div className="flex min-h-[100svh] flex-1 relative">
      <SettingsNavigation />
      <div className="flex-1 flex flex-col">
        <AppNavigationMobile />
        <main
          id="main"
          className="flex-1 flex flex-col bg-background mb-24 md:mb-0 p-6 md:p-12"
        >
          <SettingsNavMobile />
          <Outlet />
        </main>
      </div>
    </div>
  );
}
