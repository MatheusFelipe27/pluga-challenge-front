import { AppType } from "@/app/page";

export async function fetchApps(): Promise<AppType[]> {
  const response = await fetch("https://pluga.co/ferramentas_search.json");
  if (!response.ok) throw new Error("Erro ao buscar apps");
  const apps: AppType[] = await response.json();
  return apps;
}
