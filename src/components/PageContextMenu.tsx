import type React from "react";
import { Clipboard, Edit3, Files, Flag, Trash2 } from "lucide-react";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "./ui/context-menu";

export function PageContextMenu({
  children,
  disabled = false,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild disabled={disabled}>
        <div className="cursor-pointer">{children}</div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <h2 className="p-1 px-2 font-[BL_Melody] text-xl font-semibold text-[#1a1a1a]">
          Settings
        </h2>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Flag className="mr-3 h-4 w-4 text-[#2f72e2]" />
          Set as first page
        </ContextMenuItem>
        <ContextMenuItem>
          <Edit3 className="mr-3 h-4 w-4 text-[#677289]" />
          Rename
        </ContextMenuItem>
        <ContextMenuItem>
          <Clipboard className="mr-3 h-4 w-4 text-[#677289]" />
          Copy
        </ContextMenuItem>
        <ContextMenuItem>
          <Files className="mr-3 h-4 w-4 text-[#677289]" />
          Duplicate
        </ContextMenuItem>
        <ContextMenuSeparator className="mx-2" />
        <ContextMenuItem>
          <Trash2 className="mr-3 h-4 w-4 text-[#ef494f]" />
          <span className="text-[#ef494f]">Delete</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
