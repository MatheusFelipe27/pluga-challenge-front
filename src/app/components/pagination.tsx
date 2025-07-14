export type PaginationProps = {
  currentPage: number;
  maxPage: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ currentPage, maxPage, onPageChange }: PaginationProps) {
  return (
    <div className="text-center">
      <div className="join">
        <button onClick={() => onPageChange(Math.max(currentPage - 1, 1))} className={`join-item btn ${currentPage === 1 ? "btn-disabled" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        {Array.from({ length: maxPage }, (_, i) => i + 1).map((i) => (
          <button key={i} onClick={() => onPageChange(i)} className={`join-item btn ${i === currentPage ? "btn-active" : ""}`}>
            {i}
          </button>
        ))}
        <button onClick={() => onPageChange(Math.min(currentPage + 1, maxPage))} className={`join-item btn ${currentPage === maxPage ? "btn-disabled" : ""}`}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
