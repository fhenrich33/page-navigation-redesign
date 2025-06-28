import { useSortable } from "@dnd-kit/react/sortable";
import { PageButton } from "./PageButton";
import { Plus } from "lucide-react";

export function SortablePageButton({
  id,
  index,
  icon,
  title,
  lastAdded,
  addPage,
}: {
  id: string;
  index: number;
  icon: React.ReactNode;
  title: string;
  lastAdded: boolean;
  addPage: (index?: number) => void;
}) {
  const { ref } = useSortable({ id, index });

  return (
    <div
      ref={ref}
      tabIndex={-1}
      className="z-1 flex items-center"
    >
      <PageButton id={id} className={lastAdded ? "shake" : ""}>
        {icon}
        {title}
      </PageButton>
      <div className="group flex h-10 w-12 items-center justify-center">
        <button
          tabIndex={-1}
          onClick={() => addPage(index)}
          className="flex h-4 w-4 -translate-x-3 cursor-pointer items-center justify-center rounded-full bg-white opacity-0 shadow outline-1 transition delay-100 duration-100 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
        >
          <Plus className="text-zite-primary h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
