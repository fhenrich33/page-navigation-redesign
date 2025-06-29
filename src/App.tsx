import { useEffect, useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import { Info, FileText, Plus, Clock } from "lucide-react";
import { useAtomValue } from "jotai";

import { activePageIdAtom } from "./activePageStore";
import { SortablePageButton } from "./components/SortablePageButton";

export default function App() {
  const [page, setPage] = useState([
    {
      id: "1",
      icon: <Info className="h-4 w-4" />,
      title: "Info",
      lastAdded: false,
    },
    {
      id: "2",
      icon: <FileText className="h-4 w-4" />,
      title: "Details",
      lastAdded: false,
    },
    {
      id: "3",
      icon: <FileText className="h-4 w-4" />,
      title: "Other",
      lastAdded: false,
    },
    {
      id: "4",
      icon: <Clock className="h-4 w-4" />,
      title: "Ending",
      lastAdded: false,
    },
  ]);
  const currentPageId = useAtomValue(activePageIdAtom);
  const currentPage =
    page.find((p) => p.id === currentPageId)?.title ||
    "Please select a form page.";

  const addPage = (insertAt?: number) => {
    const newPage = {
      id: Date.now() + "",
      icon: <FileText className="h-4 w-4" />,
      title: `Page (${page.length + 1})`,
      lastAdded: true,
    };

    if (insertAt || insertAt === 0) {
      setPage(() => page.toSpliced(insertAt + 1, 0, newPage));
    } else {
      setPage(() => [...page, newPage]);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".shake")?.classList.remove("shake");
      setPage((currentPages) => {
        currentPages.forEach((page) => (page.lastAdded = false));
        return currentPages;
      });
    }, 600);
  }, [page]);

  return (
    <DragDropProvider
      onDragOver={(event) => {
        setPage((currentPages) => move(currentPages, event));
      }}
    >
      <main className="min-h-screen bg-[#444444] p-4">
        <div className="mb-4 rounded-lg bg-white p-3">
          <div className="mb-4 grid h-50 place-content-center rounded-md bg-indigo-900 text-2xl text-white">
            {currentPage}
          </div>
          <nav className="relative flex max-w-max flex-wrap items-center">
            {page.map(({ id, icon, title, lastAdded }, index) => (
              <SortablePageButton
                key={id}
                id={id}
                index={index}
                icon={icon}
                title={title}
                lastAdded={lastAdded}
                addPage={addPage}
              />
            ))}
            <button
              onClick={() => addPage()}
              className="z-2 ml-12 flex cursor-pointer items-center gap-2 rounded-md bg-white px-[10px] py-1 text-black shadow hover:bg-[#f9fafb]"
            >
              <Plus className="h-4 w-4" />
              Add page
            </button>
            <div className="absolute flex h-[0.1px] w-full border-b-2 border-dashed" />
          </nav>
        </div>
      </main>
    </DragDropProvider>
  );
}
