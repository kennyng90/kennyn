import type { Schema } from "@/sanity/types/schema";
import type { SanityDocument } from "@sanity/types";

export interface MainMenu extends SanityDocument {
  menuItems: Array<MainMenuItem>;
}

export interface MainMenuItem {
  _type: Schema.MAIN_MENU_LINK_ITEM_OBJECT;
  _key: string;
  label: string;
  url: string;
}
