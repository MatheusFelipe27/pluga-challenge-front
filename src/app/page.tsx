  'use client'
  import { useState, useRef, useEffect } from "react";
  import { SearchInput } from "./components/searchInput";
  import { AppCard } from "./components/appCard";
  import { Pagination } from "./components/pagination";
  import { Modal } from "./components/modal";
  import { Spinner } from "./components/spinner";
  import { EmptySearch } from "./components/emptySearch";
import { fetchApps } from "@/api";
import { handleSearch, handleSelectedApp } from "@/functions";

  export const PLUGA_CHALLENGE = "Pluga Challenge Front"

  export type AppType = {
    app_id: string;
    name: string;
    color: string;
    icon: string;
    link: string;
  };

  function App() {
    const [apps, setApps] = useState<AppType[]>([]);
    const [search, setSearch] = useState<string>("");
    const [page, setPage] = useState<number>(1);

    const [selectedApp, setSelectedApp] = useState<AppType | null>(null);
    const [lastSelectedApps, setLastSelectedApps] = useState<AppType[]>([]);
    const [shouldOpenModal, setShouldOpenModal] = useState<boolean>(false);

    const modalRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
      (async () => {
        try{
          const apps = await fetchApps();
          setApps(apps);

          const appsByAppId = apps.reduce((acc: Record<string, AppType>, app) => {
            acc[app.app_id] = app;
            return acc;
          }, {});
          
          const storedLastSelectedAppIds: string[] = JSON.parse(localStorage.getItem("lastSelectedApps") || "[]");
          setLastSelectedApps(storedLastSelectedAppIds.map((appId) => appsByAppId[appId]));
        }
        catch (er){
          console.error(er)
        }
      })();
    }, []);

    useEffect(() => {
      if (shouldOpenModal && modalRef.current) {
        modalRef.current.showModal();
        setShouldOpenModal(false);
      }
    }, [shouldOpenModal]);

    const normalizedSearch = search.toLowerCase();
    const filteredApps = apps.filter((app) => app.name.toLowerCase().includes(normalizedSearch));

    const maxPage = Math.ceil(filteredApps.length / 12) || 1;
    const pagedFilteredApps = filteredApps.slice((page - 1) * 12, page * 12);

    return (
      <>
        <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto p-6">
          <h1 className="text-3xl text-center">
            {PLUGA_CHALLENGE}
          </h1>
          <SearchInput value={search} onChange={(e) => handleSearch(e, setSearch, setPage)}/>
          {apps.length === 0 ? (
            <Spinner/>  
          ) : pagedFilteredApps.length === 0 ? (
            <EmptySearch search={search}/>
          ) : (
            <>
              <div className="grid grid-cols-4 gap-6">
                {pagedFilteredApps.map((app) =>
                  <AppCard 
                    key={app.app_id} 
                    app={app} 
                    onClick={(e) => handleSelectedApp(e, setSelectedApp, setShouldOpenModal, lastSelectedApps, setLastSelectedApps)} 
                  />  
                )}
              </div>
              <Pagination currentPage={page} maxPage={maxPage} onPageChange={setPage} />
            </>
          )}
        </div>
        <Modal 
          app={selectedApp} 
          lastApps={lastSelectedApps} 
          onSelectApp={(e)=> handleSelectedApp(e, setSelectedApp, setShouldOpenModal, lastSelectedApps, setLastSelectedApps)} 
          modalRef={modalRef} 
        />
      </>
    );
  }

  export default App;
