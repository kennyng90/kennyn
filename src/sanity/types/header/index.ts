import type { SanityDocument } from '@sanity/types';
import type SchemaTypes from '../../schema-type';

export interface MainMenu extends SanityDocument {
  menuItems: Array<MainMenuItem>;
}

export interface MainMenuItem {
  _type: SchemaTypes.MAIN_MENU_LINK_ITEM_OBJECT;
  _key: string;
  label: string;
  url: string;
}
