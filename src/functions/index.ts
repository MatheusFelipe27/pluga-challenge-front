import { AppType } from "@/app/page";

export function handleSearch(value: string, setSearch: (v: string) => void, setPage: (v: number) => void) {
  setSearch(value);
  setPage(1);
}

export function handleSelectedApp(
    app: AppType,
    selectedAppSetter: (app: AppType | null) => void,
    shouldOpenModalSetter: (v: boolean) => void,
    lastSelectedApps: AppType[],
    setLastSelectedApps: (apps: AppType[]) => void
  ) {
    selectedAppSetter(app);
    shouldOpenModalSetter(true);

    const lastSelectedAppsSet = new Set(lastSelectedApps);
    lastSelectedAppsSet.delete(app);
    lastSelectedAppsSet.add(app);

    const newLastSelectedApps = Array.from(lastSelectedAppsSet).slice(-3);
    setLastSelectedApps(newLastSelectedApps);

    const newLastSelectedAppIds = newLastSelectedApps.map((app) => app.app_id);
    localStorage.setItem("lastSelectedApps", JSON.stringify(newLastSelectedAppIds));
  }
