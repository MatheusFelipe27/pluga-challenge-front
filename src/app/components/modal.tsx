import { AppType } from "../page";
import { AppCard } from "./appCard";

export type ModalProps = {
  app: AppType | null;
  lastApps: AppType[];
  onSelectApp: (app: AppType) => void;
  modalRef: React.RefObject<HTMLDialogElement | null>;
};

export function Modal({ app, lastApps, onSelectApp, modalRef }: ModalProps) {
  if (!app) return null;

  return (
    <dialog className="modal" ref={modalRef}>
      <div className="modal-box flex flex-col gap-6">
        <div className="mx-auto">
          <div className="flex gap-6">
            <figure style={{ backgroundColor: app.color }} className="rounded-full p-10">
              <img src={app.icon} alt={app.name} width={64} height={64} />
            </figure>
            <div className="py-6">
              <h2 className="mb-4 text-lg">{app.name}</h2>
              <a href={app.link} target="_blank" rel="noreferrer" className="btn btn-primary">
                Acessar
              </a>
            </div>
          </div>
        </div>
        <h2 className="text-center">Últimas ferramentas visualizadas</h2>
        <div className="grid grid-cols-3 gap-6">
          {lastApps.toReversed().map((lastApp) => (
            <AppCard key={lastApp.app_id} app={lastApp} onClick={onSelectApp} />
          ))}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
