import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { postType } from './postType'
import { categoryType } from './categoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType, categoryType],
}
