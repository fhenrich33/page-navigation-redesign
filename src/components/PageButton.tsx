import type React from "react";
import { useAtom } from "jotai";
import { EllipsisVertical } from "lucide-react";

import { cn } from "@/utils";
import { activePageIdAtom } from "@/activePageStore";
import { PageContextMenu } from "./PageContextMenu";

export function PageButton({
  children,
  id,
  className,
  ...props
}: React.ComponentProps<"button">) {
  const [activePageId, setActivePageId] = useAtom(activePageIdAtom);

  return (
    <PageContextMenu disabled={id !== activePageId}>
      <button
        onClick={() => setActivePageId(id!)}
        className={cn([
          "relative z-2 flex cursor-pointer items-center gap-2 rounded-md bg-[rgb(236,238,241)] px-[10px] py-1 text-[#677289] outline-1 transition delay-100 duration-200 ease-in-out hover:scale-102 hover:bg-[rgb(217,220,225)] focus:bg-[#f9fafb] focus:text-[#1A1A1A] focus:shadow focus:*:first:text-[#f59d0e] focus-visible:outline-[#2F72E2]",
          id === activePageId &&
            "z-1 bg-[#f9fafb] text-[#1A1A1A] shadow *:first:text-[#f59d0e]",
          className,
        ])}
        {...props}
      >
        {children}
        {id === activePageId && (
          <EllipsisVertical size={20} className="text-[#9DA4B2]" />
        )}
      </button>
    </PageContextMenu>
  );
}
