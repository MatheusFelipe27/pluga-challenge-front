import { AppType } from "../page";

type AppCardProps = {
  app: AppType;
  onClick: (app: AppType) => void;
  className?: string;
};

export function AppCard({ app, onClick, className }: AppCardProps) {
  return (
    <a
      onClick={() => onClick(app)}
      className={`card card-sm group bg-base-100 cursor-pointer transition shadow-sm hover:shadow-lg ${className ?? ''}`}
    >
      <figure style={{ backgroundColor: app.color }} className="p-6">
        <img src={app.icon} alt={app.name} width={64} height={64} className="transition group-hover:scale-110" />
      </figure>
      <div className="card-body min-h-17 text-center justify-center">
        <h4>{app.name}</h4>
      </div>
    </a>
  );
}
